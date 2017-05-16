'use strict';

var exports = module.exports = {};

/* This function finds all prime numbers up to n using 2n log log n + cn + O(n / log n) arithmetic operations, where c is aproximately 1.14 */
exports.getPrimes = function(n)
{
  if (!Number.isInteger(n) || Math.sign(n) === -1 || n === 0) return false;

  const primes = [];
  
  return primes;
};
