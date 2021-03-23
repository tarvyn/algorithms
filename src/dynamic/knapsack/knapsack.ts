import {Knapsack, KnapsackItem} from "./knapsack-model";

// Time complexity without memoization: O(2^n)
// Time complexity with memoization: O(n*c)
function knapsackFn(items: KnapsackItem[], capacity: number, itemIndex: number, memo: Knapsack[][]): Knapsack {
    if (memo[capacity][itemIndex]) {
        return memo[capacity][itemIndex];
    }

    if (itemIndex < 0 || capacity === 0) {
        return { items: [], value: 0, weight: 0 };
    }

    if (capacity < items[itemIndex].weight) {
        return knapsackFn(items, capacity, itemIndex - 1, memo);
    }

    const sackWithItem = knapsackFn(items, capacity - items[itemIndex].weight, itemIndex - 1, memo);
    const sackWithoutItem = knapsackFn(items, capacity, itemIndex - 1, memo);

    const valueWithItem = sackWithItem.value + items[itemIndex].value;
    const valueWithoutItem = sackWithoutItem.value;

    let resultSack: Knapsack;

    if (valueWithItem > valueWithoutItem) {
        resultSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: valueWithItem,
            weight: items[itemIndex].weight + items[itemIndex].weight
        };
    } else {
        resultSack = sackWithoutItem;
    }

    memo[capacity][itemIndex] = resultSack;

    return resultSack;
}

export function knapsack(items: KnapsackItem[], capacity: number): Knapsack {
    const memo: Knapsack[][] = Array.from(Array(capacity + 1), () => Array(items.length).fill(null));

    return knapsackFn(items, capacity, items.length - 1, memo);
}
