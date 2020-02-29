const { twoSum } = require('./twoSum');

describe('twoSum', () => {
  test('returns true for [1, 2, 3, 4, 5] with target 8', () => {
    expect(twoSum([1, 2, 3, 4, 5], 8)).toBeTruthy();
  });

  test('returns false for [1, 2, 3, 4, 5] with target 2', () => {
    expect(twoSum([1, 2, 3, 4, 5], 2)).toBeFalsy();
  });

  test('returns false for [2, 4, 1] with target 9', () => {
    expect(twoSum([2, 4, 1], 9)).toBeFalsy();
  });

  test('returns true for [-3, -1, -9, -8, -3] with target -10', () => {
    expect(twoSum([-3, -1, -9, -8, -3])).toBeTruthy();
  });

  test('returns false for [] with target 0', () => {
    expect(twoSum([], 0)).toBeFalsy();
  });

  test('returns false for [8] with target 8', () => {
    expect(twoSum([8], 8)).toBeFalsy();
  });
});