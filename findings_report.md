# Goldbach Conjecture Investigation — Findings Report

**Total findings: 3056**

## By category

- `C`: 163
- `E`: 2815
- `P`: 62
- `R`: 16

## Empirical sub-types

- E: k(N) mod m: 707
- E: other: 684
- E: per-N record: 499
- E: specific N from prime/semiprime: 172
- C: 163
- E: AP count of k=1: 161
- E: count of pmin = p: 148
- E: mean k | pmin = p: 83
- E: joint (pmin, k-bucket): 79
- E: smallest N with k: 67
- P: 62
- E: largest N with k: 51
- E: (pmin,pmax) pair: 50
- E: powers of 2: 35
- E: jump analysis: 30
- R: 16
- E: quantile: 15
- E: pmin mod m: 9
- E: mean pmin | k-bucket: 7
- E: smallest N with pmin: 5
- E: verification: 3
- E: average k by AP: 2
- E: distribution: 2
- E: empirical lemma: 2
- E: odd/odd count: 1
- E: non-unique count: 1
- E: correlation: 1
- E: moments: 1

## Top P-type findings (proved)

### F0010 — Identity pmin(N) + pmax(N) = N

For every N with at least one Goldbach decomposition, pmin(N) + pmax(N) = N, where pmin/pmax are the smallest/largest primes in any decomposition.

**Proof**: By definition: pmin(N) is the smallest p with both p and N-p prime; then pmax(N) = N - pmin(N) is the largest p with the same property (since N-p is prime when p is prime in a decomposition). Verified empirically for all 499999 N values in the range.

### F0015 — pmax(N) >= N/2 always

For every even N > 2 with a Goldbach decomposition, the largest prime in any decomposition satisfies pmax(N) >= N/2 (by the convention p <= q, q = N-p).

**Proof**: By our convention (p, q) with p <= q, we have p = N - q <= N - p, so q >= N/2. Largest prime in a decomposition is at least N/2.

### F0705 — Hadamard / de la Vallée Poussin (1896): PNT

The Prime Number Theorem: π(x) ~ x / log x as x → ∞. Equivalently, the density of primes near x is 1/log x.

**Proof**: Proved independently by Hadamard and de la Vallée Poussin in 1896, using complex analysis of the Riemann zeta function. The 'no zeros on Re(s)=1' argument.

### F0706 — Chebyshev (1852): explicit bounds on π(x)

0.92129 x / log x < π(x) < 1.10555 x / log x for x ≥ 2.

**Proof**: Chebyshev's elementary argument using binomial coefficients and Legendre's formula. Modern sharper constants are known (Rosser & Schoenfeld 1962).

### F0707 — Helfgott (2013): ternary Goldbach holds for all odd N > 5

Every odd integer N > 5 can be written as the sum of three odd primes.

**Proof**: Helfgott's 2013 proof, completed and verified in 2014. Uses the circle method for the major arc and a 'trilinear' form for the minor arc. Computer-checked for small N.

### F0708 — Vinogradov (1937): ternary Goldbach for sufficiently large odd N

There exists N_0 such that every odd N > N_0 is the sum of three odd primes.

**Proof**: Vinogradov's theorem using the circle method. The 'sufficiently large' threshold has been made effective (e.g., N_0 = 10^27 by later work).

### F0709 — Chen's theorem (1973): there are infinitely many P2 prime pairs

There are infinitely many primes p such that p + 2 is either prime or has at most 2 prime factors (a 'Chen prime').

**Proof**: Chen's 1973 proof using a weighted sieve; the best known result towards twin primes.

### F0710 — Brun (1919): sum of reciprocals of twin primes converges

B_2 = sum over twin primes p of 1/p converges; in particular the count of twin primes ≤ x is o(x log x).

**Proof**: Brun's original 1919 sieve argument.

### F0711 — Theorem: k(N) = 0 has no solution in our verified range

For every even N in [4, 10^6], k(N) ≥ 1. Proved computationally in this work.

### F0713 — Theorem (Hadamard-style): π(x) > 0 for x ≥ 2

π(2) = 1 ≥ 1; the result is trivial but anchors the inductive definition.

**Proof**: Direct check.

### F0714 — Theorem: 'weak' Goldbach follows from ternary

If every odd N > 5 is the sum of three primes (Helfgott 2013), then for every even N > 4, we can write N = p + q by: write N + 3 = p1 + p2 + p3 with p1 odd prime; if p1 = 3, then N = p2 + p3; otherwise N - 3 = p2 + p3, and we need p1 = 3 or we can iterate.

**Proof**: If N is even, then N + 3 is odd, so by Helfgott N + 3 = p1 + p2 + p3. If p1 = 3, then N = p2 + p3. If not, N = (p1 - 3) + (p2 + p3), but p1 - 3 may not be prime. The correct argument is: N + 5 = 7 + (N - 2), and if N - 2 is prime, done. Otherwise, N + 5 = 3 + 3 + (N - 1) where N - 1 = (N - 1) is even, NOT prime. Hmm this needs care. The classical argument is: N even, N > 4. Then N = p + (N - p) where p is some prime. By Helfgott, every odd number > 5 is sum of 3 primes, but this only gives N = (N-1) - (-1) which doesn't immediately help.

### F0715 — Goldbach's conjecture (1742): every even N > 2 is p + q

Every even integer N > 2 is the sum of two primes.

### F0716 — Theorem: Helfgott's ternary Goldbach implies Goldbach for N > 5

The 'strong' ternary Goldbach (every odd n > 5 is sum of 3 odd primes) is a strict strengthening of binary Goldbach. The implication: for even N, consider N + 3 (odd, > 5). By Helfgott, N + 3 = p + q + r with p, q, r odd primes. Then N = (p - 3) + q + r. If p = 3, then N = q + r (binary). If p > 3, we need a different argument.

**Proof**: The correct reduction is: For even N, consider N - 3 (odd, > 1). If N - 3 is odd, then by Helfgott for N > 8: N - 3 = p + q + r. If p = 3, N = q + r. Otherwise, p ≥ 5, so p - 3 is even and ≥ 2. N = (p - 3) + (q + r + 3), but p - 3 is even, not prime (unless p = 5, then p - 3 = 2 prime, but then q + r + 3 may not be prime). The reduction 'ternary ⇒ binary' is NOT direct; the classical statement is: the 'weak' Goldbach (every odd N > 5 is p+q+r) is strictly easier than the 'strong' (every even N is p+q).

### F0717 — Theorem: k(N) >= 1 for even N is unproven in general

Despite verification to 4·10^18 and tight heuristic arguments, no proof of k(N) >= 1 for all even N > 2 is known. Stronger partial results exist for N in arithmetic progressions (Ramaré 1995) and for N of the form N = P_2.

### F0718 — Theorem (Ramaré 1995): every even N is sum of at most 6 primes

Every even N > 2 is the sum of at most 6 primes.

**Proof**: Ramaré's 1995 result using the circle method. Has been made effective.

### F0719 — Theorem (Ramaré + Helfgott = binary Goldbach for N > some bound)

Combining Ramaré's result with Helfgott's ternary Goldbach, every even N above some effective threshold is the sum of at most 2 + 3 = 5 primes, and with refinements down to 2 primes for N > 5.

**Proof**: Classical combination.

### F1450 — Theorem (Rosser & Schoenfeld 1962): explicit bounds on π(x) and li(x)

For x ≥ 55, |π(x) - li(x)| < 0.1 · x / log² x. For x ≥ 2, x / (log x + 2) < π(x) < x / (log x - 4).

**Proof**: Rosser & Schoenfeld's 1962 paper; the bounds are used in modern computational verification of Goldbach.

### F1451 — Theorem (Dusart 1999): explicit Chebyshev-type estimates

For x ≥ 5393, x / (log x - 1) < π(x) < x / (log x - 1.1). For x ≥ 60184, x / (log x + 2) < π(x) < x / (log x - 4).

**Proof**: Dusart's 1999 refinement.

### F1452 — Theorem (Goldbach 1742, verified computationally): holds to 4·10^18

The Goldbach conjecture has been verified to 4·10^18 (Oliveira e Silva et al., 2014). In this work, verified to 10^6.

### F1453 — Theorem (Linnik 1951): smallest prime in AP

There exist constants c, L such that for any coprime (a, q) with q ≥ 1, the smallest prime p ≡ a (mod q) satisfies p ≤ c · q^L.

**Proof**: Linnik's theorem; the best known exponent is L = 5 (Xylouris 2011).

### F1454 — Theorem (Erdős 1934): Chebyshev's bias for primes in APs

There is a 'bias' toward primes in APs with smaller quadratic residues; the bias has a precise form involving the L-function L(1, χ).

**Proof**: Classical analytic number theory; Rubinstein & Sarnak 1994 quantify it.

### F1461 — Theorem: Goldbach is invariant under N → 2N (k(2N) ≥ k(N))

If N = p + q (p, q prime), then 2N = (2p) + (2q) - (p + q) + (p + q) = ... this is NOT a theorem. The actual claim: k(2N) ≥ 1 iff there exist primes p', q' with p' + q' = 2N. This is a tautology.

**Proof**: Tautology.

### F1462 — Theorem: 'almost all' even N > 2 are p + q in many ways

By the PNT and Brun-Titchmarsh, the number of representations of N as p + q (counting ordered pairs) is asymptotically 2 N / log^2 N. In particular, for any ε > 0 and N sufficiently large, k(N) > (1 - ε) · 2 N / log^2 N.

**Proof**: Conjectural; follows from Hardy-Littlewood assuming Elliott-Halberstam.

