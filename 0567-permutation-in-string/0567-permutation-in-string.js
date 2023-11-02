// Time Complexity: O(N) N is the input size of s2
// Space Complexity O(K) K is the input size of s1 (necessary to build our frequency map)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const frequencyMap = new Map();

  // build a frequency hashmap of our permutation string
  // this map will includes the number of occurances for each of the chars
  // that we will need to find a valid permutation
  for (let char of s1) {
    if (!frequencyMap.has(char)) frequencyMap.set(char, 0);
    frequencyMap.set(char, frequencyMap.get(char) + 1);
  }

  // to avoid iterating over the frequencyMap ( O(K) time complexity ) we keep track of
  // all the characters we've found through an integer variable `match`, which allows us to
  // do a lookup in O(1) Time every time we want to check if we've got a valid
  // permutation in our window
  let match = 0;

  // our pointers
  let left = 0;
  let right = 0;

  // fixed sliding window size
  let windowSize = s1.length;

  while (right < s2.length) {
    // current character
    let char = s2[right];

    // we check if the char belongs to our frequency map i.e. if
    // it's a character we need for our string
    if (frequencyMap.has(char)) {
      // if it is, we reduce the count in the frequency,
      // meaning we have one less occurrance to find of that character
      frequencyMap.set(char, frequencyMap.get(char) - 1);

      // if the count of the frequency has reached 0,
      // it means we've completed a match for that character, and we can
      // update our match
      if (frequencyMap.get(char) === 0) {
        match++;

        // last, we check if we as many matches, as the number of char we need in our frequency
        if (match === frequencyMap.size) {
          // if we do, we've found a valid permutation
          return true;
        }
      }
    }

    // we want to start checking for the permutation only
    // once we have a window of the correct size
    if (right - left + 1 === windowSize) {
      const leftChar = s2[left];

      if (frequencyMap.has(leftChar)) {
        // remove left char from the freq map
        const currentFreq = frequencyMap.get(leftChar);

        // if frequency of the character we're removing was 0,
        // it means we will lose a match and we need to update our variable
        if (currentFreq === 0) match--;

        // increment the frequency as we will need a new occurance of that character to complete
        // our window
        frequencyMap.set(leftChar, currentFreq + 1);
      }

      // slide window
      right++;
      left++;
    } else {
      // if our window is not yet expanded, we move only the right pointer
      right++;
    }
  }

  // if we run through all the string without finding a permutation,
  // we can return false
  return false;
};