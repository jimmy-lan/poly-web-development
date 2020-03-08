const { sliceString, sliceArray } = require('./slicing');

describe('slice string correctly', () => {
  test('returns "" if s = ""', () => {
    expect(sliceString("")).toBe("");
  });

  test('returns "cat" if s = "cat"', () => {
    expect(sliceString("cat")).toBe("cat");
  });

  test('returns "hello" if s = "hello"', () => {
    expect(sliceString("hello")).toBe("hello");
  });

  test('returns "hello" if s = "hello world"', () => {
    expect(sliceString("hello world")).toBe("hello");
  });

  test('returns "winte" if s = "winter"', () => {
    expect(sliceString("winter")).toBe("winte");
  });
});

describe('slice array correctly', () => {
  test('returns [] if arr=[]', () => {
    expect(sliceArray([])).toEqual([]);
  });

  test('returns [] if arr=[1]', () => {
    expect(sliceArray([1])).toEqual([]);
  });

  test('returns [] if arr=[1, 2, 3]', () => {
    expect(sliceArray([1, 2, 3])).toEqual([]);
  });

  test('returns [] if arr=[1, 2, 3, 4]', () => {
    expect(sliceArray([1, 2, 3, 4])).toEqual([]);
  });

  test('returns [3, 4, 5, 6] if arr=[1, 2, 3, 4, 5, 6]', () => {
    expect(sliceArray([1, 2, 3, 4, 5, 6])).toEqual([3, 4, 5, 6]);
  });

  test('returns [4, 7, 8, 0] if arr=[9, 1, 4, 7, 8, 0]', () => {
    expect(sliceArray([9, 1, 4, 7, 8, 0])).toEqual([4, 7, 8, 0]);
  });

  test('returns [4, 7, 8, 0] if arr=[9, 1, 4, 7, 8, 0, 5]', () => {
    expect(sliceArray([9, 1, 4, 7, 8, 0, 5])).toEqual([4, 7, 8, 0]);
  });
});