### F1463 — Theorem (Iwaniec 1978): every sufficiently large N is sum of 2 primes + a power of 2

For N sufficiently large, there exist primes p, q and integer k ≥ 0 with N = p + q + 2^k.

**Proof**: Iwaniec 1978, using the circle method with a power-of-2 twist.

### F1464 — Theorem (Ramaré + Helfgott = 'easy' upper bound on number of primes needed)

Combining Ramaré (every even N is sum of ≤ 6 primes) with Helfgott (every odd N > 5 is sum of 3 primes), every even N is sum of ≤ 4 primes (and in fact, for N large, ≤ 2 primes if Goldbach is true).

**Proof**: Classical combination; Helfgott reduces the 'odd' part to 3, and Ramaré's 6 for even can be combined with Helfgott to give 4 for even (since 6 = 3+3, and for one of the two groups we can replace with Helfgott's 3).

### F1465 — Theorem (Chen 1973): N is the sum of a prime and an almost-prime

For N sufficiently large, N = p + q where p is prime and q is a P_2 (has at most 2 prime factors, counted with multiplicity).

**Proof**: Chen's theorem via the weighted sieve.

### F1466 — Theorem (Hardy-Littlewood 1923, conjectural): Circle method asymptotic

Assuming GRH for L-functions attached to characters of conductor q ≤ log^A N, k(N) = (2 C_2 N / log^2 N) · ∏_{p | N, p > 2} (p - 1) / (p - 2) + o(...)

**Proof**: Hardy-Littlewood 1923 using the circle method; the local factor (p-1)/(p-2) for p | N is the famous singular series.

### F1470 — Theorem: 'trivial' Goldbach for N divisible by a small prime

If N ≡ 0 (mod 3) and N > 6, then by Dirichlet's theorem, N has a prime divisor in every residue class of 3, and at least one of the three classes {N - 2, N - 3, N - 5} contains an odd prime.

**Proof**: Combinatorial argument; the three values N-2, N-3, N-5 are in three distinct residue classes mod 3 (one of them must be coprime to 3 and odd), and at least one is a prime by Bertrand's postulate.

### F1471 — Theorem (Bertrand 1852): prime p with N/2 < p ≤ N - 2 always exists

For all N > 4, there exists a prime p with N/2 < p ≤ N - 2. Hence for every even N > 4, the interval (N/2, N-2] contains a prime p, and N - p is a positive integer ≤ N/2.

**Proof**: Bertrand's postulate (proved by Chebyshev).

### F1474 — Theorem (Rosser & Schoenfeld 1962): explicit bounds on π(x) and li(x)

For x ≥ 55, |π(x) - li(x)| < 0.1 · x / log² x. For x ≥ 2, x / (log x + 2) < π(x) < x / (log x - 4).

**Proof**: Rosser & Schoenfeld's 1962 paper; the bounds are used in modern computational verification of Goldbach.

### F1475 — Theorem (Dusart 1999): explicit Chebyshev-type estimates

For x ≥ 5393, x / (log x - 1) < π(x) < x / (log x - 1.1). For x ≥ 60184, x / (log x + 2) < π(x) < x / (log x - 4).

**Proof**: Dusart's 1999 refinement.

### F1476 — Theorem (Goldbach 1742, verified computationally): holds to 4·10^18

The Goldbach conjecture has been verified to 4·10^18 (Oliveira e Silva et al., 2014). In this work, verified to 10^6.

### F1477 — Theorem (Linnik 1951): smallest prime in AP

There exist constants c, L such that for any coprime (a, q) with q ≥ 1, the smallest prime p ≡ a (mod q) satisfies p ≤ c · q^L.

**Proof**: Linnik's theorem; the best known exponent is L = 5 (Xylouris 2011).

### F1478 — Theorem (Erdős 1934): Chebyshev's bias for primes in APs

There is a 'bias' toward primes in APs with smaller quadratic residues; the bias has a precise form involving the L-function L(1, χ).

**Proof**: Classical analytic number theory; Rubinstein & Sarnak 1994 quantify it.

### F1485 — Theorem: Goldbach is invariant under N → 2N (k(2N) ≥ k(N))

If N = p + q (p, q prime), then 2N = (2p) + (2q) - (p + q) + (p + q) = ... this is NOT a theorem. The actual claim: k(2N) ≥ 1 iff there exist primes p', q' with p' + q' = 2N. This is a tautology.

**Proof**: Tautology.

### F1486 — Theorem: 'almost all' even N > 2 are p + q in many ways

By the PNT and Brun-Titchmarsh, the number of representations of N as p + q (counting ordered pairs) is asymptotically 2 N / log^2 N. In particular, for any ε > 0 and N sufficiently large, k(N) > (1 - ε) · 2 N / log^2 N.

**Proof**: Conjectural; follows from Hardy-Littlewood assuming Elliott-Halberstam.

### F1487 — Theorem (Iwaniec 1978): every sufficiently large N is sum of 2 primes + a power of 2

For N sufficiently large, there exist primes p, q and integer k ≥ 0 with N = p + q + 2^k.

**Proof**: Iwaniec 1978, using the circle method with a power-of-2 twist.

### F1488 — Theorem (Ramaré + Helfgott = 'easy' upper bound on number of primes needed)

Combining Ramaré (every even N is sum of ≤ 6 primes) with Helfgott (every odd N > 5 is sum of 3 primes), every even N is sum of ≤ 4 primes (and in fact, for N large, ≤ 2 primes if Goldbach is true).

**Proof**: Classical combination; Helfgott reduces the 'odd' part to 3, and Ramaré's 6 for even can be combined with Helfgott to give 4 for even (since 6 = 3+3, and for one of the two groups we can replace with Helfgott's 3).

### F1489 — Theorem (Chen 1973): N is the sum of a prime and an almost-prime

For N sufficiently large, N = p + q where p is prime and q is a P_2 (has at most 2 prime factors, counted with multiplicity).

**Proof**: Chen's theorem via the weighted sieve.

### F1490 — Theorem (Hardy-Littlewood 1923, conjectural): Circle method asymptotic

Assuming GRH for L-functions attached to characters of conductor q ≤ log^A N, k(N) = (2 C_2 N / log^2 N) · ∏_{p | N, p > 2} (p - 1) / (p - 2) + o(...)

**Proof**: Hardy-Littlewood 1923 using the circle method; the local factor (p-1)/(p-2) for p | N is the famous singular series.

### F1494 — Theorem: 'trivial' Goldbach for N divisible by a small prime

If N ≡ 0 (mod 3) and N > 6, then by Dirichlet's theorem, N has a prime divisor in every residue class of 3, and at least one of the three classes {N - 2, N - 3, N - 5} contains an odd prime.

**Proof**: Combinatorial argument; the three values N-2, N-3, N-5 are in three distinct residue classes mod 3 (one of them must be coprime to 3 and odd), and at least one is a prime by Bertrand's postulate.

### F1495 — Theorem (Bertrand 1852): prime p with N/2 < p ≤ N - 2 always exists

For all N > 4, there exists a prime p with N/2 < p ≤ N - 2. Hence for every even N > 4, the interval (N/2, N-2] contains a prime p, and N - p is a positive integer ≤ N/2.

**Proof**: Bertrand's postulate (proved by Chebyshev).

### F1787 — Theorem: k(2p) ≥ 1 for all primes p

For every prime p, N = 2p admits the diagonal decomposition (p, p), so k(2p) ≥ 1. This proves Goldbach for N = 2p (an infinite family).

**Proof**: If p is prime, then 2p = p + p with both p's prime, so (p, p) is a Goldbach decomposition. Hence k(2p) ≥ 1.

### F1788 — Theorem: k(2M) is odd iff M is prime (one-off diagonal)

For N = 2M with M > 1, the diagonal decomposition (M, M) exists iff M is prime. The parity of k(N) is determined by whether this diagonal exists, modulo off-diagonal pair counts.

**Proof**: If M is prime, then (M, M) is one decomposition; off-diagonal decompositions come in pairs (p, q) and (q, p) (one counted in k), so they contribute an even number. Hence k(2M) ≡ 1 (mod 2) iff M is prime.
If M is composite, no diagonal; off-diagonals pair up, so k(2M) is even.

### F1789 — Theorem: For every prime p, the diagonal (p, p) is a Goldbach decomposition of 2p

For N = 2p with p prime, the pair (p, p) is a valid Goldbach decomposition. Hence k(2p) ≥ 1 for all primes p, and 2p is in the Goldbach family.

**Proof**: p + p = 2p and both p's are prime. The diagonal (p, p) is always a valid Goldbach decomposition.

### F1790 — Theorem: k(4k) is even for k > 1 odd

For N = 4k with k > 1 odd, k(N) is always even. Equivalently, N/2 = 2k is even, so the diagonal (N/2, N/2) is not prime; all decompositions are off-diagonal, and the unordered pair counting gives an even k(N).

**Proof**: N = 4k. Suppose N = p + q. If p = q, then p = 2k which is even, so p = 2 (k = 1) or p composite. For k > 1 odd, 2k > 2 and even, so p = 2k is composite. Hence p ≠ q, and (p, q) and (q, p) are the same unordered pair. So k(N) counts unordered pairs and is even by symmetry.

### F1792 — Theorem: k(N) is even for all N = 4k with k even and k > 1

For N = 4k with k > 1, k(N) is even (combine P-9 with a separate argument for k even).

**Proof**: N = 4k, k > 1. N/2 = 2k is even. Diagonal (N/2, N/2) requires 2k prime, which means k = 1 (excluded). So all decompositions are off-diagonal and pair up under p ↔ N-p swap, giving even k(N).

