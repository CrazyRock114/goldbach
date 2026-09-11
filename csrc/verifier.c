/**
 * High-Throughput Segmented Bit-Sieve Goldbach Verifier (Engine A)
 * 
 * Implements cache-friendly segmented prime sieving with bit-parallel
 * candidate lookup to verify Goldbach's conjecture at extreme speed.
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>

#define SEGMENT_SIZE (1ULL << 21) // 2M odd numbers per segment (~256 KB bit array, fits in L2 cache)
#define MAX_PMIN_MARGIN 10000ULL

static uint32_t *base_primes = NULL;
static size_t num_base_primes = 0;
static uint64_t base_limit = 0;

/**
 * Sieve primes up to limit to serve as base primes for segmented sieving.
 */
static void init_base_primes(uint64_t limit) {
    if (base_primes && base_limit >= limit) return;
    if (base_primes) free(base_primes);

    base_limit = limit < 10000 ? 10000 : limit;
    size_t num_odds = (base_limit - 1) / 2 + 1;
    uint8_t *is_composite = (uint8_t *)calloc(num_odds, 1);
    if (!is_composite) return;

    for (uint64_t p = 3; p * p <= base_limit; p += 2) {
        if (!is_composite[p / 2]) {
            for (uint64_t j = (p * p) / 2; j < num_odds; j += p) {
                is_composite[j] = 1;
            }
        }
    }

    size_t count = 1; // 2 is prime
    for (size_t i = 1; i < num_odds; i++) {
        if (!is_composite[i]) count++;
    }

    base_primes = (uint32_t *)malloc(count * sizeof(uint32_t));
    base_primes[0] = 2;
    size_t idx = 1;
    for (size_t i = 1; i < num_odds; i++) {
        if (!is_composite[i]) {
            base_primes[idx++] = (uint32_t)(2 * i + 1);
        }
    }
    num_base_primes = count;
    free(is_composite);
}

static inline bool is_small_prime(uint64_t n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if ((n & 1) == 0) return false;
    // Binary search in base_primes
    size_t l = 0, r = num_base_primes;
    while (l < r) {
        size_t m = l + (r - l) / 2;
        if (base_primes[m] == n) return true;
        if (base_primes[m] < n) l = m + 1;
        else r = m;
    }
    return false;
}

/**
 * Verify Goldbach's conjecture for all even N in [low, high].
 * 
 * Returns:
 *   0 if all verified successfully with zero counterexamples
 *   1 if a counterexample was found (*counterexample will be set to N)
 */
int verify_goldbach_range(uint64_t low, uint64_t high, uint64_t *counterexample, uint32_t *max_pmin, uint64_t *max_pmin_n) {
    if (low < 4) low = 4;
    if ((low & 1) != 0) low++;
    if ((high & 1) != 0) high--;
    if (low > high) return 0;

    uint64_t sqrt_high = (uint64_t)sqrt((double)high) + 1000;
    init_base_primes(sqrt_high > MAX_PMIN_MARGIN ? sqrt_high : MAX_PMIN_MARGIN);

    *counterexample = 0;
    uint32_t current_max_pmin = 0;
    uint64_t current_max_n = 0;

    // Fast check for N = 4
    if (low == 4) {
        if (current_max_pmin < 2) {
            current_max_pmin = 2;
            current_max_n = 4;
        }
        low = 6;
        if (low > high) {
            *max_pmin = current_max_pmin;
            *max_pmin_n = current_max_n;
            return 0;
        }
    }

    uint64_t seg_step = 2 * SEGMENT_SIZE;
    for (uint64_t seg_low = low; seg_low <= high; seg_low += seg_step) {
        uint64_t seg_high = seg_low + seg_step - 2;
        if (seg_high > high) seg_high = high;

        // We sieve odd numbers in [sieve_start, sieve_end]
        // Sieve slightly below seg_low to cover N - p when p <= MAX_PMIN_MARGIN
        uint64_t sieve_start = (seg_low > MAX_PMIN_MARGIN) ? (seg_low - MAX_PMIN_MARGIN) : 3;
        if ((sieve_start & 1) == 0) sieve_start++;
        uint64_t sieve_end = seg_high;

        uint64_t num_odds = (sieve_end - sieve_start) / 2 + 1;
        uint64_t num_words = (num_odds + 63) / 64;
        uint64_t *bit_array = (uint64_t *)calloc(num_words, sizeof(uint64_t));
        if (!bit_array) return -1; // Out of memory

        // Sieve odd numbers in [sieve_start, sieve_end]
        for (size_t i = 1; i < num_base_primes; i++) {
            uint64_t p = base_primes[i];
            if (p * p > sieve_end) break;

            // Find first odd multiple of p >= sieve_start
            uint64_t start = (sieve_start + p - 1) / p * p;
            if ((start & 1) == 0) start += p;
            if (start < p * p) start = p * p;

            if (start <= sieve_end) {
                uint64_t start_idx = (start - sieve_start) / 2;
                for (uint64_t idx = start_idx; idx < num_odds; idx += p) {
                    bit_array[idx >> 6] |= (1ULL << (idx & 63));
                }
            }
        }

        // Now verify even numbers in [seg_low, seg_high]
        for (uint64_t n = seg_low; n <= seg_high; n += 2) {
            uint32_t p_witness = 0;
            uint64_t half_n = n / 2;

            for (size_t i = 1; i < num_base_primes; i++) {
                uint32_t p = base_primes[i];
                if (p > half_n) break;

                uint64_t q = n - p;
                bool q_is_prime = false;

                if (q >= sieve_start && q <= sieve_end) {
                    uint64_t q_idx = (q - sieve_start) / 2;
                    q_is_prime = !(bit_array[q_idx >> 6] & (1ULL << (q_idx & 63)));
                } else {
                    q_is_prime = is_small_prime(q);
                }

                if (q_is_prime) {
                    p_witness = p;
                    break;
                }
            }

            if (p_witness == 0) {
                // Counterexample to Goldbach!
                *counterexample = n;
                free(bit_array);
                return 1;
            }

            if (p_witness > current_max_pmin) {
                current_max_pmin = p_witness;
                current_max_n = n;
            }
        }

        free(bit_array);
    }

    *max_pmin = current_max_pmin;
    *max_pmin_n = current_max_n;
    return 0;
}

