// O(log(n))

export function isPowerOfTwo(value: number): boolean {
  if (value === 2) {
    return true;
  }

  if (value % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(value / 2);
}

// O(1)
// export function isPowerOfTwo(value: number): boolean {
//   return (value & (value - 1)) === 0;
// }