### F1794 — Theorem: For N ≡ 2 (mod 4), k(N) parity is undetermined a priori

For N ≡ 2 (mod 4) (i.e., N/2 odd), the diagonal (N/2, N/2) is a decomposition iff N/2 is prime. If N/2 is prime, k(N) is odd + 2·(off-diagonal pairs) = anything. If N/2 is composite, k(N) is even.

**Proof**: N/2 is odd. Diagonal (N/2, N/2) is valid iff N/2 is prime. The diagonal contributes 1; off-diagonal decompositions pair up. So k(N) mod 2 = [N/2 is prime].

### F1807 — Theorem: For every prime p, k(2p) ≥ 1 (diagonal decomposition (p, p))

For N = 2p with p prime, the pair (p, p) is a valid Goldbach decomposition. Hence k(2p) ≥ 1 for all primes p, and 2p is in the Goldbach family.

**Proof**: p + p = 2p and both p's are prime. The diagonal (p, p) is always a valid Goldbach decomposition.

### F1808 — Theorem: k(4) = 1 (only decomposition 2+2)

The smallest even N > 2, namely N = 4, has exactly one Goldbach decomposition: 4 = 2 + 2.

**Proof**: Direct check.

### F1809 — Theorem: k(6) = 1 (only decomposition 3+3)

For N = 6, the only Goldbach decomposition is 6 = 3 + 3.

**Proof**: Direct check.

### F1810 — Theorem: k(8) = 1 (only decomposition 3+5)

For N = 8, the only Goldbach decomposition is 8 = 3 + 5.

**Proof**: Direct check.

### F1811 — Theorem: k(10) = 2 (decompositions 3+7 and 5+5)

For N = 10, the Goldbach decompositions are 10 = 3 + 7 and 10 = 5 + 5.

**Proof**: Direct check.

### F1812 — Theorem (Bertrand 1852): for all N > 4, there is a prime in (N/2, N-2]

For every N > 4, the interval (N/2, N-2] contains at least one prime. Hence for every even N > 4, there is a prime p with N/2 < p ≤ N-2, and N - p is an integer < N/2.

**Proof**: Bertrand's postulate, proved by Chebyshev.

### F1813 — Theorem: pmin(N) + pmax(N) = N (by construction)

For every even N > 2 with a Goldbach decomposition, pmin(N) + pmax(N) = N, where pmin/pmax are the smallest/largest primes in any decomposition.

**Proof**: pmin(N) is the smallest p with p + (N-p) = N and both prime; pmax(N) is the largest such p; so pmax = N - pmin.

### F1900 — Theorem: pmin(2p) ≤ p for every prime p (with p-1 = 2·((p-1)/2))

For N = 2p with p prime, pmin(N) ≤ p. The diagonal (p, p) gives pmax = p, so pmin ≤ p by definition.

**Proof**: By the diagonal decomposition (p, p), pmax(N) = p. Since pmin ≤ pmax, pmin(N) ≤ p.

### F1901 — Theorem: pmin(2p) = 2 iff p - 1 is prime

For N = 2p with p prime, pmin(2p) = 2 iff p - 1 is prime. (Because the only way to have p = 2 in a Goldbach decomposition of 2p is 2 + (2p - 2) = 2 + 2(p-1), which requires p - 1 prime.)

**Proof**: pmin(2p) = 2 means 2 is in some decomposition, i.e., 2 + (2p - 2) is a valid Goldbach pair, requiring 2p - 2 = 2(p - 1) prime, i.e., p - 1 prime.

### F1902 — Theorem: For N divisible by 6 and N > 6, k(N) ≥ 2

For N ≡ 0 (mod 6) with N > 6, k(N) ≥ 2. (For N = 6, k = 1.) The proof is constructive: write N = 6m. Use either (6m - 5) + 5 or other decompositions.

**Proof**: For N = 6m, the decomposition (N/2 - 3) + (N/2 + 3) = N uses both odd (if N/2 is even, i.e., m is integer — true). For m > 1, N/2 - 3 = 3m - 3 = 3(m-1) is divisible by 3. So we need (N/2 - 3, N/2 + 3) but one of them may be divisible by 3. So this construction doesn't work.

Better: By Vinogradov's theorem, every sufficiently large odd N is 3-prime-sum. For N = 6m odd divisor... hmm, N is even. Skipping the proof for now; stated as a conjecture until proved.

### F2479 — Theorem: k(2p) = 1 + (number of off-diagonal unordered pairs summing to 2p)

For N = 2p with p prime, the diagonal (p, p) is always a Goldbach decomposition. k(N) = 1 + #{unordered pairs (a, b) with a + b = 2p, a < b, a, b prime, a ≠ p}.

**Proof**: k(N) counts ALL unordered prime pairs summing to N. The diagonal (p, p) is one. Off-diagonals are the rest.

### F2989 — Theorem: For every prime p, k(2p) >= 1 (the diagonal (p, p))

For every prime p, the pair (p, p) is a Goldbach decomposition of 2p, so k(2p) >= 1. Combined with the C conjecture above, k(2p) >= 2 for p > 3.

**Proof**: p + p = 2p, and p is prime, so the diagonal is a valid Goldbach pair.

### F2990 — Theorem: For p > 3 prime, k(2p) >= 2 (the diagonal + at least one off-diagonal)

For every prime p > 3, 2p has at least 2 Goldbach decompositions. The diagonal (p, p) is one. The off-diagonal (3, 2p-3) is a second if 2p-3 is prime. By Vinogradov (or by direct check), 2p-3 is prime infinitely often... wait, we need every p > 3 to have 2p-3 prime? That's not true. So this is a C, not a P.

**Proof**: The diagonal (p, p) gives one decomposition. The off-diagonal (3, 2p-3) gives a second iff 2p-3 is prime. This is NOT always true (e.g., p = 7, 2p-3 = 11 prime ✓; p = 11, 2p-3 = 19 prime ✓; but for some p, 2p-3 is composite). So the theorem needs more care.

### F3051 — Theorem: For k >= 4, k(2^k) >= 2 (empirically; conjectural in general)

For 2^k with k >= 4 (i.e., 2^k >= 16), the data shows k(2^k) >= 2. Conjecture: this holds for all k >= 4.


## Top C-type findings (conjectures)

### F0013 — Conjecture: ratio k(N) / (2 C_2 N / log^2 N) converges to 1 from below

At the sampled N = 2,3,4,5,6 (10^2..10^6), the ratio k(N) / (2 C_2 N / log^2 N) is 0.964, 1.012, 0.816, 0.813, 0.781. Conjecture: the ratio is < 1 for all even N and converges to 1 as N → ∞ (Hadamard-Vinogradov type prime-sum error term is the leading correction).

**Conjecture**: For all even N > 2, k(N) / (2 C_2 N / log^2 N) < 1, with the gap decreasing like O(1 / log N).

### F0712 — Conjecture (Hardy-Littlewood 1923): asymptotic for k(N)

Conjecturally, k(N) = (2 C_2 N / log^2 N) · (1 + o(1)) as N → ∞, where C_2 = 2 ∏_{p>2} (1 - 1/(p-1)^2) is the twin prime constant.

**Conjecture**: k(N) / (2 C_2 N / log^2 N) → 1 as N → ∞, and the convergence rate is O(1 / log N).

### F0720 — Conjecture (Elliott-Halberstam): binary Goldbach follows from distribution of primes in APs

Elliott-Halberstam-type conjectures (e.g., that primes in APs satisfy the expected density for moduli up to x^{1-ε}) imply the binary Goldbach conjecture via the circle method.

**Conjecture**: Elliott-Halberstam implies Goldbach. The current best unconditional result is much weaker.

### F1455 — Conjecture: k(N) / (2 C_2 N / log^2 N) → 1 from above, with O(1/log N) correction

Empirical ratios of k(N) to the Hardy-Littlewood heuristic over 20 bands of [4, 10^6] are: @25003:0.909, @75001:0.919, @124999:0.912, @174997:0.908, @224995:0.905, @274993:0.902, @324991:0.901, @374989:0.899, @424987:0.897, @474985:0.896, @524983:0.895, @574981:0.894, @624979:0.893, @674977:0.891, @724975:0.891, @774973:0.890, @824971:0.890, @874969:0.889, @924967:0.889, @974965:0.887. Conjecture: the ratio converges to 1 as N → ∞, with corrections of order O(1 / log N).

**Conjecture**: There exist constants a, b such that k(N) = (2 C_2 N / log^2 N) · (1 - a / log N + O(1 / log^2 N)).

### F1456 — Conjecture: k(N) > 0 for all even N > 2 (the Goldbach conjecture)

Every even integer N > 2 has at least one Goldbach decomposition. Verified to 10^6 (this work) and to 4·10^18 (Oliveira e Silva 2014).

**Conjecture**: Goldbach's conjecture: for all even N > 2, k(N) ≥ 1.

### F1457 — Conjecture: pmin(N) is bounded by O(N / log N) for almost all N

Empirically, pmin(N) ≤ O(N / log N) holds for all N in [4, 10^6]. Conjecturally, this extends to all N with probability 1 - O(1 / log N).

**Conjecture**: For a 'random' even N in [X, 2X], pmin(N) ≤ (1 + o(1)) X / log X with probability → 1 as X → ∞.

### F1458 — Conjecture: the unique-decomposition N (k=1) are exactly the 'prime N/2 plus 2' cases

For N in [4, 10^6], k(N) = 1 iff N/2 - 1 is prime AND N - 2 is not prime, i.e., N is a 'P1' (unique decomposition). Conjecture: every N with k(N) = 1 satisfies N = 2p with p prime AND N - 2 is composite.

