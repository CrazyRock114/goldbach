"""Comprehensive unit tests for specialized computational engines (Phase 2)."""
import unittest
from src.verifier import GoldbachVerifier
from src.ntt_goldbach import NTTGoldbach
from src.goldbach_core import GoldbachDecomposer

class TestEngineA(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.verifier = GoldbachVerifier()
        cls.decomposer = GoldbachDecomposer(10000)

    def test_verify_small_range(self):
        res = self.verifier.verify_range(4, 1000)
        self.assertTrue(res.is_verified)
        self.assertIsNone(res.counterexample)
        self.assertGreater(res.max_pmin, 0)
        self.assertEqual(res.max_pmin_n % 2, 0)

    def test_verify_range_without_4(self):
        res = self.verifier.verify_range(6, 5000)
        self.assertTrue(res.is_verified)
        self.assertIsNone(res.counterexample)
        self.assertGreaterEqual(res.max_pmin, 3) # pmin >= 3 for N > 4

    def test_verify_pmin_consistency(self):
        # Cross-check max_pmin in [6, 1000]
        res = self.verifier.verify_range(6, 1000)
        py_max_pmin = 0
        py_max_n = 0
        for n in range(6, 1001, 2):
            p = self.decomposer.find_p_min(n)
            if p > py_max_pmin:
                py_max_pmin = p
                py_max_n = n
        self.assertEqual(res.max_pmin, py_max_pmin)
        # Note: multiple n could achieve the max pmin, but the values must match
        self.assertEqual(self.decomposer.find_p_min(res.max_pmin_n), py_max_pmin)

class TestEngineB(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.ntt = NTTGoldbach()
        cls.decomposer = GoldbachDecomposer(5000)

    def test_boundary_values(self):
        k_arr = self.ntt.compute_k_array(20)
        self.assertEqual(k_arr[4], 1)
        self.assertEqual(k_arr[6], 1)
        self.assertEqual(k_arr[8], 1)
        self.assertEqual(k_arr[10], 2)
        self.assertEqual(k_arr[12], 1)
        self.assertEqual(k_arr[14], 2)
        # Odd values must be 0
        for odd in [1, 3, 5, 7, 9, 11, 13, 15]:
            self.assertEqual(k_arr[odd], 0)

    def test_exact_agreement_with_ground_truth(self):
        max_n = 5000
        k_ntt = self.ntt.compute_k_array(max_n)
        
        mismatches = []
        for n in range(4, max_n + 1, 2):
            stat = self.decomposer.get_stat(n)
            if k_ntt[n] != stat.k:
                mismatches.append((n, k_ntt[n], stat.k))

        self.assertEqual(len(mismatches), 0, f"Found {len(mismatches)} mismatches between NTT and ground truth: {mismatches[:5]}")

if __name__ == "__main__":
    unittest.main()
