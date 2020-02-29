const { longestSubstring } = require('./longestSubstring');

describe('longestSubstring', () => {
  test('returns an empty string when s = ""', () => {
    expect(longestSubstring("")).toBe("");
  });

  test('returns "a" when s = "a"', () => {
    expect(longestSubstring("a")).toBe("a");
  });

  test('returns "a" when s = "aaaaa"', () => {
    expect(longestSubstring("aaaaa")).toBe("a");
  })
});