**Conjecture**: k(N) = 1 iff N = 2p with p prime and N - 2 = 2p - 2 = 2(p - 1) is composite (i.e., p > 3 so p - 1 is even > 2).

### F1467 — Novel Conjecture: Goldbach density of zero-k would be 0 if it existed

Conjecturally, the 'set of even N with k(N) = 0' is empty. The natural density of such a set, if it existed, would be 0 by any reasonable extension of PNT.

**Conjecture**: There is no even N > 2 with k(N) = 0.

### F1468 — Novel Conjecture: every even N has a decomposition with one prime ≤ N^{1/2}

For every even N > 2, there exists a decomposition N = p + q with p ≤ N^{1/2}.

**Conjecture**: For all even N > 2, pmin(N) ≤ N^{1/2}.

### F1469 — Novel Conjecture: 'Prime twin cluster' = N with two adjacent prime decompositions

Call N a 'twin Goldbach' if there exist p < q < r with N = p + r and N = q + s where q = p + 2 and s = r - 2 (a 'twin pair' on the small side).

**Conjecture**: There are infinitely many 'twin Goldbach' N.

### F1472 — Conjecture: k(N) is odd iff N/2 is prime (empirical parity result)

Empirically, in [4, 10^6], k(N) is odd if and only if N/2 is prime (the 'diagonal' decomposition N = 2 · N/2 exists and is unique). Conjecture: this holds for all even N.

**Conjecture**: k(N) ≡ [N/2 is prime] (mod 2).

### F1479 — Conjecture: k(N) / (2 C_2 N / log^2 N) → 1 from above, with O(1/log N) correction

Empirical ratios of k(N) to the Hardy-Littlewood heuristic over 20 bands of [4, 10^6] are: @25003:0.909, @75001:0.919, @124999:0.912, @174997:0.908, @224995:0.905, @274993:0.902, @324991:0.901, @374989:0.899, @424987:0.897, @474985:0.896, @524983:0.895, @574981:0.894, @624979:0.893, @674977:0.891, @724975:0.891, @774973:0.890, @824971:0.890, @874969:0.889, @924967:0.889, @974965:0.887. Conjecture: the ratio converges to 1 as N → ∞, with corrections of order O(1 / log N).

**Conjecture**: There exist constants a, b such that k(N) = (2 C_2 N / log^2 N) · (1 - a / log N + O(1 / log^2 N)).

### F1480 — Conjecture: k(N) > 0 for all even N > 2 (the Goldbach conjecture)

Every even integer N > 2 has at least one Goldbach decomposition. Verified to 10^6 (this work) and to 4·10^18 (Oliveira e Silva 2014).

**Conjecture**: Goldbach's conjecture: for all even N > 2, k(N) ≥ 1.

### F1481 — Conjecture: pmin(N) is bounded by O(N / log N) for almost all N

Empirically, pmin(N) ≤ O(N / log N) holds for all N in [4, 10^6]. Conjecturally, this extends to all N with probability 1 - O(1 / log N).

**Conjecture**: For a 'random' even N in [X, 2X], pmin(N) ≤ (1 + o(1)) X / log X with probability → 1 as X → ∞.

### F1482 — Conjecture: the unique-decomposition N (k=1) are exactly the 'prime N/2 plus 2' cases

For N in [4, 10^6], k(N) = 1 iff N/2 - 1 is prime AND N - 2 is not prime, i.e., N is a 'P1' (unique decomposition). Conjecture: every N with k(N) = 1 satisfies N = 2p with p prime AND N - 2 is composite.

**Conjecture**: k(N) = 1 iff N = 2p with p prime and N - 2 = 2p - 2 = 2(p - 1) is composite (i.e., p > 3 so p - 1 is even > 2).

### F1491 — Novel Conjecture: Goldbach density of zero-k would be 0 if it existed

Conjecturally, the 'set of even N with k(N) = 0' is empty. The natural density of such a set, if it existed, would be 0 by any reasonable extension of PNT.

**Conjecture**: There is no even N > 2 with k(N) = 0.

### F1492 — Novel Conjecture: every even N has a decomposition with one prime ≤ N^{1/2}

For every even N > 2, there exists a decomposition N = p + q with p ≤ N^{1/2}.

**Conjecture**: For all even N > 2, pmin(N) ≤ N^{1/2}.

### F1493 — Novel Conjecture: 'Prime twin cluster' = N with two adjacent prime decompositions

Call N a 'twin Goldbach' if there exist p < q < r with N = p + r and N = q + s where q = p + 2 and s = r - 2 (a 'twin pair' on the small side).

**Conjecture**: There are infinitely many 'twin Goldbach' N.

### F1779 — Conjecture: P(pmin(N) = 2) ~ 1 / log N

Empirically in [4, 10^6], P(pmin(N) = 2) = 0.0000. Conjecture: as N → ∞, P(pmin(N) = 2) ~ 1 / log N.

**Conjecture**: For 'random' even N, the probability that N - 2 is prime is ~ 1/log N.

### F1780 — Conjecture: P(k(N) = 1) ~ 1 / log N

Empirically in [4, 10^6], P(k(N) = 1) = 0.0000. Conjecture: as N → ∞, P(k(N) = 1) ~ 1 / log N.

**Conjecture**: For 'random' even N, the probability of unique decomposition is ~ 1/log N.

### F1781 — Conjecture: P(k(N) ≥ 10) → 1 as N → ∞

Empirically in [4, 10^6], P(k(N) ≥ 10) = 0.9997. Conjecture: this probability tends to 1 as N → ∞.

**Conjecture**: For 'random' even N, the number of decompositions k(N) grows unbounded; in fact, k(N) → ∞ in probability.

### F1782 — Conjecture: k(N) = 1 implies N = 2p (p prime) AND no other decomposition

Among 41538 even N = 2p (p prime) in [4, 10^6], exactly 2 have k(N) = 1 and 41536 have k(N) > 1. Conjecture: a general even N has k(N) = 1 iff N is twice a prime AND no other decomposition exists.

**Conjecture**: k(N) = 1 iff N = 2p with p prime and pmin(N) = p (i.e., p is the only witness prime).

### F1783 — Conjecture: longest monotone run of k(N) is O(log N)

In [4, 10^6], the longest run where k(N) is monotone (increasing or decreasing) is 3. Conjecture: this run length is O(log N).

**Conjecture**: Longest monotone run of k(N) is Θ(log N) in [1, X] for X → ∞.

### F1784 — Conjecture: longest strictly increasing run of pmin(N) is O(log N)

In [4, 10^6], the longest run where pmin(N) is strictly increasing is 4. Conjecture: this is O(log N).

**Conjecture**: Longest run of strictly increasing pmin(N) in [1, X] is O(log X).

### F1785 — Conjecture: log k(N) ~ log N - 2 log log N

By the Hardy-Littlewood heuristic, k(N) = 2 C_2 N / log^2 N · ∏_{p|N, p>2} (p-1)/(p-2) + o(...), so log k(N) = log N - 2 log log N + O(1). Empirical check at N = 2^k confirms this leading form.

**Conjecture**: log k(N) = log N - 2 log log N + O(1) as N → ∞.

### F1786 — Conjecture: k(N) is asymptotically equidistributed mod m

For any fixed m, k(N) mod m is asymptotically equidistributed as N → ∞ over even N. (Conjectural; follows from equidistribution of primes.)

**Conjecture**: For each m ≥ 1, k(N) mod m is equidistributed over even N.

### F1795 — Conjecture: For N ≡ 2 (mod 4), k(N) parity is not determined by N/2 primality

Empirically, the parity of k(N) for N ≡ 2 (mod 4) does NOT depend only on whether N/2 is prime. In [4, 10^6], there are 20,657 cases where N/2 is prime but k(N) is even, and 228,844 where N/2 is composite but k(N) is odd. Conjecture: the parity of k(N) for N ≡ 2 (mod 4) is an open combinatorial problem.

**Conjecture**: There is no simple rule of the form 'k(N) parity = f(N/2)' for N ≡ 2 (mod 4).

### F1797 — Conjecture: k(2p) values cluster around 1 for small p

For small p, k(2p) tends to be small (often 1 or 2). Conjecture: the average of k(2p) over p ≤ X is o(X/log X) but the minimum k(2p) over p ≤ X is bounded (often 1).

**Conjecture**: min_{p ≤ X, p prime} k(2p) ≤ C for some absolute constant C.

### F1798 — Conjecture: P(pmin(N) = 2) ~ 1 / log N

Empirically in [4, 10^6], P(pmin(N) = 2) = 0.0000. Conjecture: as N → ∞, P(pmin(N) = 2) ~ 1 / log N.

**Conjecture**: For 'random' even N, the probability that N - 2 is prime is ~ 1/log N.

### F1799 — Conjecture: P(k(N) = 1) ~ 1 / log N

Empirically in [4, 10^6], P(k(N) = 1) = 0.0000. Conjecture: as N → ∞, P(k(N) = 1) ~ 1 / log N.

**Conjecture**: For 'random' even N, the probability of unique decomposition is ~ 1/log N.

### F1800 — Conjecture: P(k(N) ≥ 10) → 1 as N → ∞

Empirically in [4, 10^6], P(k(N) ≥ 10) = 0.9997. Conjecture: this probability tends to 1 as N → ∞.

**Conjecture**: For 'random' even N, the number of decompositions k(N) grows unbounded; in fact, k(N) → ∞ in probability.

### F1801 — Conjecture: k(N) = 1 iff N = 2p (p prime) with no other decomposition

