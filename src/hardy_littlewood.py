"""Hardy-Littlewood heuristic and singular series computation for Goldbach Conjecture.

Mathematical Background:
Hardy & Littlewood (1923, Conjecture 'A'):
The number of ordered representations of an even integer N as the sum of two primes is:
    g(N) ~ S(N) * J(N)
where J(N) = \\int_2^{N-2} dx / (log x * log(N-x)) ~ N / log^2 N,
and S(N) is the Singular Series:
    S(N) = 2 * C_2 * \\prod_{p | N, p > 2} (p - 1) / (p - 2)
with the Twin Prime Constant:
    C_2 = \\prod_{p > 2} (1 - 1/(p - 1)^2) \\approx 0.660161815846869573927812110...

For UNORDERED prime pairs {p, q} with p <= q, k(N) = (g(N) + [N/2 is prime]) / 2:
    E[k(N)] ~ (1/2) * S(N) * (N / log^2 N)
            = C_2 * (N / log^2 N) * \\prod_{p | N, p > 2} (p - 1) / (p - 2)

Note on literature mistake in legacy reports:
The previous exploration compared k(N) against 2 * C_2 * N / log^2 N without the
local singular series factor \\prod_{p|N} (p-1)/(p-2) and without the 1/2 factor
for unordered pairs. Since the average of \\prod_{p|N, p>2} (p-1)/(p-2) over even N
is exactly 1 / C_2, the average unordered expectation is N / log^2 N. Comparing against
2 * C_2 * N / log^2 N produced a persistent ratio ~ 1 / (2 * C_2) \\approx 0.757, which
confused the previous AI into generating dozens of false conjectures.
"""
import math
from typing import List, Set

# Twin prime constant to 30 decimal places
TWIN_PRIME_CONSTANT = 0.66016181584686957392781211001455577

def get_odd_prime_factors(n: int) -> Set[int]:
    """Return distinct odd prime factors of n."""
    factors = set()
    # Remove factors of 2
    while (n & 1) == 0:
        n //= 2
    
    # Factor out odd primes
    d = 3
    while d * d <= n:
        if n % d == 0:
            factors.add(d)
            while n % d == 0:
                n //= d
        d += 2
    if n > 2:
        factors.add(n)
    return factors

def singular_series(n: int) -> float:
    """Compute the Hardy-Littlewood singular series S(N) for even N.
    
    S(N) = 2 * C_2 * \\prod_{p | N, p > 2} (p - 1) / (p - 2)
    """
    if n < 4 or (n & 1) != 0:
        return 0.0
    
    prod = 1.0
    for p in get_odd_prime_factors(n):
        prod *= (p - 1.0) / (p - 2.0)
        
    return 2.0 * TWIN_PRIME_CONSTANT * prod

def logarithmic_integral_convolution(n: int, num_steps: int = 100) -> float:
    """Numerical integration of \\int_2^{N-2} dx / (log x * log(N - x)).
    
    Provides higher accuracy than the asymptotic N / log^2 N for smaller N.
    """
    if n <= 4:
        return 0.0
    
    # Trapezoidal integration
    a = 2.0
    b = float(n - 2)
    h = (b - a) / num_steps
    
    s = 0.5 * (1.0 / (math.log(a) * math.log(n - a)) + 1.0 / (math.log(b) * math.log(n - b)))
    for i in range(1, num_steps):
        x = a + i * h
        s += 1.0 / (math.log(x) * math.log(n - x))
    return s * h

def expected_k_asymptotic(n: int, use_integral: bool = False) -> float:
    """Compute theoretical expected number of unordered Goldbach pairs E[k(N)].
    
    E[k(N)] = (1/2) * S(N) * J(N)
    """
    if n < 4 or (n & 1) != 0:
        return 0.0
    
    s_n = singular_series(n)
    if use_integral:
        j_n = logarithmic_integral_convolution(n)
    else:
        log_n = math.log(n)
        j_n = n / (log_n * log_n)
        
    return 0.5 * s_n * j_n

def normalized_goldbach_ratio(n: int, actual_k: int, use_integral: bool = True) -> float:
    """Compute ratio of actual k(N) to Hardy-Littlewood expectation.
    
    Under Hardy-Littlewood Conjecture A, this ratio converges to 1.0.
    """
    exp_k = expected_k_asymptotic(n, use_integral=use_integral)
    if exp_k <= 0:
        return 0.0
    return actual_k / exp_k
