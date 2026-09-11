"""Export datasets for the interactive Goldbach visualizer dashboard.

Exports:
- Champion trajectory data for p_min(N) up to 10^8.
- Stratified sample of the Goldbach comet spectrum with singular series values.
- Lower envelope maximal thresholds for k(N) < K.
Writes directly to docs/web_data.js as a JavaScript object to allow opening
docs/visualizer.html locally without CORS / server restrictions.
"""
import json
import math
import os
from src.verifier import GoldbachVerifier
from src.ntt_goldbach import NTTGoldbach
from src.hardy_littlewood import expected_k_asymptotic, singular_series

def factor_string(n: int) -> str:
    factors = []
    d = 2
    temp = n
    while d * d <= temp:
        if temp % d == 0:
            count = 0
            while temp % d == 0:
                count += 1
                temp //= d
            factors.append(f"{d}^{count}" if count > 1 else f"{d}")
        d += 1 if d == 2 else 2
    if temp > 1:
        factors.append(f"{temp}")
    return " · ".join(factors)

def main():
    docs_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "docs"))
    os.makedirs(docs_dir, exist_ok=True)
    out_file = os.path.join(docs_dir, "web_data.js")

    print("Generating web dataset...")

    # 1. Extract Champions up to 10^8 via Engine A
    verifier = GoldbachVerifier()
    raw_champs = verifier.get_pmin_champions(100000000)
    champions_data = []
    for idx, (n, p) in enumerate(raw_champs, 1):
        log_n = math.log(n)
        champions_data.append({
            "idx": idx,
            "n": n,
            "pmin": p,
            "log_n": round(log_n, 2),
            "ratio": round(p / (log_n ** 2), 4) if n > 6 else round(p / (log_n ** 2), 2),
            "factors": factor_string(n)
        })

    # 2. Extract Comet Spectrum Sample via Engine B (NTT)
    max_sample_n = 30000
    ntt = NTTGoldbach()
    k_arr = ntt.compute_k_array(max_sample_n)

    comet_points = []
    # Stride sample to keep UI snappy
    for n in range(4, max_sample_n + 1, 2):
        if n < 500 or (n < 5000 and n % 6 == 0) or (n % 20 == 0) or (n in [1 << k for k in range(2, 16)]):
            k = k_arr[n]
            s_n = singular_series(n)
            exp_k = expected_k_asymptotic(n, use_integral=True)
            ratio = round(k / exp_k, 3) if exp_k > 0 else 0
            comet_points.append({
                "n": n,
                "k": k,
                "s": round(s_n, 3),
                "exp_k": round(exp_k, 1),
                "ratio": ratio,
                "mod6": n % 6
            })

    # 3. Threshold sequence
    thresholds = [
        {"K": 2, "max_N": 12},
        {"K": 3, "max_N": 68},
        {"K": 4, "max_N": 128},
        {"K": 5, "max_N": 152},
        {"K": 6, "max_N": 188},
        {"K": 7, "max_N": 332},
        {"K": 8, "max_N": 398},
        {"K": 10, "max_N": 488},
        {"K": 15, "max_N": 992},
        {"K": 20, "max_N": 1412}
    ]

    web_data = {
        "champions": champions_data,
        "comet": comet_points,
        "thresholds": thresholds
    }

    with open(out_file, "w", encoding="utf-8") as f:
        f.write("window.GOLDBACH_DATA = ")
        f.write(json.dumps(web_data, indent=2))
        f.write(";\n")

    print(f"Exported {len(champions_data)} champions and {len(comet_points)} comet points to {out_file}")

if __name__ == "__main__":
    main()
