"""High-performance prime sieve implementation.

Provides odd-only bytearray / bit-packed sieves with O(1) membership testing
and fast iteration over primes up to N.
"""
from typing import List, Generator
import array

class PrimeSieve:
    """Odd-only sieve of Eratosthenes.
    
    Index i in odd_sieve corresponds to odd number 2*i + 1.
    odd_sieve[i] is True if 2*i + 1 is prime, False otherwise.
    """
    def __init__(self, limit: int):
        self.limit = max(2, limit)
        self.num_odds = (self.limit - 1) // 2 + 1
        # bytearray: 1 byte per odd number for maximum lookup speed in Python
        self._is_prime = bytearray(b"\x01") * self.num_odds
        self._is_prime[0] = 0  # 1 is not prime
        
        # Sieve odd multiples
        p = 3
        while p * p <= self.limit:
            if self._is_prime[p // 2]:
                # Start marking at p*p, step by 2*p (only odd multiples)
                start_idx = (p * p) // 2
                step = p
                self._is_prime[start_idx : self.num_odds : step] = bytearray(
                    (self.num_odds - 1 - start_idx) // step + 1
                )
            p += 2

    def is_prime(self, n: int) -> bool:
        """Check if integer n is prime in O(1)."""
        if n < 2:
            return False
        if n == 2:
            return True
        if (n & 1) == 0:
            return False
        if n > self.limit:
            raise ValueError(f"Number {n} exceeds sieve limit {self.limit}")
        return bool(self._is_prime[n // 2])

    def primes(self) -> List[int]:
        """Return list of all primes up to limit."""
        res = [2]
        res.extend(2 * i + 1 for i in range(1, self.num_odds) if self._is_prime[i])
        return res

    def prime_count(self) -> int:
        """Return pi(limit)."""
        return 1 + sum(self._is_prime)

    def iter_odd_primes(self) -> Generator[int, None, None]:
        """Generate all odd primes up to limit."""
        for i in range(1, self.num_odds):
            if self._is_prime[i]:
                yield 2 * i + 1
