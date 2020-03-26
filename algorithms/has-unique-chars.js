/**
 * hasUniqueChars
 * Given a string 's', this function determines if all the characters in this
 * string are unique (i.e. no duplicate characters).
 * 
 * @param {string} s
 * @return {boolean}
 */
export const hasUniqueChars = (s) => {
  if (!s || s.length === 0) {
    return false;
  }

  const dict = {};

  for (let char of s) {
    if (dict[char]) {
      return false;
    }

    dict[char] = 1;
  }

  return true;
}
