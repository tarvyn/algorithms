// O(n * log(n)) for best and worst case
export function mergeSort<T extends string | number>(list: T[]): T[] {
  if (list.length <= 1) {
    return list;
  }

  if (list.length === 2) {
    const [first, second] = list;

    return first > second ? [second, first] : list;
  }

  const middleIndex = Math.floor(list.length / 2);
  const leftList = list.slice(0, middleIndex);
  const rightList = list.slice(middleIndex);

  const leftSortedList = mergeSort(leftList);
  const rightSortedList = mergeSort(rightList);

  const mergedList = [];
  let leftListIndex = 0;
  let rightListIndex = 0;

  while (leftListIndex < leftSortedList.length || rightListIndex < rightSortedList.length) {
    if (leftListIndex >= leftSortedList.length || leftSortedList[leftListIndex] > rightSortedList[rightListIndex]) {
      mergedList.push(rightSortedList[rightListIndex]);
      rightListIndex++;
    } else {
      mergedList.push(leftSortedList[leftListIndex]);
      leftListIndex++;
    }
  }

  return mergedList;
}
