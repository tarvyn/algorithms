import { fibonacci } from '../src/math/fibonacci';
import { isPrime } from '../src/math/is-prime';
import { isPowerOfTwo } from '../src/math/is-power-of-two';
import { factorial } from '../src/math/factorial';

describe('Math algorithms', () => {
  describe('fibonacci function', () => {
    it('should return the value from Fibonacci sequence by given index', () => {
      expect(fibonacci(0)).toBe(1);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(2);
      expect(fibonacci(3)).toBe(3);
      expect(fibonacci(4)).toBe(5);
      expect(fibonacci(5)).toBe(8);
    });
  });

  describe('isPrime function', () => {
    it('should return whether the given number is prime', () => {
      expect(isPrime(1)).toBeTruthy();
      expect(isPrime(2)).toBeTruthy();
      expect(isPrime(3)).toBeTruthy();
      expect(isPrime(4)).toBeFalsy();
      expect(isPrime(5)).toBeTruthy();
      expect(isPrime(6)).toBeFalsy();
      expect(isPrime(7)).toBeTruthy();
      expect(isPrime(8)).toBeFalsy();
      expect(isPrime(9)).toBeFalsy();
      expect(isPrime(10)).toBeFalsy();
      expect(isPrime(11)).toBeTruthy();
    });
  });

  describe('isPowerOfTwo function', () => {
    it('should return whether the given number is power of two', () => {
      expect(isPowerOfTwo(2)).toBeTruthy();
      expect(isPowerOfTwo(4)).toBeTruthy();
      expect(isPowerOfTwo(8)).toBeTruthy();
      expect(isPowerOfTwo(15)).toBeFalsy();
    });
  });

  describe('factorial function', () => {
    it('should return factorial of the given number', () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });
  });
});
