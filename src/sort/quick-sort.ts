// Best case - array is not sorted -  O(n * log(n))
// Worst case - array is already sorted -  O(n^2)
export function quickSort<T extends string | number>(list: T[]): T[] {
  if (list.length <= 1) {
    return list;
  }

  const copiedList = list.slice();
  const pivotValue = copiedList.shift() as T;
  const smallerBucket: T[] = [];
  const largerBucket: T[] = [];
  const equalBucket: T[] = [pivotValue as T];

  while (copiedList.length) {
    const value = copiedList.shift() as T;

    if (value === pivotValue) {
      equalBucket.push(value);
    } else if (value < pivotValue) {
      smallerBucket.push(value);
    } else {
      largerBucket.push(value);
    }
  }

  return quickSort(smallerBucket).concat(equalBucket, quickSort(largerBucket));
}
