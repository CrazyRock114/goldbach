"""Core Goldbach decomposition routines and structural analysis.

Computes:
- k(N): number of unordered prime pairs {p, q} with p + q = N, p <= q
- p_min(N): smallest prime in any Goldbach decomposition of N
- p_max(N): largest prime in any Goldbach decomposition of N (= N - p_min(N))
- Off-diagonal vs diagonal decomposition breakdown
"""
from dataclasses import dataclass
from typing import List, Tuple, Optional
from src.sieve import PrimeSieve

@dataclass(frozen=True)
class GoldbachStat:
    n: int
    k: int
    p_min: int
    p_max: int
    has_diagonal: bool
    num_off_diagonal: int

class GoldbachDecomposer:
    """Decomposes even integers into prime sums using a precomputed sieve."""
    def __init__(self, limit: int):
        self.limit = limit
        self.sieve = PrimeSieve(limit)
        
    def decompose(self, n: int) -> List[Tuple[int, int]]:
        """Return all unordered prime pairs (p, q) with p <= q and p + q = n."""
        if n < 4 or (n & 1) != 0 or n > self.limit:
            return []
        
        pairs = []
        # Check p = 2
        if n - 2 == 2:
            pairs.append((2, 2))
        elif self.sieve.is_prime(n - 2) and n == 4: # for n > 4, n-2 is even composite
            pairs.append((2, n - 2))
            
        # Check odd primes p <= n // 2
        half_n = n // 2
        for p in self.sieve.iter_odd_primes():
            if p > half_n:
                break
            q = n - p
            if self.sieve.is_prime(q):
                pairs.append((p, q))
                
        return pairs

    def get_stat(self, n: int) -> Optional[GoldbachStat]:
        """Compute summary statistics for even n."""
        if n < 4 or (n & 1) != 0 or n > self.limit:
            return None
            
        # Fast path for p_min
        p_min = None
        has_diagonal = False
        k = 0
        
        # Check p = 2
        if n == 4:
            p_min = 2
            k = 1
            has_diagonal = True
            return GoldbachStat(n=4, k=1, p_min=2, p_max=2, has_diagonal=True, num_off_diagonal=0)
            
        # For n > 4, n - 2 is even and > 2, hence composite. So p=2 is never a Goldbach prime.
        half_n = n // 2
        
        for p in self.sieve.iter_odd_primes():
            if p > half_n:
                break
            q = n - p
            if self.sieve.is_prime(q):
                k += 1
                if p_min is None:
                    p_min = p
                if p == q:
                    has_diagonal = True
                    
        if p_min is None:
            # Counterexample to Goldbach if k == 0
            return GoldbachStat(n=n, k=0, p_min=0, p_max=0, has_diagonal=False, num_off_diagonal=0)
            
        num_off = k - (1 if has_diagonal else 0)
        return GoldbachStat(
            n=n,
            k=k,
            p_min=p_min,
            p_max=n - p_min,
            has_diagonal=has_diagonal,
            num_off_diagonal=num_off
        )

    def find_p_min(self, n: int) -> int:
        """Find p_min(N) as quickly as possible without computing all pairs."""
        if n == 4:
            return 2
        if n < 4 or (n & 1) != 0:
            return 0
            
        half_n = n // 2
        for p in self.sieve.iter_odd_primes():
            if p > half_n:
                break
            if self.sieve.is_prime(n - p):
                return p
        return 0