/**
 * Extract all strict champion integers N* up to max_N where p_min(N*) > max_{M < N*} p_min(M).
 */
int extract_pmin_champions(uint64_t max_N, uint64_t *champion_N, uint32_t *champion_pmin, size_t max_champions, size_t *num_champions) {
    if (max_N < 4) {
        *num_champions = 0;
        return 0;
    }

    uint64_t sqrt_high = (uint64_t)sqrt((double)max_N) + 1000;
    init_base_primes(sqrt_high > MAX_PMIN_MARGIN ? sqrt_high : MAX_PMIN_MARGIN);

    *num_champions = 0;
    uint32_t current_max_pmin = 0;

    // N = 4: 2 + 2 -> pmin = 2
    champion_N[(*num_champions)] = 4;
    champion_pmin[(*num_champions)] = 2;
    (*num_champions)++;
    current_max_pmin = 2;

    // N = 6: 3 + 3 -> pmin = 3
    if (max_N >= 6) {
        champion_N[(*num_champions)] = 6;
        champion_pmin[(*num_champions)] = 3;
        (*num_champions)++;
        current_max_pmin = 3;
    }

    uint64_t seg_step = 2 * SEGMENT_SIZE;
    for (uint64_t seg_low = 8; seg_low <= max_N; seg_low += seg_step) {
        uint64_t seg_high = seg_low + seg_step - 2;
        if (seg_high > max_N) seg_high = max_N;

        uint64_t sieve_start = (seg_low > MAX_PMIN_MARGIN) ? (seg_low - MAX_PMIN_MARGIN) : 3;
        if ((sieve_start & 1) == 0) sieve_start++;
        uint64_t sieve_end = seg_high;

        uint64_t num_odds = (sieve_end - sieve_start) / 2 + 1;
        uint64_t num_words = (num_odds + 63) / 64;
        uint64_t *bit_array = (uint64_t *)calloc(num_words, sizeof(uint64_t));
        if (!bit_array) return -1;

        for (size_t i = 1; i < num_base_primes; i++) {
            uint64_t p = base_primes[i];
            if (p * p > sieve_end) break;

            uint64_t start = (sieve_start + p - 1) / p * p;
            if ((start & 1) == 0) start += p;
            if (start < p * p) start = p * p;

            if (start <= sieve_end) {
                uint64_t start_idx = (start - sieve_start) / 2;
                for (uint64_t idx = start_idx; idx < num_odds; idx += p) {
                    bit_array[idx >> 6] |= (1ULL << (idx & 63));
                }
            }
        }

        for (uint64_t n = seg_low; n <= seg_high; n += 2) {
            uint32_t p_witness = 0;
            uint64_t half_n = n / 2;

            for (size_t i = 1; i < num_base_primes; i++) {
                uint32_t p = base_primes[i];
                if (p > half_n) break;

                uint64_t q = n - p;
                bool q_is_prime = false;

                if (q >= sieve_start && q <= sieve_end) {
                    uint64_t q_idx = (q - sieve_start) / 2;
                    q_is_prime = !(bit_array[q_idx >> 6] & (1ULL << (q_idx & 63)));
                } else {
                    q_is_prime = is_small_prime(q);
                }

                if (q_is_prime) {
                    p_witness = p;
                    break;
                }
            }

            if (p_witness > current_max_pmin) {
                if (*num_champions < max_champions) {
                    champion_N[*num_champions] = n;
                    champion_pmin[*num_champions] = p_witness;
                    (*num_champions)++;
                }
                current_max_pmin = p_witness;
            }
        }

        free(bit_array);
    }

    return 0;
}

