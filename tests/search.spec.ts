import {
  findIndexBinary,
  findIndexBinaryRecursively,
} from '../src/search/binary-search';

describe('Search algorithms', () => {
  describe('binary search', () => {
    it('should find given element index by binary search', () => {
      const list = [1, 4, 12, 23, 25, 37, 39, 42, 46, 52];

      expect(findIndexBinary(list, list[0])).toBe(0);
      expect(findIndexBinary(list, list[1])).toBe(1);
      expect(findIndexBinary(list, list[2])).toBe(2);
      expect(findIndexBinary(list, list[3])).toBe(3);
      expect(findIndexBinary(list, list[4])).toBe(4);
      expect(findIndexBinary(list, list[5])).toBe(5);
      expect(findIndexBinary(list, list[6])).toBe(6);
      expect(findIndexBinary(list, list[7])).toBe(7);
      expect(findIndexBinary(list, list[8])).toBe(8);
      expect(findIndexBinary(list, list[9])).toBe(9);
      expect(findIndexBinary(list, 13)).toBe(-1);
    });

    it('should find given element index by binary search', () => {
      const list = [1, 4, 12, 23, 25, 37, 39, 42, 46, 52];

      expect(findIndexBinaryRecursively(list, list[0])).toBe(0);
      expect(findIndexBinaryRecursively(list, list[1])).toBe(1);
      expect(findIndexBinaryRecursively(list, list[2])).toBe(2);
      expect(findIndexBinaryRecursively(list, list[3])).toBe(3);
      expect(findIndexBinaryRecursively(list, list[4])).toBe(4);
      expect(findIndexBinaryRecursively(list, list[5])).toBe(5);
      expect(findIndexBinaryRecursively(list, list[6])).toBe(6);
      expect(findIndexBinaryRecursively(list, list[7])).toBe(7);
      expect(findIndexBinaryRecursively(list, list[8])).toBe(8);
      expect(findIndexBinaryRecursively(list, list[9])).toBe(9);
      expect(findIndexBinaryRecursively(list, 13)).toBe(-1);
    });
  });
});
