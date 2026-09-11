"""Unit tests for the foundational Goldbach core package."""
import unittest
from src.sieve import PrimeSieve
from src.goldbach_core import GoldbachDecomposer
from src.hardy_littlewood import (
    TWIN_PRIME_CONSTANT,
    singular_series,
    expected_k_asymptotic,
    normalized_goldbach_ratio
)
from src.linter import MathLinter

class TestPrimeSieve(unittest.TestCase):
    def test_prime_counts(self):
        sieve = PrimeSieve(100000)
        self.assertEqual(sieve.prime_count(), 9592)
        self.assertTrue(sieve.is_prime(2))
        self.assertTrue(sieve.is_prime(3))
        self.assertTrue(sieve.is_prime(99991))
        self.assertFalse(sieve.is_prime(1))
        self.assertFalse(sieve.is_prime(4))
        self.assertFalse(sieve.is_prime(99993)) # 99993 = 3 * 33331

class TestGoldbachDecomposer(unittest.TestCase):
    def setUp(self):
        self.decomposer = GoldbachDecomposer(10000)

    def test_small_values(self):
        # 4 = 2 + 2
        stat4 = self.decomposer.get_stat(4)
        self.assertEqual(stat4.k, 1)
        self.assertEqual(stat4.p_min, 2)
        self.assertEqual(stat4.p_max, 2)
        self.assertTrue(stat4.has_diagonal)

        # 6 = 3 + 3
        stat6 = self.decomposer.get_stat(6)
        self.assertEqual(stat6.k, 1)
        self.assertEqual(stat6.p_min, 3)
        self.assertEqual(stat6.p_max, 3)
        self.assertTrue(stat6.has_diagonal)

        # 8 = 3 + 5
        stat8 = self.decomposer.get_stat(8)
        self.assertEqual(stat8.k, 1)
        self.assertEqual(stat8.p_min, 3)
        self.assertEqual(stat8.p_max, 5)
        self.assertFalse(stat8.has_diagonal)

        # 10 = 3 + 7 = 5 + 5
        stat10 = self.decomposer.get_stat(10)
        self.assertEqual(stat10.k, 2)
        self.assertEqual(stat10.p_min, 3)
        self.assertTrue(stat10.has_diagonal)

        # 12 = 5 + 7
        stat12 = self.decomposer.get_stat(12)
        self.assertEqual(stat12.k, 1)
        self.assertEqual(stat12.p_min, 5)

    def test_k_ge_2_for_n_gt_12(self):
        # Test the conjecture that k(N) >= 2 for all N in [14, 2000]
        for n in range(14, 2001, 2):
            stat = self.decomposer.get_stat(n)
            self.assertGreaterEqual(stat.k, 2, f"Failed at N={n}")

class TestHardyLittlewood(unittest.TestCase):
    def test_singular_series(self):
        # S(4) = 2 * C_2
        s4 = singular_series(4)
        self.assertAlmostEqual(s4, 2 * TWIN_PRIME_CONSTANT, places=6)
        
        # S(6) = 2 * C_2 * (3-1)/(3-2) = 4 * C_2
        s6 = singular_series(6)
        self.assertAlmostEqual(s6, 4 * TWIN_PRIME_CONSTANT, places=6)

        # S(30) = 2 * C_2 * 2 * (4/3) = (16/3) * C_2
        s30 = singular_series(30)
        self.assertAlmostEqual(s30, (16.0 / 3.0) * TWIN_PRIME_CONSTANT, places=6)

    def test_expectation_positive(self):
        for n in range(100, 1000, 50):
            exp_k = expected_k_asymptotic(n, use_integral=True)
            self.assertGreater(exp_k, 0)

class TestMathLinter(unittest.TestCase):
    def setUp(self):
        self.linter = MathLinter(verification_limit=1000)

    def test_catches_parity_fallacy(self):
        ces = self.linter.check_parity_claim(n_max=100)
        self.assertTrue(len(ces) > 0, "Linter must find counterexamples to parity fallacy")
        # N=10 is a counterexample: M=5 prime, but k(10)=2 (even)
        self.assertTrue(any(item[0] == 10 for item in ces))

    def test_catches_pmin_equals_2(self):
        ces = self.linter.check_pmin_equals_2_claim()
        self.assertEqual(ces, [4], "pmin(N) == 2 occurs ONLY at N=4")

    def test_catches_e0030_structural_rule_boundary_failure(self):
        ces = self.linter.check_structural_rule_e0030(n_max=20)
        # N=4 and N=6 must be caught as boundary failures of naive q ∤ N rule
        failed_ns = [c[0] for c in ces]
        self.assertIn(4, failed_ns)
        self.assertIn(6, failed_ns)

    def test_linting_rule_messages(self):
        bad_p = {
            "id": "F9999",
            "category": "P",
            "statement": "k(2M) is odd iff M is prime (proved)",
            "proof": "Off diagonal pairs pair up."
        }
        issues = self.linter.lint_finding(bad_p)
        self.assertTrue(len(issues) > 0)
        self.assertIn("False Theorem", issues[0])

if __name__ == "__main__":
    unittest.main()
