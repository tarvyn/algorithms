import {
  computeChange,
  computeChangeBruteForce,
} from '../src/greedy/compute-change';

describe('computeChange function', () => {
  it('should return the combination of coins to create a change with less possible amount of coins', () => {
    const availableCoins = [100, 50, 20, 10, 5, 2, 1];
    const targetAmount = 129;
    const result = computeChange(availableCoins, targetAmount);

    expect(result.get(100)).toBe(1);
    expect(result.get(20)).toBe(1);
    expect(result.get(5)).toBe(1);
    expect(result.get(2)).toBe(2);
  });

  it('should return the combination of coins to create a change with less possible amount of coins', () => {
    const availableCoins = [8, 6, 5, 1];
    const targetAmount = 11;
    const result = computeChangeBruteForce(availableCoins, targetAmount);

    expect(result.get(6)).toBe(1);
    expect(result.get(5)).toBe(1);
  });
});