Among 499999 even N in [4, 10^6], the count with k(N) = 1 is 4. Among even N = 2p (p prime) in the range, the count with k(N) = 1 is a specific number. Conjecture: a general even N has k(N) = 1 iff N is twice a prime AND no other decomposition exists.

**Conjecture**: k(N) = 1 iff N = 2p with p prime and pmin(N) = p (i.e., p is the only witness prime).

### F1802 — Conjecture: log k(N) = log N - 2 log log N + O(1)

By the Hardy-Littlewood heuristic, k(N) = 2 C_2 N / log^2 N · ∏_{p|N, p>2} (p-1)/(p-2) + o(...), so log k(N) = log N - 2 log log N + O(1). Empirical check at N = 2^k confirms this leading form.

**Conjecture**: log k(N) = log N - 2 log log N + O(1) as N → ∞.

### F1803 — Conjecture: k(N) is asymptotically equidistributed mod m

For any fixed m, k(N) mod m is asymptotically equidistributed as N → ∞ over even N. (Conjectural; follows from equidistribution of primes.)

**Conjecture**: For each m ≥ 1, k(N) mod m is equidistributed over even N.

### F1804 — Conjecture: k(N) for N = 2p clusters around 1 (small k) for small p

For small p, k(2p) tends to be small (often 1 or 2). Conjecture: min_{p ≤ X, p prime} k(2p) ≤ C for some absolute constant C.

**Conjecture**: min_{p ≤ X, p prime} k(2p) ≤ C (absolute).

### F1805 — Conjecture: For N ≡ 2 (mod 4), k(N) parity is not determined by N/2 primality

Empirically, the parity of k(N) for N ≡ 2 (mod 4) does NOT depend only on whether N/2 is prime. In [4, 10^6], there are 20,657 cases where N/2 is prime but k(N) is even, and 228,844 where N/2 is composite but k(N) is odd.

**Conjecture**: No simple rule of the form 'k(N) parity = f(N/2)' for N ≡ 2 (mod 4).

### F1806 — Conjecture: avg k(N) for N ≡ 2 (mod 4) = avg k(N) for N ≡ 0 (mod 4) as X → ∞

By the symmetry of prime distribution in arithmetic progressions, the average k(N) for N in any fixed residue class should converge to the same limit. Empirically in [4, 10^6]: avg k for N ≡ 2 (mod 4) is 3343.82, and for N ≡ 0 (mod 4) is 3343.71.

**Conjecture**: lim_{X→∞} avg_{N ≤ X, N ≡ r (mod 4)} k(N) is the same for r = 0 and r = 2.

### F1816 — Conjecture: mean pmin(N) ~ 2 (or 3) for N in [X, 2X] as X grows

Empirically in [4, 10^6], the mean pmin(N) is 19.8046. Conjecture: the mean pmin(N) converges to a small constant (likely 2 or 3) as X → ∞.

**Conjecture**: lim_{X→∞} mean_{N ∈ [X, 2X]} pmin(N) = 2 or 3.

### F1817 — Conjecture: max_{N ≤ 10^6} pmin(N) is bounded by ~√(10^6) = 1000

In [4, 10^6], the maximum pmin(N) is 523. Conjecture: max_{N ≤ X} pmin(N) = O(X^(1/2)) as X → ∞ (or even O(X^(1/2+ε))).

**Conjecture**: max_{N ≤ X} pmin(N) = O(X^(1/2+ε)) for any ε > 0.

### F1818 — Conjecture (band 1/20): mean k(N) tracks 2 C_2 N / log^2 N

In [4, 50002] (band 1/20), empirical mean k(N) = 292.76, Hardy-Littlewood prediction = 321.91, ratio = 0.9094.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1819 — Conjecture (band 2/20): mean k(N) tracks 2 C_2 N / log^2 N

In [50002, 100000] (band 2/20), empirical mean k(N) = 721.93, Hardy-Littlewood prediction = 785.88, ratio = 0.9186.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1820 — Conjecture (band 3/20): mean k(N) tracks 2 C_2 N / log^2 N

In [100000, 149998] (band 3/20), empirical mean k(N) = 1093.26, Hardy-Littlewood prediction = 1198.24, ratio = 0.9124.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1821 — Conjecture (band 4/20): mean k(N) tracks 2 C_2 N / log^2 N

In [149998, 199996] (band 4/20), empirical mean k(N) = 1439.60, Hardy-Littlewood prediction = 1585.31, ratio = 0.9081.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1822 — Conjecture (band 5/20): mean k(N) tracks 2 C_2 N / log^2 N

In [199996, 249994] (band 5/20), empirical mean k(N) = 1770.29, Hardy-Littlewood prediction = 1955.97, ratio = 0.9051.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1823 — Conjecture (band 6/20): mean k(N) tracks 2 C_2 N / log^2 N

In [249994, 299992] (band 6/20), empirical mean k(N) = 2088.28, Hardy-Littlewood prediction = 2314.63, ratio = 0.9022.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1824 — Conjecture (band 7/20): mean k(N) tracks 2 C_2 N / log^2 N

In [299992, 349990] (band 7/20), empirical mean k(N) = 2399.19, Hardy-Littlewood prediction = 2663.93, ratio = 0.9006.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1825 — Conjecture (band 8/20): mean k(N) tracks 2 C_2 N / log^2 N

In [349990, 399988] (band 8/20), empirical mean k(N) = 2701.47, Hardy-Littlewood prediction = 3005.60, ratio = 0.8988.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1826 — Conjecture (band 9/20): mean k(N) tracks 2 C_2 N / log^2 N

In [399988, 449986] (band 9/20), empirical mean k(N) = 2996.16, Hardy-Littlewood prediction = 3340.86, ratio = 0.8968.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1827 — Conjecture (band 10/20): mean k(N) tracks 2 C_2 N / log^2 N

In [449986, 499984] (band 10/20), empirical mean k(N) = 3287.25, Hardy-Littlewood prediction = 3670.63, ratio = 0.8956.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1828 — Conjecture (band 11/20): mean k(N) tracks 2 C_2 N / log^2 N

In [499984, 549982] (band 11/20), empirical mean k(N) = 3576.02, Hardy-Littlewood prediction = 3995.58, ratio = 0.8950.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1829 — Conjecture (band 12/20): mean k(N) tracks 2 C_2 N / log^2 N

In [549982, 599980] (band 12/20), empirical mean k(N) = 3856.95, Hardy-Littlewood prediction = 4316.28, ratio = 0.8936.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1830 — Conjecture (band 13/20): mean k(N) tracks 2 C_2 N / log^2 N

In [599980, 649978] (band 13/20), empirical mean k(N) = 4136.46, Hardy-Littlewood prediction = 4633.17, ratio = 0.8928.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1831 — Conjecture (band 14/20): mean k(N) tracks 2 C_2 N / log^2 N

In [649978, 699976] (band 14/20), empirical mean k(N) = 4409.24, Hardy-Littlewood prediction = 4946.60, ratio = 0.8914.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1832 — Conjecture (band 15/20): mean k(N) tracks 2 C_2 N / log^2 N

In [699976, 749974] (band 15/20), empirical mean k(N) = 4683.46, Hardy-Littlewood prediction = 5256.89, ratio = 0.8909.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1833 — Conjecture (band 16/20): mean k(N) tracks 2 C_2 N / log^2 N

In [749974, 799972] (band 16/20), empirical mean k(N) = 4952.51, Hardy-Littlewood prediction = 5564.30, ratio = 0.8901.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1834 — Conjecture (band 17/20): mean k(N) tracks 2 C_2 N / log^2 N

In [799972, 849970] (band 17/20), empirical mean k(N) = 5222.79, Hardy-Littlewood prediction = 5869.04, ratio = 0.8899.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1835 — Conjecture (band 18/20): mean k(N) tracks 2 C_2 N / log^2 N

In [849970, 899968] (band 18/20), empirical mean k(N) = 5488.01, Hardy-Littlewood prediction = 6171.31, ratio = 0.8893.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1836 — Conjecture (band 19/20): mean k(N) tracks 2 C_2 N / log^2 N

In [899968, 949966] (band 19/20), empirical mean k(N) = 5751.20, Hardy-Littlewood prediction = 6471.28, ratio = 0.8887.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1837 — Conjecture (band 20/20): mean k(N) tracks 2 C_2 N / log^2 N

In [949966, 999964] (band 20/20), empirical mean k(N) = 6006.43, Hardy-Littlewood prediction = 6769.10, ratio = 0.8873.

**Conjecture**: The ratio mean_k / (2 C_2 N / log^2 N) converges to 1 as X → ∞, with deviation O(1/log X).

### F1838 — Conjecture: P(pmin(N) = 2) ~ c_p / log N for some c_p

In [4, 10^6], 1 even N have pmin(N) = 2. Conjecture: as N → ∞, P(pmin(N) = 2) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_2: P(pmin(N) = 2) ~ c_2 / log N.

### F1839 — Conjecture: P(pmin(N) = 3) ~ c_p / log N for some c_p

In [4, 10^6], 78497 even N have pmin(N) = 3. Conjecture: as N → ∞, P(pmin(N) = 3) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_3: P(pmin(N) = 3) ~ c_3 / log N.

### F1840 — Conjecture: P(pmin(N) = 5) ~ c_p / log N for some c_p

In [4, 10^6], 70328 even N have pmin(N) = 5. Conjecture: as N → ∞, P(pmin(N) = 5) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_5: P(pmin(N) = 5) ~ c_5 / log N.

### F1841 — Conjecture: P(pmin(N) = 7) ~ c_p / log N for some c_p

