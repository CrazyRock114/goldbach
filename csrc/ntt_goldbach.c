/**
 * Exact Goldbach Decomposition Counting via Number Theoretic Transform (Engine B)
 * 
 * Computes exact k(N) without floating-point precision loss using arithmetic
 * in the finite field F_p with p = 998244353 (primitive root g = 3).
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <string.h>

#define MOD 998244353ULL
#define PRIMITIVE_ROOT 3ULL
#define MAX_NTT_POWER 23 // 2^23 = 8,388,608

static inline uint64_t mod_add(uint64_t a, uint64_t b) {
    uint64_t res = a + b;
    return res >= MOD ? res - MOD : res;
}

static inline uint64_t mod_sub(uint64_t a, uint64_t b) {
    return a >= b ? a - b : a + MOD - b;
}

static inline uint64_t mod_mul(uint64_t a, uint64_t b) {
    return (a * b) % MOD;
}

static uint64_t mod_pow(uint64_t base, uint64_t exp) {
    uint64_t res = 1;
    base %= MOD;
    while (exp > 0) {
        if (exp & 1) res = mod_mul(res, base);
        base = mod_mul(base, base);
        exp >>= 1;
    }
    return res;
}

static inline uint64_t mod_inv(uint64_t n) {
    return mod_pow(n, MOD - 2);
}

static void bit_reverse_permute(uint32_t *a, size_t n) {
    size_t j = 0;
    for (size_t i = 1; i < n; i++) {
        size_t bit = n >> 1;
        for (; j & bit; bit >>= 1) {
            j ^= bit;
        }
        j ^= bit;
        if (i < j) {
            uint32_t tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
    }
}

/**
 * Radix-2 Cooley-Tukey NTT.
 * invert = false for forward NTT, true for inverse NTT.
 */
static void ntt(uint32_t *a, size_t n, bool invert) {
    bit_reverse_permute(a, n);

    for (size_t len = 2; len <= n; len <<= 1) {
        uint64_t wlen = mod_pow(PRIMITIVE_ROOT, (MOD - 1) / len);
        if (invert) {
            wlen = mod_inv(wlen);
        }

        for (size_t i = 0; i < n; i += len) {
            uint64_t w = 1;
            for (size_t j = 0; j < len / 2; j++) {
                uint64_t u = a[i + j];
                uint64_t v = mod_mul(a[i + j + len / 2], w);
                a[i + j] = (uint32_t)mod_add(u, v);
                a[i + j + len / 2] = (uint32_t)mod_sub(u, v);
                w = mod_mul(w, wlen);
            }
        }
    }

    if (invert) {
        uint64_t n_inv = mod_inv(n);
        for (size_t i = 0; i < n; i++) {
            a[i] = (uint32_t)mod_mul(a[i], n_inv);
        }
    }
}

/**
 * Sieve primes up to limit.
 * Returns uint8_t array where is_prime[x] = 1 if prime, 0 otherwise.
 */
static uint8_t *sieve_primes(size_t limit) {
    uint8_t *is_prime = (uint8_t *)malloc(limit + 1);
    if (!is_prime) return NULL;
    memset(is_prime, 1, limit + 1);
    is_prime[0] = is_prime[1] = 0;

    for (size_t p = 2; p * p <= limit; p++) {
        if (is_prime[p]) {
            for (size_t j = p * p; j <= limit; j += p) {
                is_prime[j] = 0;
            }
        }
    }
    return is_prime;
}

/**
 * Compute exact Goldbach decomposition counts k(N) for all even integers N <= max_N.
 * 
 * Parameters:
 *   max_N: upper bound on even integers N to compute
 *   k_out: preallocated output array of size (max_N + 1)
 * 
 * Returns:
 *   0 on success
 *   -1 if max_N is invalid or memory allocation fails
 */
int compute_goldbach_counts_ntt(uint32_t max_N, uint32_t *k_out) {
    if (max_N < 4) return -1;

    // Convolution size must be a power of 2 strictly greater than 2 * max_N
    // to prevent cyclic convolution wraparound.
    size_t ntt_size = 1;
    while (ntt_size <= 2 * max_N) {
        ntt_size <<= 1;
    }

    if (ntt_size > (1ULL << MAX_NTT_POWER)) {
        fprintf(stderr, "NTT size %zu exceeds maximum power of 2 for prime 998244353 (2^%d)\n",
                ntt_size, MAX_NTT_POWER);
        return -1;
    }

    uint8_t *is_prime = sieve_primes(max_N);
    if (!is_prime) return -1;

    uint32_t *a = (uint32_t *)calloc(ntt_size, sizeof(uint32_t));
    if (!a) {
        free(is_prime);
        return -1;
    }

    // Set indicator polynomial A(x) = sum_{p prime, p < max_N} x^p
    for (size_t p = 2; p <= max_N; p++) {
        if (is_prime[p]) {
            a[p] = 1;
        }
    }

    // Forward NTT
    ntt(a, ntt_size, false);

    // Pointwise square: A(x)^2 in F_p
    for (size_t i = 0; i < ntt_size; i++) {
        a[i] = (uint32_t)mod_mul(a[i], a[i]);
    }

    // Inverse NTT
    ntt(a, ntt_size, true);

    // Extract exact unordered counts k(N) for even N <= max_N
    memset(k_out, 0, (max_N + 1) * sizeof(uint32_t));

    for (uint32_t n = 4; n <= max_N; n += 2) {
        uint32_t ordered_count = a[n];
        uint32_t diagonal = ((n % 2 == 0) && is_prime[n / 2]) ? 1 : 0;
        k_out[n] = (ordered_count + diagonal) / 2;
    }

    free(a);
    free(is_prime);
    return 0;
}
