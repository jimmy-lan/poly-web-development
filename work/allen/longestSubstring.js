/*
* This file contains a problem that is slightly more difficult compared to 
* twoSum. This problem is *optional* for this week and will be discussed
* during our third meeting. You may attempt the problem before the meeting.
*/

/**
 * Return the length of the longest substring without repeating characters
 * in s.
 * 
 * Example: s = "abcabcbb", the function should return 3 since the
 * required substring is "abc"
 * Example: s = "bbb", the function should return 1 since the required substring
 * is "b"
 * Example: s = "ututt", the function should return 2 since the required
 * substring is "ut"
 * 
 * Requirement: This algorithm should run in O(n) time.
 * Hint: Try to come up with an algorithm that does this in O(n^2) time,
 * then think about ways to optimize it.
 */
exports.longestSubstring = (s) => {
    
    let hash = {};
    let j = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++){
        let current = hash[s[i]]
        if (current != undefined && j <= current ){
            j = current + 1
        }
        else
            maxLen = Math.max(maxLen, i - j + 1 )

        hash[s[i]] = i
    }
    return maxLen
}