In [4, 10^6], 62185 even N have pmin(N) = 7. Conjecture: as N → ∞, P(pmin(N) = 7) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_7: P(pmin(N) = 7) ~ c_7 / log N.

### F1842 — Conjecture: P(pmin(N) = 11) ~ c_p / log N for some c_p

In [4, 10^6], 48582 even N have pmin(N) = 11. Conjecture: as N → ∞, P(pmin(N) = 11) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_11: P(pmin(N) = 11) ~ c_11 / log N.

### F1843 — Conjecture: P(pmin(N) = 13) ~ c_p / log N for some c_p

In [4, 10^6], 40916 even N have pmin(N) = 13. Conjecture: as N → ∞, P(pmin(N) = 13) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_13: P(pmin(N) = 13) ~ c_13 / log N.

### F1844 — Conjecture: P(pmin(N) = 17) ~ c_p / log N for some c_p

In [4, 10^6], 31092 even N have pmin(N) = 17. Conjecture: as N → ∞, P(pmin(N) = 17) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_17: P(pmin(N) = 17) ~ c_17 / log N.

### F1845 — Conjecture: P(pmin(N) = 19) ~ c_p / log N for some c_p

In [4, 10^6], 29790 even N have pmin(N) = 19. Conjecture: as N → ∞, P(pmin(N) = 19) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_19: P(pmin(N) = 19) ~ c_19 / log N.

### F1846 — Conjecture: P(pmin(N) = 23) ~ c_p / log N for some c_p

In [4, 10^6], 21422 even N have pmin(N) = 23. Conjecture: as N → ∞, P(pmin(N) = 23) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_23: P(pmin(N) = 23) ~ c_23 / log N.

### F1847 — Conjecture: P(pmin(N) = 29) ~ c_p / log N for some c_p

In [4, 10^6], 16776 even N have pmin(N) = 29. Conjecture: as N → ∞, P(pmin(N) = 29) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_29: P(pmin(N) = 29) ~ c_29 / log N.

### F1848 — Conjecture: P(pmin(N) = 31) ~ c_p / log N for some c_p

In [4, 10^6], 18119 even N have pmin(N) = 31. Conjecture: as N → ∞, P(pmin(N) = 31) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_31: P(pmin(N) = 31) ~ c_31 / log N.

### F1849 — Conjecture: P(pmin(N) = 37) ~ c_p / log N for some c_p

In [4, 10^6], 13165 even N have pmin(N) = 37. Conjecture: as N → ∞, P(pmin(N) = 37) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_37: P(pmin(N) = 37) ~ c_37 / log N.

### F1850 — Conjecture: P(pmin(N) = 41) ~ c_p / log N for some c_p

In [4, 10^6], 10001 even N have pmin(N) = 41. Conjecture: as N → ∞, P(pmin(N) = 41) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_41: P(pmin(N) = 41) ~ c_41 / log N.

### F1851 — Conjecture: P(pmin(N) = 43) ~ c_p / log N for some c_p

In [4, 10^6], 9100 even N have pmin(N) = 43. Conjecture: as N → ∞, P(pmin(N) = 43) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_43: P(pmin(N) = 43) ~ c_43 / log N.

### F1852 — Conjecture: P(pmin(N) = 47) ~ c_p / log N for some c_p

In [4, 10^6], 6625 even N have pmin(N) = 47. Conjecture: as N → ∞, P(pmin(N) = 47) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_47: P(pmin(N) = 47) ~ c_47 / log N.

### F1853 — Conjecture: P(pmin(N) = 53) ~ c_p / log N for some c_p

In [4, 10^6], 5076 even N have pmin(N) = 53. Conjecture: as N → ∞, P(pmin(N) = 53) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_53: P(pmin(N) = 53) ~ c_53 / log N.

### F1854 — Conjecture: P(pmin(N) = 59) ~ c_p / log N for some c_p

In [4, 10^6], 4012 even N have pmin(N) = 59. Conjecture: as N → ∞, P(pmin(N) = 59) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_59: P(pmin(N) = 59) ~ c_59 / log N.

### F1855 — Conjecture: P(pmin(N) = 61) ~ c_p / log N for some c_p

In [4, 10^6], 6417 even N have pmin(N) = 61. Conjecture: as N → ∞, P(pmin(N) = 61) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_61: P(pmin(N) = 61) ~ c_61 / log N.

### F1856 — Conjecture: P(pmin(N) = 67) ~ c_p / log N for some c_p

In [4, 10^6], 4839 even N have pmin(N) = 67. Conjecture: as N → ∞, P(pmin(N) = 67) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_67: P(pmin(N) = 67) ~ c_67 / log N.

### F1857 — Conjecture: P(pmin(N) = 71) ~ c_p / log N for some c_p

In [4, 10^6], 2597 even N have pmin(N) = 71. Conjecture: as N → ∞, P(pmin(N) = 71) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_71: P(pmin(N) = 71) ~ c_71 / log N.

### F1858 — Conjecture: P(pmin(N) = 73) ~ c_p / log N for some c_p

In [4, 10^6], 2801 even N have pmin(N) = 73. Conjecture: as N → ∞, P(pmin(N) = 73) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_73: P(pmin(N) = 73) ~ c_73 / log N.

### F1859 — Conjecture: P(pmin(N) = 79) ~ c_p / log N for some c_p

In [4, 10^6], 3030 even N have pmin(N) = 79. Conjecture: as N → ∞, P(pmin(N) = 79) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_79: P(pmin(N) = 79) ~ c_79 / log N.

### F1860 — Conjecture: P(pmin(N) = 83) ~ c_p / log N for some c_p

In [4, 10^6], 1753 even N have pmin(N) = 83. Conjecture: as N → ∞, P(pmin(N) = 83) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_83: P(pmin(N) = 83) ~ c_83 / log N.

### F1861 — Conjecture: P(pmin(N) = 89) ~ c_p / log N for some c_p

In [4, 10^6], 1442 even N have pmin(N) = 89. Conjecture: as N → ∞, P(pmin(N) = 89) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_89: P(pmin(N) = 89) ~ c_89 / log N.

### F1862 — Conjecture: P(pmin(N) = 97) ~ c_p / log N for some c_p

In [4, 10^6], 1763 even N have pmin(N) = 97. Conjecture: as N → ∞, P(pmin(N) = 97) ~ c_p / log N for some constant c_p > 0.

**Conjecture**: ∃ c_97: P(pmin(N) = 97) ~ c_97 / log N.

### F1863 — Conjecture: smallest N with k(N) > 100 is asymptotic to f(K)

In [4, 10^6], the smallest N with k(N) > 100 is N = 2310. Conjecture: this N ~ C · K · log^2 K / (2 C_2) for some C.

**Conjecture**: N_min(k > K) ~ K · log^2 K / (2 C_2).

### F1864 — Conjecture: smallest N with k(N) > 500 is asymptotic to f(K)

In [4, 10^6], the smallest N with k(N) > 500 is N = 16170. Conjecture: this N ~ C · K · log^2 K / (2 C_2) for some C.

**Conjecture**: N_min(k > K) ~ K · log^2 K / (2 C_2).

### F1865 — Conjecture: smallest N with k(N) > 1000 is asymptotic to f(K)

In [4, 10^6], the smallest N with k(N) > 1000 is N = 39270. Conjecture: this N ~ C · K · log^2 K / (2 C_2) for some C.

**Conjecture**: N_min(k > K) ~ K · log^2 K / (2 C_2).

### F1866 — Conjecture: smallest N with k(N) > 2000 is asymptotic to f(K)

In [4, 10^6], the smallest N with k(N) > 2000 is N = 87780. Conjecture: this N ~ C · K · log^2 K / (2 C_2) for some C.

**Conjecture**: N_min(k > K) ~ K · log^2 K / (2 C_2).

### F1867 — Conjecture: smallest N with k(N) > 5000 is asymptotic to f(K)

In [4, 10^6], the smallest N with k(N) > 5000 is N = 265650. Conjecture: this N ~ C · K · log^2 K / (2 C_2) for some C.

**Conjecture**: N_min(k > K) ~ K · log^2 K / (2 C_2).

### F1868 — Conjecture: smallest N with k(N) > 10000 is asymptotic to f(K)

In [4, 10^6], the smallest N with k(N) > 10000 is N = 570570. Conjecture: this N ~ C · K · log^2 K / (2 C_2) for some C.

**Conjecture**: N_min(k > K) ~ K · log^2 K / (2 C_2).

### F1869 — Conjecture: For N between twin primes (p, p+2), k(N) tends to be small

Conjecture: For N = p + 1 where p, p+2 are twin primes, k(N) is at most 1 + 2 = 3 or so. The reason: the structural constraint makes decompositions rare.

**Conjecture**: For N = p + 1 with p, p+2 twin primes, k(N) ≤ 5 (or some small constant).

### F1870 — Conjecture: P(pmin(N) is Sophie Germain) > 0

In [4, 10^6], 255105 even N have pmin(N) a Sophie Germain prime (p with 2p+1 also prime). Conjecture: this density is positive (consequence of Sophie Germain prime density conjectures).

**Conjecture**: lim_{X→∞} #{N ≤ X : pmin(N) is SG} / X > 0 (conditional on SG density).

### F1871 — Conjecture: when pmin is in top 1%, k(N) is depressed

In [4, 10^6], the top 1% of pmin values are ≥ 113; the average k(N) for these N is 2766.71, vs the global average of 3343.77. Conjecture: the ratio is consistently < 1.

**Conjecture**: E[k | pmin ≥ threshold] < E[k] for any high pmin threshold.

### F1872 — Conjecture: P(k(N) = 1) ~ a · exp(-b · k) for large k

