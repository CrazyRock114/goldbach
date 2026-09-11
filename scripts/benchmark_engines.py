"""Benchmarking suite for Engine A (Verifier) and Engine B (NTT Counting).

Measures:
- Engine A verification speed (numbers verified per second), counterexample check, and pmin champions.
- Engine B NTT exact counting speed and memory scalability across powers of 2.
"""
import time
from src.verifier import GoldbachVerifier
from src.ntt_goldbach import NTTGoldbach
from src.hardy_littlewood import expected_k_asymptotic, singular_series

def benchmark_engine_a(ranges):
    print("=" * 70)
    print("ENGINE A: HIGH-THROUGHPUT SEGMENTED BIT-SIEVE VERIFIER (C)")
    print("=" * 70)
    verifier = GoldbachVerifier()

    for low, high in ranges:
        num_even = (high - low) // 2 + 1
        t0 = time.perf_counter()
        res = verifier.verify_range(low, high)
        elapsed = time.perf_counter() - t0
        speed = num_even / elapsed if elapsed > 0 else 0

        status = "PASSED (0 counterexamples)" if res.is_verified else f"FAILED (Counterexample: {res.counterexample})"
        print(f"Range [{low:,}, {high:,}] ({num_even:,} even N):")
        print(f"  Time: {elapsed:.3f} s | Throughput: {speed:,.0f} N/s")
        print(f"  Status: {status}")
        print(f"  Max p_min in range: {res.max_pmin} (achieved at N = {res.max_pmin_n:,})")
        print("-" * 70)

def benchmark_engine_b(sizes):
    print("=" * 70)
    print("ENGINE B: EXACT NUMBER THEORETIC TRANSFORM (NTT) COUNTING (C)")
    print("=" * 70)
    ntt = NTTGoldbach()

    for max_n in sizes:
        t0 = time.perf_counter()
        k_arr = ntt.compute_k_array(max_n)
        elapsed = time.perf_counter() - t0

        # Sample check at max_n (or max_n - (max_n % 2))
        sample_n = max_n if (max_n % 2 == 0) else (max_n - 1)
        actual_k = k_arr[sample_n]
        exp_k = expected_k_asymptotic(sample_n, use_integral=True)
        ratio = actual_k / exp_k if exp_k > 0 else 0

        print(f"NTT Decomposition up to N = {max_n:,}:")
        print(f"  Execution time: {elapsed:.3f} s")
        print(f"  Sample Check at N = {sample_n:,}:")
        print(f"    Exact k(N) = {actual_k:,}")
        print(f"    Singular Series S(N) = {singular_series(sample_n):.3f}")
        print(f"    Hardy-Littlewood E[k(N)] = {exp_k:,.1f}")
        print(f"    Ratio k(N) / E[k(N)] = {ratio:.3f}")
        print("-" * 70)

if __name__ == "__main__":
    # Test Engine A on ranges up to 50M
    benchmark_engine_a([
        (4, 1000000),      # 1M
        (1000002, 10000000), # 1M to 10M
        (10000002, 30000000) # 10M to 30M
    ])

    # Test Engine B on powers of 2
    benchmark_engine_b([
        65536,    # 2^16
        262144,   # 2^18
        1048576,  # 2^20
        2097152   # 2^21
    ])
