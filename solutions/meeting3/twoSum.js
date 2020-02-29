
/**
 * Return true if there exists two elements in arr that sums up
 * to target.
 * 
 * Example: arr = [5, 6, 4, 4] target = 8 => return true since 4 + 4 = 8
 * Example: arr = [5, 6, 4, 4] target = 4 => return false since no two elements
 * in arr sum up to 4
 * 
 * Requirement: The expected running time of your algorithm should be O(n)
 * 
 */
exports.twoSum = (arr=[], target=0) => {
  if (arr.length < 2) return false;

  /* idea: traverse through arr and see if I have seen (target) - (current element)
  before. If I have seen it, we know (target) - (current element) + (current element)
  equals target, so return true. Otherwise, record the current element.
  The key here is that we need a data structure that performs insert and lookup in 
  constant time. A hash table is a good choice. Note that there are other 
  implementations of this problem as well.
  */
  let seenElements = {};
  for (el of arr) {
    if (seenElements[target-el]) {
      return true;
    }
    seenElements[el] = true;
  }
  return false;
}
