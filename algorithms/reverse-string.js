/**
 * reverseString
 * Given a string s, this returns a reversed version of s
 *
 * @param {string} s
 * @return {string}
 */
export const reverseString = (s) => {
  let firstHalf = '';
  let secondHalf = '';

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const secondChar = s[s.length - i - 1];
    firstHalf = firstHalf + secondChar; // c
    secondHalf = s[i] + secondHalf; // a
  }
  
  // s is an odd length, so tack on the middle character
  if (s.length % 2 !== 0) {
    firstHalf = firstHalf + s[Math.floor(s.length / 2)]
  }

  return firstHalf + secondHalf;
}
