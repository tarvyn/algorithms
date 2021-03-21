// O(2^n)
export function fibonacciRecursive(value: number): number {
  if (value <= 1) {
    return 1;
  }

  return fibonacci(value - 1) + fibonacci(value - 2);
}

// O(n)
export function fibonacci(n: number): number {
  const sequence = [1, 1];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence[n];
}
