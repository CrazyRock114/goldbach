/-
  Formal Mathematical Specification of Elementary Goldbach Lemmas in Lean 4.
  
  Contains formal definitions and machine-checkable proofs for:
  1. pmin(n) >= 3 for all even n > 4 (prime 2 cannot form a Goldbach pair).
  2. Divisibility Exclusion Lemma: if prime p divides n and p < n / 2,
     then n - p is composite.
  3. Primorial lower bound corollary.
  4. Powers of 2 have no odd prime divisors (minimality of Singular Series).
-/

import Mathlib.Data.Nat.Prime.Basic
import Mathlib.Algebra.Ring.Parity

namespace Goldbach

/-- A Goldbach pair for an even integer n is a pair of primes (p, q) summing to n. -/
def IsGoldbachPair (n p q : ℕ) : Prop :=
  Nat.Prime p ∧ Nat.Prime q ∧ p + q = n

/-- An integer n satisfies Goldbach's Conjecture if it admits a Goldbach pair. -/
def HasGoldbachDecomposition (n : ℕ) : Prop :=
  ∃ p q : ℕ, IsGoldbachPair n p q

/-! ### 1. Lower Bound Lemma: pmin(n) >= 3 for n > 4 -/

/-- For any even integer n > 4, the prime 2 can never form a Goldbach pair with another prime. -/
theorem two_not_in_goldbach_pair (n : ℕ) (hn_even : Even n) (hn_gt4 : n > 4) (q : ℕ) :
    ¬ IsGoldbachPair n 2 q := by
  intro ⟨h2_prime, hq_prime, h_sum⟩
  -- From 2 + q = n, we have q = n - 2
  have hq_val : q = n - 2 := by
    omega
  -- Since n is even and > 4, n - 2 is even and > 2
  rcases hn_even with ⟨m, rfl⟩
  have hm_gt2 : m > 2 := by omega
  have hq_even : q = 2 * (m - 1) := by omega
  have hq_gt2 : q > 2 := by omega
  -- A number that is an even multiple of 2 strictly greater than 2 cannot be prime
  have hq_comp : ¬ Nat.Prime q := by
    intro hq_pr
    have h2_dvd : 2 ∣ q := by
      use (m - 1)
      exact hq_even
    have h_eq2 : q = 2 := (Nat.Prime.eq_one_or_self_of_dvd hq_pr 2 h2_dvd).resolve_left (by decide)
    omega
  exact hq_comp hq_prime

/-! ### 2. Divisibility Exclusion Lemma -/

/-- If a prime p divides n and p < n / 2, then n - p is composite. -/
theorem divisibility_exclusion (n p q : ℕ) (hp : Nat.Prime p)
    (hp_div : p ∣ n) (hp_lt : p < n / 2) (h_sum : p + q = n) :
    ¬ Nat.Prime q := by
  intro hq_prime
  -- Since p | n, let n = p * k
  rcases hp_div with ⟨k, rfl⟩
  -- From p < (p * k) / 2 and p >= 2, we deduce k >= 3
  have hp_pos : p >= 2 := Nat.Prime.two_le hp
  have hk_gt2 : k > 2 := by
    have : p * 2 < p * k := by omega
    exact (mul_lt_mul_left (by omega)).mp this
  -- Then q = p * k - p = p * (k - 1)
  have hq_eq : q = p * (k - 1) := by
    omega
  -- Since k > 2, k - 1 > 1, so p divides q non-trivially
  have hp_dvd_q : p ∣ q := by
    use (k - 1)
    exact hq_eq
  have hq_gt_p : q > p := by
    have : k - 1 >= 2 := by omega
    calc q = p * (k - 1) := hq_eq
         _ >= p * 2 := by omega
         _ > p := by omega
  -- Therefore q cannot be prime
  have h_not_prime : ¬ Nat.Prime q := by
    intro hq_pr
    have h_or := Nat.Prime.eq_one_or_self_of_dvd hq_pr p hp_dvd_q
    rcases h_or with h1 | h2
    · subst h1; omega
    · subst h2; omega
  exact h_not_prime hq_prime

/-! ### 3. Primorial Lower Bound Corollary -/

/-- If all primes up to p_k divide n and n > 2 * p_k, then any prime in an
    off-diagonal decomposition must be strictly greater than p_k. -/
theorem primorial_exclusion (n p q : ℕ) (hp : Nat.Prime p)
    (h_all_div : ∀ r : ℕ, Nat.Prime r → r ≤ p → r ∣ n)
    (hn_gt : n > 2 * p) (h_pair : IsGoldbachPair n p q) :
    p > n / 2 := by
  by_contra h_le
  push_neg at h_le
  have hp_div : p ∣ n := h_all_div p hp (le_refl p)
  have hp_lt : p < n / 2 := by
    -- p <= n/2 and n > 2p implies p < n/2 if n != 2p
    omega
  have hq_not_prime := divisibility_exclusion n p q hp hp_div hp_lt h_pair.2.2
  exact hq_not_prime h_pair.2.1

/-! ### 4. Powers of 2: Minimality of Singular Series -/

/-- Powers of 2 have no odd prime divisors, proving that the Singular Series product is empty. -/
theorem powers_of_two_no_odd_prime_divisors (k : ℕ) (p : ℕ) (hp : Nat.Prime p)
    (hp_div : p ∣ 2^k) (hp_odd : p > 2) : False := by
  have h_p_eq_2 : p = 2 := by
    have hp_dvd_2 : p ∣ 2 := (Nat.Prime.dvd_pow_iff_dvd hp).mp hp_div
    exact (Nat.Prime.eq_one_or_self_of_dvd hp 2 hp_dvd_2).resolve_left (by decide)
  subst h_p_eq_2
  omega

end Goldbach
