'use strict';

var exports = module.exports = {};

/* This function finds all prime numbers up to n using 2n log log n + cn + O(n / log n) arithmetic operations, where c is aproximately 1.14 */
exports.getPrimes = function(n)
{
  if (!Number.isInteger(n) || Math.sign(n) === -1 || n === 0) return false;

  const primes = [];
  const isComposite = Array(n + 1).fill(false);
  
  for(let i = 2; i <= n; i++) {
    
    if(!isComposite[i]) {
      primes.push(i);
 
      for(let j = i * i; j >= 0 && j <= n; j += i) {
        isComposite[j] = true;
      }
    }
  }
 
  return primes;
};
