"""Python wrapper for Engine A: High-Throughput Segmented Bit-Sieve Goldbach Verifier."""
import os
import ctypes
import subprocess
from dataclasses import dataclass
from typing import Optional, Tuple

@dataclass
class VerificationResult:
    low: int
    high: int
    counterexample: Optional[int]
    max_pmin: int
    max_pmin_n: int
    is_verified: bool

class GoldbachVerifier:
    def __init__(self, lib_path: Optional[str] = None):
        if lib_path is None:
            csrc_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "csrc"))
            lib_path = os.path.join(csrc_dir, "libverifier.dylib")
            if not os.path.exists(lib_path):
                self._compile_lib(csrc_dir, lib_path)
        
        self.lib = ctypes.CDLL(lib_path)
        
        # int verify_goldbach_range(uint64_t low, uint64_t high, uint64_t *counterexample, uint32_t *max_pmin, uint64_t *max_pmin_n)
        self.lib.verify_goldbach_range.argtypes = [
            ctypes.c_uint64,
            ctypes.c_uint64,
            ctypes.POINTER(ctypes.c_uint64),
            ctypes.POINTER(ctypes.c_uint32),
            ctypes.POINTER(ctypes.c_uint64)
        ]
        self.lib.verify_goldbach_range.restype = ctypes.c_int

        # int extract_pmin_champions(uint64_t max_N, uint64_t *champion_N, uint32_t *champion_pmin, size_t max_champions, size_t *num_champions)
        self.lib.extract_pmin_champions.argtypes = [
            ctypes.c_uint64,
            ctypes.POINTER(ctypes.c_uint64),
            ctypes.POINTER(ctypes.c_uint32),
            ctypes.c_size_t,
            ctypes.POINTER(ctypes.c_size_t)
        ]
        self.lib.extract_pmin_champions.restype = ctypes.c_int

    def _compile_lib(self, csrc_dir: str, lib_path: str):
        c_src = os.path.join(csrc_dir, "verifier.c")
        cmd = ["clang", "-O3", "-fPIC", "-shared", "-o", lib_path, c_src]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"Compilation of libverifier failed: {res.stderr}")

    def verify_range(self, low: int, high: int) -> VerificationResult:
        """Verify Goldbach for all even numbers in [low, high]."""
        ce = ctypes.c_uint64(0)
        max_pmin = ctypes.c_uint32(0)
        max_pmin_n = ctypes.c_uint64(0)

        ret = self.lib.verify_goldbach_range(
            ctypes.c_uint64(low),
            ctypes.c_uint64(high),
            ctypes.byref(ce),
            ctypes.byref(max_pmin),
            ctypes.byref(max_pmin_n)
        )

        if ret != 0 and ce.value != 0:
            return VerificationResult(
                low=low,
                high=high,
                counterexample=ce.value,
                max_pmin=max_pmin.value,
                max_pmin_n=max_pmin_n.value,
                is_verified=False
            )

        return VerificationResult(
            low=low,
            high=high,
            counterexample=None,
            max_pmin=max_pmin.value,
            max_pmin_n=max_pmin_n.value,
            is_verified=True
        )

    def get_pmin_champions(self, max_n: int, max_champions: int = 1000) -> list:
        """Extract all champion integers N* where p_min(N*) > max_{M < N*} p_min(M).
        
        Returns list of tuples: (N, p_min(N)).
        """
        arr_n = (ctypes.c_uint64 * max_champions)()
        arr_p = (ctypes.c_uint32 * max_champions)()
        num_champs = ctypes.c_size_t(0)

        ret = self.lib.extract_pmin_champions(
            ctypes.c_uint64(max_n),
            arr_n,
            arr_p,
            ctypes.c_size_t(max_champions),
            ctypes.byref(num_champs)
        )
        if ret != 0:
            raise RuntimeError(f"extract_pmin_champions failed for max_N={max_n}")

        champions = []
        for i in range(num_champs.value):
            champions.append((arr_n[i], arr_p[i]))
        return champions
