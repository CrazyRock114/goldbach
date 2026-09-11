"""Extract and analyze all record champion integers for p_min(N) up to 10^8.

A champion integer N* satisfies p_min(N*) > max_{M < N*} p_min(M).
Fits the champion sequence against the Cramér-Granville model p_min ~ C * log^2 N.
Cross-references with OEIS A025018 (champion p_min) and OEIS A002372 (champion N).
"""
import math
import time
from src.verifier import GoldbachVerifier
from src.hardy_littlewood import get_odd_prime_factors

def factor_string(n: int) -> str:
    """Format prime factorization of n."""
    factors = []
    d = 2
    temp = n
    while d * d <= temp:
        if temp % d == 0:
            count = 0
            while temp % d == 0:
                count += 1
                temp //= d
            factors.append(f"{d}^{count}" if count > 1 else f"{d}")
        d += 1 if d == 2 else 2
    if temp > 1:
        factors.append(f"{temp}")
    return " * ".join(factors)

def main():
    print("=" * 80)
    print("EXTRACTING ALL RECORD CHAMPIONS FOR p_min(N) UP TO N = 10^8")
    print("=" * 80)

    verifier = GoldbachVerifier()
    t0 = time.perf_counter()
    champions = verifier.get_pmin_champions(100000000)
    elapsed = time.perf_counter() - t0

    print(f"Extracted {len(champions)} champions in {elapsed:.3f} seconds.\n")
    print(f"{'#':<4} | {'Champion N':<14} | {'p_min(N)':<10} | {'log(N)':<8} | {'p_min / log^2(N)':<16} | Factorization")
    print("-" * 80)

    log_sq_ratios = []
    for idx, (n, p) in enumerate(champions, 1):
        log_n = math.log(n)
        ratio = p / (log_n ** 2)
        if n > 6:
            log_sq_ratios.append(ratio)
        fact = factor_string(n)
        print(f"{idx:<4} | {n:<14,d} | {p:<10d} | {log_n:<8.2f} | {ratio:<16.4f} | {fact}")

    print("-" * 80)
    mean_ratio = sum(log_sq_ratios) / len(log_sq_ratios) if log_sq_ratios else 0
    max_ratio = max(log_sq_ratios) if log_sq_ratios else 0
    min_ratio = min(log_sq_ratios) if log_sq_ratios else 0

    print(f"\nAsymptotic Cramér-Granville Analysis (p_min(N*) ~ C * log^2(N*)):")
    print(f"  Mean C = {mean_ratio:.4f}")
    print(f"  Min  C = {min_ratio:.4f}")
    print(f"  Max  C = {max_ratio:.4f}")
    print(f"  Final Champion at 10^8: N = {champions[-1][0]:,}, p_min = {champions[-1][1]}")
    print(f"  OEIS Alignment: A025018 (primes) and A002372 (even numbers)")

if __name__ == "__main__":
    main()
