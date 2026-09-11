"""Python wrapper for Engine B: Exact Goldbach Decomposition Counting via NTT."""
import os
import ctypes
import subprocess
from typing import Optional, List

class NTTGoldbach:
    def __init__(self, lib_path: Optional[str] = None):
        if lib_path is None:
            csrc_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "csrc"))
            lib_path = os.path.join(csrc_dir, "libnttgoldbach.dylib")
            if not os.path.exists(lib_path):
                self._compile_lib(csrc_dir, lib_path)

        self.lib = ctypes.CDLL(lib_path)

        # int compute_goldbach_counts_ntt(uint32_t max_N, uint32_t *k_out)
        self.lib.compute_goldbach_counts_ntt.argtypes = [
            ctypes.c_uint32,
            ctypes.POINTER(ctypes.c_uint32)
        ]
        self.lib.compute_goldbach_counts_ntt.restype = ctypes.c_int

    def _compile_lib(self, csrc_dir: str, lib_path: str):
        c_src = os.path.join(csrc_dir, "ntt_goldbach.c")
        cmd = ["clang", "-O3", "-fPIC", "-shared", "-o", lib_path, c_src]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"Compilation of libnttgoldbach failed: {res.stderr}")

    def compute_k_array(self, max_n: int) -> List[int]:
        """Compute exact k(N) for all integers up to max_n.
        
        Returns a list of length max_n + 1 where index N has value k(N).
        """
        arr_type = ctypes.c_uint32 * (max_n + 1)
        k_out = arr_type()

        ret = self.lib.compute_goldbach_counts_ntt(
            ctypes.c_uint32(max_n),
            k_out
        )
        if ret != 0:
            raise RuntimeError(f"compute_goldbach_counts_ntt failed for max_N={max_n}")

        return list(k_out)
