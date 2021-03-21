export function findIndexBinary(sortedList: number[], value: number): number {
  let startIndex = 0;
  let endIndex = sortedList.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (value === sortedList[middleIndex]) {
      return middleIndex;
    }

    if (value > sortedList[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

export function findIndexBinaryRecursively(sortedList: number[], value: number, offset = 0): number {
  let startIndex = 0;
  let endIndex = sortedList.length - 1;
  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (value === sortedList[middleIndex]) {
    return middleIndex + offset;
  }

  if (sortedList.length === 1) {
    return -1;
  }

  if (value > sortedList[middleIndex]) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }

  return findIndexBinaryRecursively(sortedList.slice(startIndex, endIndex + 1), value, offset);
}
