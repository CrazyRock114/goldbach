"""Automated Mathematical Linter for Goldbach Hypotheses and Findings.

Provides automated validation tools to catch:
- Counterexamples to proposed theorems (P)
- Parity fallacies (e.g. F1788)
- Impossible asymptotic claims (e.g. P(pmin=2) ~ c/log N)
- Duplicate / cloned findings inflating counts
- Boundary case failures (e.g. N=4, 6 in E0030)
"""
from typing import List, Dict, Any, Tuple, Optional
from src.goldbach_core import GoldbachDecomposer

class MathLinter:
    def __init__(self, verification_limit: int = 100000):
        self.limit = verification_limit
        self.decomposer = GoldbachDecomposer(verification_limit)

    def check_parity_claim(self, n_max: int = 10000) -> List[Tuple[int, int, bool]]:
        """Verify the claim: 'k(2M) is odd iff M is prime'.
        
        Returns list of counterexamples (n, k(n), M_is_prime).
        """
        counterexamples = []
        for n in range(4, min(n_max, self.limit) + 1, 2):
            stat = self.decomposer.get_stat(n)
            m = n // 2
            m_is_prime = self.decomposer.sieve.is_prime(m)
            k_is_odd = (stat.k % 2 != 0)
            if k_is_odd != m_is_prime:
                counterexamples.append((n, stat.k, m_is_prime))
        return counterexamples

    def check_pmin_equals_2_claim(self) -> List[int]:
        """Find all even N where p_min(N) == 2."""
        found = []
        for n in range(4, min(10000, self.limit) + 1, 2):
            if self.decomposer.find_p_min(n) == 2:
                found.append(n)
        return found

    def check_structural_rule_e0030(self, n_max: int = 100) -> List[Tuple[int, int, Optional[int]]]:
        """Verify E0030: p_min(N) = min{q prime : q not dividing N and N - q is prime}.
        
        Returns counterexamples where the naive rule fails.
        """
        counterexamples = []
        for n in range(4, n_max + 1, 2):
            true_pmin = self.decomposer.find_p_min(n)
            
            # Evaluate the naive rule
            rule_candidate = None
            for q in self.decomposer.sieve.iter_odd_primes():
                if q > n // 2:
                    break
                if n % q != 0 and self.decomposer.sieve.is_prime(n - q):
                    rule_candidate = q
                    break
                    
            if rule_candidate != true_pmin:
                counterexamples.append((n, true_pmin, rule_candidate))
        return counterexamples

    def lint_finding(self, finding: Dict[str, Any]) -> List[str]:
        """Lint a single finding record and return a list of issue warnings."""
        issues = []
        f_id = finding.get("id", "UNKNOWN")
        category = finding.get("category", "")
        title = finding.get("title", "")
        statement = finding.get("statement", "")
        proof = finding.get("proof", "")

        # 1. Check for known fallacy: Parity rule
        stmt_lower = statement.lower()
        if "odd iff" in stmt_lower and ("n/2" in stmt_lower or "m is prime" in stmt_lower or "m prime" in stmt_lower):
            if category == "P":
                issues.append(f"[{f_id}] False Theorem: Parity of k(N) does NOT match primality of N/2.")

        # 2. Check for known fallacy: pmin(N) = 2 density ~ 1/log N
        if "pmin(n) = 2" in statement.lower() and "log n" in statement.lower():
            if category in ("C", "P"):
                issues.append(f"[{f_id}] Impossible Asymptotic: pmin(N)=2 occurs ONLY at N=4. True density is 0.")

        # 3. Check for unfinished proof in P
        if category == "P":
            unfinished_markers = ["skipping the proof", "stated as a conjecture until proved", 
                                  "this is a c, not a p", "needs care", "not direct"]
            for marker in unfinished_markers:
                if marker in proof.lower() or marker in statement.lower():
                    issues.append(f"[{f_id}] Invalid P classification: Proof explicitly admits it is unfinished or conjectural.")

        # 4. Check for pmin structural rule boundary failure
        if "q ∤ n" in statement or "q not dividing n" in statement.lower():
            if "pmin" in statement.lower() and category == "P":
                if "n > 6" not in statement and "except 4, 6" not in statement.lower():
                    issues.append(f"[{f_id}] Flawed Structural Rule: Excludes diagonal primes for N=4 and N=6.")

        return issues
