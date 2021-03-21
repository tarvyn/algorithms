import { bubbleSort } from '../src/sort/bubble-sort';
import { quickSort } from '../src/sort/quick-sort';
import { mergeSort } from '../src/sort/merge-sort';

const sortedList = [1, 4, 12, 23, 23, 25, 37, 39, 42, 46, 52];
const unsortedList = [
  sortedList[3],
  sortedList[10],
  sortedList[2],
  sortedList[1],
  sortedList[9],
  sortedList[5],
  sortedList[7],
  sortedList[6],
  sortedList[0],
  sortedList[8],
  sortedList[4],
];

describe('Soring algorithms', () => {
  describe('bubble sort', () => {
    it('should sort array of numbers with bubble sort algorithm', () => {
      expect(bubbleSort(unsortedList)).toEqual(sortedList);
    });
  });

  describe('quick sort', () => {
    it('should sort array of numbers with quick sort algorithm', () => {
      expect(quickSort(unsortedList)).toEqual(sortedList);
    });
  });

  describe('merge sort', () => {
    it('should sort array of numbers with merge sort algorithm', () => {
      expect(mergeSort(unsortedList)).toEqual(sortedList);
    });
  });
});
