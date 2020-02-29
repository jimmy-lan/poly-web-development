const { longestSubstring } = require('./longestSubstring');

describe('longestSubstring', () => {
  test('returns 0 when s is an empty string', () => {
    expect(longestSubstring("")).toBe(0);
  });

  test('returns 1 when s = "a"', () => {
    expect(longestSubstring("a")).toBe(1);
  });

  test('returns 1 when s = "aaaaa"', () => {
    expect(longestSubstring("aaaaa")).toBe(1);
  });

  test('returns "3 when s = "babcbabb"', () => {
    expect(longestSubstring("babcbabb")).toBe(3);
  });

  test('returns 5 when s = "abcbxyzrx"', () => {
    expect(longestSubstring("abcbxyzrx")).toBe(5);
  });

  test('returns 2 when s = "bbbbbab"', () => {
    expect(longestSubstring("bbbbbab")).toBe(2);
  })
});