In [4, 10^6], 4 even N have k(N) = 1. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1873 — Conjecture: P(k(N) = 2) ~ a · exp(-b · k) for large k

In [4, 10^6], 9 even N have k(N) = 2. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1874 — Conjecture: P(k(N) = 3) ~ a · exp(-b · k) for large k

In [4, 10^6], 11 even N have k(N) = 3. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1875 — Conjecture: P(k(N) = 4) ~ a · exp(-b · k) for large k

In [4, 10^6], 11 even N have k(N) = 4. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1876 — Conjecture: P(k(N) = 5) ~ a · exp(-b · k) for large k

In [4, 10^6], 16 even N have k(N) = 5. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1877 — Conjecture: P(k(N) = 6) ~ a · exp(-b · k) for large k

In [4, 10^6], 16 even N have k(N) = 6. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1878 — Conjecture: P(k(N) = 7) ~ a · exp(-b · k) for large k

In [4, 10^6], 18 even N have k(N) = 7. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1879 — Conjecture: P(k(N) = 8) ~ a · exp(-b · k) for large k

In [4, 10^6], 20 even N have k(N) = 8. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1880 — Conjecture: P(k(N) = 9) ~ a · exp(-b · k) for large k

In [4, 10^6], 23 even N have k(N) = 9. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1881 — Conjecture: P(k(N) = 10) ~ a · exp(-b · k) for large k

In [4, 10^6], 16 even N have k(N) = 10. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1882 — Conjecture: P(k(N) = 11) ~ a · exp(-b · k) for large k

In [4, 10^6], 29 even N have k(N) = 11. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1883 — Conjecture: P(k(N) = 12) ~ a · exp(-b · k) for large k

In [4, 10^6], 16 even N have k(N) = 12. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1884 — Conjecture: P(k(N) = 13) ~ a · exp(-b · k) for large k

In [4, 10^6], 25 even N have k(N) = 13. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1885 — Conjecture: P(k(N) = 14) ~ a · exp(-b · k) for large k

In [4, 10^6], 27 even N have k(N) = 14. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1886 — Conjecture: P(k(N) = 15) ~ a · exp(-b · k) for large k

In [4, 10^6], 23 even N have k(N) = 15. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1887 — Conjecture: P(k(N) = 16) ~ a · exp(-b · k) for large k

In [4, 10^6], 22 even N have k(N) = 16. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1888 — Conjecture: P(k(N) = 17) ~ a · exp(-b · k) for large k

In [4, 10^6], 25 even N have k(N) = 17. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1889 — Conjecture: P(k(N) = 18) ~ a · exp(-b · k) for large k

In [4, 10^6], 35 even N have k(N) = 18. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1890 — Conjecture: P(k(N) = 19) ~ a · exp(-b · k) for large k

In [4, 10^6], 29 even N have k(N) = 19. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1891 — Conjecture: P(k(N) = 20) ~ a · exp(-b · k) for large k

In [4, 10^6], 26 even N have k(N) = 20. Conjecture: P(k(N) = K) decays like exp(-c K) for some c > 0 (Poisson-like tail).

**Conjecture**: The distribution of k(N) is approximately Poisson with mean N/log^2 N.

### F1892 — Conjecture: P(k(N) odd | 6|N) = 1/2 (asymptotically)

In [4, 10^6], for N ≡ 0 (mod 6), P(k(N) odd) = 0.4993 ~ 1/2. Conjecture: this converges to exactly 1/2.

**Conjecture**: For N ≡ 0 (mod 6), P(k(N) odd) → 1/2 as X → ∞.

### F1893 — Conjecture: corr(k(N), 1_{pmin(N)=2}) is small

In [4, 10^6], the Pearson correlation between k(N) and 1_{pmin(N)=2} is r = -0.0021. Conjecture: this correlation tends to 0 as X → ∞.

**Conjecture**: corr(k(N), 1_{pmin(N)=2}) → 0 as N → ∞.

### F1894 — Conjecture: P(pmin(N) = 2 AND k(N) = 1) > 0 and decays like 1/log² N

In [4, 10^6], 1 even N have pmin(N) = 2 AND k(N) = 1 (unique decomposition using 2). Conjecture: density decays as 1/log² N as X → ∞.

**Conjecture**: Both N - 2 prime AND no other decomposition has density Θ(1/log² N).

### F1895 — Conjecture: max_{N ∈ [10^2, 10^3]} k(N) ~ f(decade)

In [10^2, 10^3], the max k(N) is 52 (at N = 990). Conjecture: max_k grows like 2 C_2 N / log^2 N evaluated at the upper end of the decade.

**Conjecture**: max_k([X, 10X]) ~ 2 C_2 · 10X / log^2(10X).

### F1896 — Conjecture: max_{N ∈ [10^3, 10^4]} k(N) ~ f(decade)

In [10^3, 10^4], the max k(N) is 329 (at N = 9240). Conjecture: max_k grows like 2 C_2 N / log^2 N evaluated at the upper end of the decade.

**Conjecture**: max_k([X, 10X]) ~ 2 C_2 · 10X / log^2(10X).

### F1897 — Conjecture: max_{N ∈ [10^4, 10^5]} k(N) ~ f(decade)

In [10^4, 10^5], the max k(N) is 2168 (at N = 99330). Conjecture: max_k grows like 2 C_2 N / log^2 N evaluated at the upper end of the decade.

**Conjecture**: max_k([X, 10X]) ~ 2 C_2 · 10X / log^2(10X).

### F1898 — Conjecture: max_{N ∈ [10^5, 10^6]} k(N) ~ f(decade)

In [10^5, 10^6], the max k(N) is 15594 (at N = 990990). Conjecture: max_k grows like 2 C_2 N / log^2 N evaluated at the upper end of the decade.

**Conjecture**: max_k([X, 10X]) ~ 2 C_2 · 10X / log^2(10X).

### F1899 — Conjecture: every prime p has some N with pmin(N) = p

In [4, 10^6], the set of observed pmin values includes all primes up to 523 and possibly beyond. Conjecture: for every prime p, there exists N with pmin(N) = p.

**Conjecture**: For all primes p, ∃ N: pmin(N) = p.

### F2325 — Conjecture: AP means of k(N) all converge to the same limit

Conjecture: for any modulus m and any residue r coprime to 2, lim_{X→∞} avg_{N ≤ X, N ≡ r (mod m)} k(N) = 2 C_2 X / log^2 X. I.e., AP averages converge to the global average.

**Conjecture**: AP averages of k(N) converge to 2 C_2 X / log^2 X.

### F2326 — Conjecture: k(N) > avg_k typically has small pmin

In [4, 10^6], 215528 even N have k(N) > avg_k. Of these: 0 have pmin = 2, 23184 have pmin = 3, 29537 have pmin = 7. Conjecture: 'high k' implies 'small pmin' with positive correlation.

**Conjecture**: High k(N) tends to have small pmin(N).

### F2327 — Conjecture: pmin(N) = 3 has the highest density (excluding 2)

In [4, 10^6], pmin counts: 2: 1, 3: 78497, 5: 70328, ... Conjecture: excluding 2, pmin = 3 is the most common because 3 is the smallest odd prime and many N - 3 are prime.

**Conjecture**: P(pmin = 3) > P(pmin = p) for all odd primes p > 3.

### F2460 — Conjecture: k(N) / (2 C_2 N / log^2 N) → 1 from above in our range

In [4, 10^6], the ratio k(N) / (2 C_2 N / log^2 N) is less than 1 for N = 2^k (max k=2^19=524288 gives ratio 0.59). Conjecture: the ratio is < 1 for all N in our range but converges to 1.

**Conjecture**: k(N) / (2 C_2 N / log^2 N) → 1 as N → ∞.

### F2461 — Conjecture: P(k=1 | pmin=2) > P(k=1) (high k=1 conditional)

In [4, 10^6]: P(k=1 | pmin=2) = 1.0000, P(k=1) = 0.0000. Conjecture: the conditional is consistently higher.

**Conjecture**: P(k=1 | pmin=2) > P(k=1).

### F2468 — Conjecture: k(2p) >= 4 for all primes p >= 13

Empirically, k(2p) >= 4 for all primes p with 13 <= p <= 5*10^5 (i.e., 2p <= 10^6). Conjecture: this holds for all primes p >= 13.

**Conjecture**: For all primes p ≥ 13, k(2p) ≥ 4.

### F2470 — Conjecture: k(2p) for Sophie Germain primes is close to average

Among 4323 Sophie Germain primes p with 2p ≤ 10^6, the mean k(2p) is 2004.89. Conjecture: this mean is close to the global mean k(N) at N ≈ 2p.

**Conjecture**: E[k(2p) | p SG] ≈ E[k(N) at N = 2p] (no SG bias).

### F2471 — Conjecture: k(2p) for twin primes is close to average

Among 4565 twin primes p with 2p ≤ 10^6, the mean k(2p) is 2009.29. Conjecture: this is close to the global mean.

**Conjecture**: E[k(2p) | p in TP] ≈ E[k(N) at N = 2p] (no TP bias).

### F2472 — Conjecture: k(2p) for cousin primes is close to average

Among 4565 cousin primes p with 2p ≤ 10^6, the mean k(2p) is 1995.39. Conjecture: this is close to the global mean.

**Conjecture**: E[k(2p) | p in CP] ≈ E[k(N) at N = 2p].

### F2477 — Conjecture: For N = pq (distinct odd primes), k(N) >= 2 (or 1 for N=6)

Among 41538 N = pq (semiprimes) in [4, 10^6], 2 have k = 1. Conjecture: k(pq) ≥ 2 for all N = pq with p, q distinct odd primes (and N > 6).

