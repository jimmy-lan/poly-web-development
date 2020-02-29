const { multiply, sumArrays } = require('./index');

describe('multiply two numbers by using multiply function', () => {
  test('multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test('multiplies 0 * 800 to equal 0', () => {
    expect(multiply(0, 800)).toBe(0);
  });
  
  test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  })
});

describe('sum two arrays by using sumArrays function', () => {
  test('sums [] and []', () => {
    expect(sumArrays([], [])).toEqual([]);
  });

  test('sums [5] and [8]', () => {
    expect(sumArrays([5], [8])).toEqual([13]);
  })

  test('sums [1, 3, 5] and [2, 4, 6]', () => {
    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
    let expectation = [3, 7, 11];
    expect(sumArrays(arr1, arr2)).toEqual(expectation);
  });

  test('sums [] and [1, 2, 3]', () => {
    expect(sumArrays([], [1, 2, 3])).toEqual([]);
  });

  test('sums [1, 3, 5] and [9, 9, 8, 7, 9]', () => {
    let arr1 = [1, 3, 5];
    let arr2 = [9, 9, 8, 7, 9];
    let expectation = [10, 12, 13];
    expect(sumArrays(arr1, arr2)).toEqual(expectation);
  })
});
