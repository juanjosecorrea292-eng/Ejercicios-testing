const { factorial, isPrime, clamp } = require('../src/numberutils');

describe('NumberUtils', () => {
  test('factorial de 5 es 120 y de 0 es 1', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
  });

  test('isPrime identifica correctamente números primos', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);
  });

  test('clamp limita los valores en los rangos', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(15, 1, 10)).toBe(10);
  });
});