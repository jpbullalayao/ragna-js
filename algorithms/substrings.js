/**
 * substrings
 * Generates all the possible substrings of "s" and
 * returns list of substrings.
 * 
 * @param {string} s
 * @return {string[]}
 */
export const substrings = (s) => {
  let substrs = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      substrs.push(s.substr(i, j));
    }
  }

  return substrs;
};
