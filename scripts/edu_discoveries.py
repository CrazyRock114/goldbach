"""Student-Accessible Mathematical Discoveries Engine for K-12 Education.

Analyzes:
1. The 'Unique Four' Club {4, 6, 8, 12} (only numbers with a single decomposition).
2. The 'Multiples-of-6 Prime Bonus' (why 6k has ~2x more prime pairs than 6k±2).
3. 'Twin Prime Bridges' (doubled midpoint of twin primes always yields a Goldbach pair).
4. 'Goldbach Richness Index' (Oasis Numbers vs Desert Numbers).

Exports formatted data to edu/edu_data.js for the interactive Discovery Lab.
"""
import os
import json
import math
from src.goldbach_core import GoldbachDecomposer
from src.sieve import PrimeSieve
from src.hardy_littlewood import singular_series

def main():
    print("=" * 80)
    print("COMPUTING K-12 STUDENT-ACCESSIBLE GOLDBACH DISCOVERIES")
    print("=" * 80)

    max_n = 5000
    decomposer = GoldbachDecomposer(max_n)
    sieve = PrimeSieve(max_n)

    # -------------------------------------------------------------------------
    # 1. The Unique Four Club
    # -------------------------------------------------------------------------
    unique_four = []
    for n in range(4, max_n + 1, 2):
        stat = decomposer.get_stat(n)
        if stat.k == 1:
            pairs = decomposer.decompose(n)
            unique_four.append({
                "n": n,
                "pairs": pairs,
                "pmin": stat.p_min
            })

    print(f"1. THE UNIQUE FOUR CLUB: Found {len(unique_four)} numbers with exactly 1 pair:")
    for item in unique_four:
        print(f"   N = {item['n']}: Pair = {item['pairs'][0][0]} + {item['pairs'][0][1]}")

    # -------------------------------------------------------------------------
    # 2. Multiples of 6 Prime Bonus
    # -------------------------------------------------------------------------
    k_mod0 = []
    k_mod2 = []
    k_mod4 = []

    for n in range(100, 2000, 2):
        stat = decomposer.get_stat(n)
        if n % 6 == 0:
            k_mod0.append(stat.k)
        elif n % 6 == 2:
            k_mod2.append(stat.k)
        else:
            k_mod4.append(stat.k)

    avg0 = sum(k_mod0) / len(k_mod0)
    avg2 = sum(k_mod2) / len(k_mod2)
    avg4 = sum(k_mod4) / len(k_mod4)
    avg_non0 = (sum(k_mod2) + sum(k_mod4)) / (len(k_mod2) + len(k_mod4))
    ratio_bonus = avg0 / avg_non0

    print(f"\n2. MULTIPLES-OF-6 PRIME BONUS (N in [100, 2000]):")
    print(f"   - Average pairs for N = 0 (mod 6): {avg0:.2f}")
    print(f"   - Average pairs for N = 2 (mod 6): {avg2:.2f}")
    print(f"   - Average pairs for N = 4 (mod 6): {avg4:.2f}")
    print(f"   - Multiples of 6 have {ratio_bonus:.2f}x MORE pairs on average! (~2x bonus)")

    # -------------------------------------------------------------------------
    # 3. Twin Prime Bridges
    # -------------------------------------------------------------------------
    twin_bridges = []
    primes_list = sieve.primes()
    for i in range(len(primes_list) - 1):
        p1 = primes_list[i]
        p2 = primes_list[i + 1]
        if p2 == p1 + 2:
            midpoint = p1 + 1
            bridge_n = 2 * midpoint
            if bridge_n <= 1000:
                stat = decomposer.get_stat(bridge_n)
                twin_bridges.append({
                    "p1": p1,
                    "p2": p2,
                    "midpoint": midpoint,
                    "bridge_n": bridge_n,
                    "total_k": stat.k
                })

    print(f"\n3. TWIN PRIME BRIDGES: Found {len(twin_bridges)} twin prime pairs up to 1000.")
    print("   Sample Bridges: Doubled midpoint is ALWAYS guaranteed a Goldbach pair (p + (p+2)):")
    for b in twin_bridges[:6]:
        print(f"   Primes ({b['p1']}, {b['p2']}) -> Midpoint {b['midpoint']} -> Bridge N = {b['bridge_n']} = {b['p1']} + {b['p2']} (Total k={b['total_k']})")

    # -------------------------------------------------------------------------
    # 4. Goldbach Richness Index: Oasis vs Desert Numbers
    # -------------------------------------------------------------------------
    richness_records = []
    for n in range(30, 2000, 2):
        stat = decomposer.get_stat(n)
        log_n = math.log(n)
        base = n / (log_n ** 2)
        r_index = stat.k / base
        richness_records.append({
            "n": n,
            "k": stat.k,
            "richness": round(r_index, 3),
            "singular_series": round(singular_series(n), 3)
        })

    # Sort by richness
    richness_records.sort(key=lambda x: x["richness"])
    desert_numbers = richness_records[:10]
    oasis_numbers = richness_records[-10:][::-1]

    print(f"\n4. GOLDBACH RICHNESS SPECTRUM:")
    print("   Top 5 Desert Numbers (Poorest in Pairs):")
    for d in desert_numbers[:5]:
        print(f"     N = {d['n']:<5} | k(N) = {d['k']:<3} | Richness R = {d['richness']:.3f} | S(N) = {d['singular_series']}")
    print("   Top 5 Oasis Numbers (Richest in Pairs):")
    for o in oasis_numbers[:5]:
        print(f"     N = {o['n']:<5} | k(N) = {o['k']:<3} | Richness R = {o['richness']:.3f} | S(N) = {o['singular_series']}")

    # -------------------------------------------------------------------------
    # 5. Goldbach Comet Data (N = 4 to 1000) for Student Comet Explorer
    # -------------------------------------------------------------------------
    twin_midpoints_set = set(b["bridge_n"] for b in twin_bridges)
    comet_points = []
    for n in range(4, 1002, 2):
        stat = decomposer.get_stat(n)
        tags = []
        if (n & (n - 1)) == 0:
            tags.append("pow2")
        if n % 30 == 0:
            tags.append("m30")
        elif n % 6 == 0:
            tags.append("m6")
        if n in twin_midpoints_set:
            tags.append("twin")
        
        comet_points.append({
            "n": n,
            "k": stat.k,
            "pmin": stat.p_min,
            "tags": tags
        })

    # -------------------------------------------------------------------------
    # 6. Prime Grid & Factorization for 1..100
    # -------------------------------------------------------------------------
    def get_prime_factors(num):
        if num < 2:
            return []
        d = 2
        temp = num
        factors = []
        while d * d <= temp:
            while temp % d == 0:
                factors.append(d)
                temp //= d
            d += 1
        if temp > 1:
            factors.append(temp)
        return factors

    prime_grid_100 = []
    for i in range(1, 101):
        pr = sieve.is_prime(i)
        facs = get_prime_factors(i)
        if pr:
            desc = "Prime"
        elif i == 1:
            desc = "Neither prime nor composite"
        else:
            desc = " × ".join(str(f) for f in facs)
        prime_grid_100.append({
            "num": i,
            "isPrime": pr,
            "desc": desc
        })

    # -------------------------------------------------------------------------
    # Export to edu/edu_data.js
    # -------------------------------------------------------------------------
    edu_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "edu"))
    os.makedirs(edu_dir, exist_ok=True)
    out_path = os.path.join(edu_dir, "edu_data.js")

    # Build detailed lookup table for numbers 4..120
    small_numbers = []
    for n in range(4, 122, 2):
        stat = decomposer.get_stat(n)
        pairs = decomposer.decompose(n)
        facs = get_prime_factors(n)
        fac_str = " × ".join(str(f) for f in facs)
        small_numbers.append({
            "n": n,
            "k": stat.k,
            "pmin": stat.p_min,
            "pairs": pairs,
            "factors": fac_str,
            "is_multiple_6": (n % 6 == 0),
            "is_multiple_30": (n % 30 == 0),
            "is_power_2": ((n & (n - 1)) == 0),
            "is_twin_bridge": (n in twin_midpoints_set)
        })

    edu_export = {
        "unique_four": unique_four,
        "bonus_mod6": {
            "avg_mod0": round(avg0, 2),
            "avg_mod2": round(avg2, 2),
            "avg_mod4": round(avg4, 2),
            "bonus_ratio": round(ratio_bonus, 2)
        },
        "twin_bridges": twin_bridges[:20],
        "desert_numbers": desert_numbers,
        "oasis_numbers": oasis_numbers,
        "small_numbers": small_numbers,
        "comet_points": comet_points,
        "prime_grid_100": prime_grid_100,
        "prime_list": [p for p in primes_list if p <= 120]
    }

    with open(out_path, "w", encoding="utf-8") as f:
        f.write("window.EDU_GOLDBACH_DATA = ")
        f.write(json.dumps(edu_export, separators=(',', ':')))
        f.write(";\n")

    print(f"\nExported complete educational dataset to {out_path} (size: {os.path.getsize(out_path)} bytes)")

if __name__ == "__main__":
    main()