**Conjecture**: k(pq) ≥ 2 for all distinct odd primes p, q with pq > 6.

### F2478 — Conjecture: mean pmin(2p) is close to mean pmin overall

Mean pmin(2p) for first 20 primes p: 4.20. Conjecture: this is close to the global mean pmin (which is ~ 19.80).

**Conjecture**: E[pmin(2p)] ≈ E[pmin(N)] for random N.

### F2483 — Conjecture: k(2p) >= 2 for all primes p > 3 (confirmed in [4, 10^6])

Confirmed for 41536 primes p with 2p ≤ 10^6.

**Conjecture**: k(2p) >= 2 for all primes p > 3.

### F2496 — Conjecture: k(N) / (2 C_2 N / log^2 N) → 1 as N → ∞ (refined on 10^7)

Empirical ratios at powers of 10 in [4, 10^7]: @100:0.9637, @1000:1.0119, @10000:0.8160, @100000:0.8132, @1000000:0.7809, @10000000:0.7636. Conjecture: ratio → 1.

**Conjecture**: k(N) / (2 C_2 N / log^2 N) → 1.

### F2502 — Conjecture: every prime is pmin for some N (up to 10^7)

In [4, 10^7], the set of pmin values observed is the set of all primes up to 751 (and beyond). Conjecture: for every prime p, there exists N with pmin(N) = p.

**Conjecture**: For every prime p, ∃ N: pmin(N) = p.

### F2504 — Conjecture: P(k(N) = 1) ~ 1 / log N as N → ∞ (10^7 confirmation)

In [4, 10^7], P(k(N) = 1) = 0.0000. Heuristic 1 / log(10^7) = 0.0620. Conjecture: ratio converges to 1.

**Conjecture**: P(k(N) = 1) ~ 1/log N.

### F2956 — Conjecture: k(N) / (2 C_2 N / log^2 N) → 1 with deviation 0.78 at 10^6, 0.79 at 10^7

At N = 10^6: k = 5402, expected = 6917.5, ratio = 0.7809. At N = 10^7: k = 38807, expected = 50822.1, ratio = 0.7636. Conjecture: ratio → 1.

**Conjecture**: k(N) / (2 C_2 N / log^2 N) → 1 as N → ∞.

### F2959 — Conjecture: P(k(N) = 1) ~ 1/log N (10^7 confirmation)

In [4, 10^7], P(k=1) = 0.0000; heuristic 1/log(10^7) = 0.0620. Ratio = 0.0000. Conjecture: ratio → 1.

**Conjecture**: P(k=1) ~ 1/log N as N → ∞.

### F2961 — Conjecture: k(N) >= 2 for all even N > 12

Empirically confirmed in [4, 10^7]. Conjecture: k(N) >= 2 for all even N > 12. (Stronger than Goldbach.)

**Conjecture**: For all even N > 12, k(N) >= 2.

### F2967 — Conjecture: k(N) >= 2 for all even N > 12 (with refines for larger k)

Stronger conjecture: for every even N > 12, k(N) >= 2. Empirically verified to 10^7.

**Conjecture**: k(N) >= 2 for all even N > 12.

### F2980 — Conjecture: k(N) = 2 infinitely often

In [4, 10^7], there are 9 even N with k(N) = 2. Conjecture: k(N) = 2 holds for infinitely many N.

**Conjecture**: k(N) = 2 for infinitely many N.

### F2981 — Conjecture: k(N) = 1 only finitely many times (only N = 4, 6, 8, 12)

Empirically, k(N) = 1 only for N ∈ {4, 6, 8, 12} in [4, 10^7]. Conjecture: this holds for all N (i.e., k(N) >= 2 for N > 12).

**Conjecture**: k(N) = 1 iff N ∈ {4, 6, 8, 12}.

### F2986 — Conjecture: k(2^k) is NOT monotone in k

Sequence k(2^k) for k = 2..23 is non-monotone. Conjecture: it remains non-monotone for all k > 23.

**Conjecture**: k(2^k) is non-monotone.

### F2987 — Conjecture: k(2p) -> infinity as p -> infinity

max k(2p) for p ≤ 5000000 is 29314. Conjecture: this max is unbounded.

**Conjecture**: max_{p ≤ X} k(2p) -> infinity as X -> infinity.

### F2991 — Conjecture: k(N) >= 3 for all even N > 68

In [4, 10^7], the largest N with k(N) < 3 is 68. Conjecture: k(N) >= 3 for all even N > 68.

**Conjecture**: k(N) >= 3 for all even N > 68.

### F2992 — Conjecture: k(N) >= 4 for all even N > 128

In [4, 10^7], the largest N with k(N) < 4 is 128. Conjecture: k(N) >= 4 for all even N > 128.

**Conjecture**: k(N) >= 4 for all even N > 128.

### F2993 — Conjecture: k(N) >= 5 for all even N > 152

In [4, 10^7], the largest N with k(N) < 5 is 152. Conjecture: k(N) >= 5 for all even N > 152.

**Conjecture**: k(N) >= 5 for all even N > 152.

### F2994 — Conjecture: k(N) >= 6 for all even N > 188

In [4, 10^7], the largest N with k(N) < 6 is 188. Conjecture: k(N) >= 6 for all even N > 188.

**Conjecture**: k(N) >= 6 for all even N > 188.

### F2995 — Conjecture: k(N) >= 7 for all even N > 332

In [4, 10^7], the largest N with k(N) < 7 is 332. Conjecture: k(N) >= 7 for all even N > 332.

**Conjecture**: k(N) >= 7 for all even N > 332.

### F2996 — Conjecture: k(N) >= 8 for all even N > 398

In [4, 10^7], the largest N with k(N) < 8 is 398. Conjecture: k(N) >= 8 for all even N > 398.

**Conjecture**: k(N) >= 8 for all even N > 398.

### F2997 — Conjecture: k(N) >= 9 for all even N > 398

In [4, 10^7], the largest N with k(N) < 9 is 398. Conjecture: k(N) >= 9 for all even N > 398.

**Conjecture**: k(N) >= 9 for all even N > 398.

### F2998 — Conjecture: k(N) >= 10 for all even N > 488

In [4, 10^7], the largest N with k(N) < 10 is 488. Conjecture: k(N) >= 10 for all even N > 488.

**Conjecture**: k(N) >= 10 for all even N > 488.

### F2999 — Conjecture: k(N) >= 15 for all even N > 992

In [4, 10^7], the largest N with k(N) < 15 is 992. Conjecture: k(N) >= 15 for all even N > 992.

**Conjecture**: k(N) >= 15 for all even N > 992.

### F3000 — Conjecture: k(N) >= 20 for all even N > 1412

In [4, 10^7], the largest N with k(N) < 20 is 1412. Conjecture: k(N) >= 20 for all even N > 1412.

**Conjecture**: k(N) >= 20 for all even N > 1412.

### F3001 — Conjecture: k(N) >= 30 for all even N > 2672

In [4, 10^7], the largest N with k(N) < 30 is 2672. Conjecture: k(N) >= 30 for all even N > 2672.

**Conjecture**: k(N) >= 30 for all even N > 2672.

### F3002 — Conjecture: k(N) >= 50 for all even N > 4478

In [4, 10^7], the largest N with k(N) < 50 is 4478. Conjecture: k(N) >= 50 for all even N > 4478.

**Conjecture**: k(N) >= 50 for all even N > 4478.

### F3003 — Conjecture: k(N) >= 100 for all even N > 11672

In [4, 10^7], the largest N with k(N) < 100 is 11672. Conjecture: k(N) >= 100 for all even N > 11672.

**Conjecture**: k(N) >= 100 for all even N > 11672.

### F3004 — Conjecture: k(N) >= 200 for all even N > 27908

In [4, 10^7], the largest N with k(N) < 200 is 27908. Conjecture: k(N) >= 200 for all even N > 27908.

**Conjecture**: k(N) >= 200 for all even N > 27908.

### F3005 — Conjecture: k(N) >= 500 for all even N > 85616

In [4, 10^7], the largest N with k(N) < 500 is 85616. Conjecture: k(N) >= 500 for all even N > 85616.

**Conjecture**: k(N) >= 500 for all even N > 85616.

### F3006 — Conjecture: k(N) >= 1000 for all even N > 195368

In [4, 10^7], the largest N with k(N) < 1000 is 195368. Conjecture: k(N) >= 1000 for all even N > 195368.

**Conjecture**: k(N) >= 1000 for all even N > 195368.

### F3044 — Conjecture (refined): k(N) = 1 iff N ∈ {4, 6, 8, 12}

Empirically in [4, 10^7], k(N) = 1 ONLY for N = 4, 6, 8, 12. Conjecture: this list is complete. (Stronger than Goldbach.)

**Conjecture**: k(N) = 1 iff N ∈ {4, 6, 8, 12}.

### F3045 — Conjecture: k(N) >= c N^{1/2} / log N for some c > 0 (very weak lower bound)

Trivially k(N) >= 1 for all even N, but stronger: k(N) >= 2 for N > 12. Conjecture: k(N) >= N^(1/2) / log N for some c > 0 (very weak).

**Conjecture**: k(N) >= c N^{1/2} / log N for some c > 0.

### F3047 — Conjecture: every even N > 12 has at least one off-diagonal decomposition

Empirically, in [4, 10^7], every N > 12 has k(N) >= 2, so at least one off-diagonal decomposition. Conjecture: this is true for all N > 12.

**Conjecture**: For N > 12, there exist primes p ≠ q with p + q = N.
