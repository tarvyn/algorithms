// O(n^2)
export function bubbleSort<T extends string | number>(list: T[]): T[] {
  const resultList = list.slice();

  for (let outerIndex = 0; outerIndex < resultList.length; outerIndex++) {
    let outerElement = resultList[outerIndex];

    for (let innerIndex = outerIndex + 1; innerIndex < resultList.length; innerIndex++) {
      let innerElement = resultList[innerIndex];

      if (outerElement > innerElement) {
        resultList[outerIndex] = innerElement;
        resultList[innerIndex] = outerElement;

        outerElement = resultList[outerIndex];
        innerElement = resultList[innerIndex];
      }
    }
  }

  return resultList;
}
