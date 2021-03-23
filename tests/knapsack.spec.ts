import { knapsack } from '../src/dynamic/knapsack/knapsack';
import { KnapsackItem } from '../src/dynamic/knapsack/knapsack-model';

describe('knapsack function', () => {
  it('should return the combination of items with the maximum value without exceeding capacity limit', () => {
    const items: KnapsackItem[] = [
      { name: '1', value: 20, weight: 1 },
      { name: '2', value: 5, weight: 2 },
      { name: '3', value: 10, weight: 3 },
      { name: '4', value: 40, weight: 8 },
      { name: '5', value: 15, weight: 7 },
      { name: '6', value: 25, weight: 4 },
    ];
    const weightCapacity = 10;
    const result = knapsack(items, weightCapacity);

    expect(result.value).toBe(60);
    expect(result.items.map((item) => item.name)).toEqual(['1', '4']);
  });
});
