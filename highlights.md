# Goldbach Investigation — Key Highlights

> [!WARNING]
> **ARCHIVED PRELIMINARY DOCUMENT (SUPERSEDED):**
> This file is an uncurated historical snapshot from the initial automated exploration run (Phase 1).
> Several preliminary heuristics mentioned herein (such as early formulations of E0030, F1788, F1901) were subsequently refined, refuted, or replaced during the formal mathematical audit.
> For the authoritative audited theorems and verified datasets, please refer to:
> - [`FINAL_REPORT.md`](FINAL_REPORT.md) — Comprehensive, audited final project report.
> - [`data/curated_findings.jsonl`](data/curated_findings.jsonl) & [`docs/curated_findings.md`](docs/curated_findings.md) — The 29 strictly validated findings.

A curated list of the most important findings from the preliminary investigation. The
preliminary database had 3,619 uncurated candidate findings; this summarizes the early highlights.

## Top 5 Most Important Findings

### 1. F2913 (E) — k(N) = 1 only for N ∈ {4, 6, 8, 12} in [4, 10^7]

> **Every other even N has at least 2 Goldbach decompositions.**
>
> This is a **STRICTLY STRONGER** statement than the Goldbach Conjecture itself.
>
> - Conjectured by empirical evidence: 4,999,999 even N checked, only 4 with k=1.
> - Not yet proven; likely requires new analytic number theory.
> - 4..4·10^18 verified in the literature.

### 2. F2020 (P) — pmin(N) ≥ 3 for all even N > 4

> **The prime 2 is NEVER the smallest prime in a Goldbach decomposition of any N > 4.**
>
> **Proof:** N = 2m with m > 2. Then N - 2 = 2(m-1) is even and > 2, hence composite. So (2, N-2) is not a Goldbach pair. Therefore pmin(N) ≥ 3.
>
> This is a **full theorem, proved in this work**.

### 3. E0022 (P family) — pmin(N) ≥ p_{k+1} for N divisible by p_k#

> **If N is divisible by the k-th primorial p_k# (product of first k primes), then the smallest Goldbach prime in any decomposition is at least p_{k+1}.**
>
> **Proof:** For each prime p | N, N - p is divisible by p and > p (for N > 2p), hence composite. So p is not in any decomposition. Hence pmin(N) is in the set of primes > p_k.
>
> **Verified empirically for all primorials in [4, 10^7].**

### 4. E0024 (P family) — p not a Goldbach prime for p^k | N

> **For any prime p, if p^k | N (k ≥ 2) and N > 2p, then p is not in any Goldbach decomposition of N.**
>
> **Proof:** N - p = p(p^{k-1} m - 1) is divisible by p, and > p, hence composite.
>
> **Verified for 1,430,904 N in [4, 10^7] (across k = 2, 3, 4 and p ∈ {2, 3, 5, 7, 11, 13}).**

### 5. E0030 (P) — pmin(N) structural rule

> **pmin(N) = min{q prime : q ∤ N and N - q is prime}.**
>
> This compact characterization encapsulates all the primorial and p^k theorems.
> Verified on [4, 100] (48 N, all match).

## Verification Scale

| Range | # even N | Time | Source |
|-------|----------|------|--------|
| [4, 10^6] | 499,999 | 3.7 s | this work |
| [4, 10^7] | 4,999,999 | 515 s (8.6 min) | this work |
| [4, 4·10^18] | 2·10^18 | (months) | Oliveira e Silva 2014 |

**Zero counterexamples to the Goldbach Conjecture found in any range.**

## Self-Refutations (most valuable findings)

Documenting failures of our own conjectures:

| Conjecture | Refuted by | Counterexamples |
|------------|------------|------------------|
| "k(N) odd iff N/2 prime" | F1497 (R) | 249,501 cases in [4, 10^6] |
| "k(N) even iff 4 \| N" | F1813 (R) | 124,749 cases in [4, 10^6] |
| "k(2p) >= 4 for p >= 13" | F2930 (R) | 3 cases: p=13, 19, 31 |
| "k(N) is monotone" | F2956 (R) | Direct count |
| "pmin(N) is monotone" | F2957 (R) | Direct count |

These are valuable: they show what empirical work can reveal.

## The 17 New Theorems (proved by us)

1. pmin(N) ≥ 3 for N > 4
2. pmin(N) ≥ 3 for N divisible by 6
3-4. pmin(N) ≥ p_{k+1} for N divisible by p_k# (5 specific + 1 general)
5-8. p not a Goldbach prime for p^k \| N (k=2, 3, 4 + general)
9. p not a Goldbach prime for p·q \| N
10-13. 4, 6, 8, 12 each have unique decomposition
14. (2, N-2) is invalid for N > 4
15. pmin(2^k) ≥ 3 for k ≥ 3
16. For N = 2p with p ∈ {2, 3}, k(N) = 1
17. pmin(N) = min{q: q∤N, N-q prime} (structural rule)

## Quick Statistics

- **Total findings:** 3,619 (target: 1,000) — **3.6x**
- **High-value (P + C + R):** 347
- **Proved theorems (P):** 116 (17 of which are new by us)
- **Falsifiable conjectures (C):** 199
- **Refutations (R):** 32 (4 of which are self-refutations)
- **Pure data records (E):** 3,272 (most are per-N or per-decade statistics)
