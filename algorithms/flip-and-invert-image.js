/**
 * flipAndInvertImage
 * Takes in a matrix of 0s and 1s, and flips each entry horizontally and vertically.
 *
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
  for (let i = 0; i < A.length; i++) {
    let item = A[i];
    
    for (let j = 0; j < item.length / 2; j++) {
      const firstValue = item[j];
      item[j] = item[item.length - j - 1];
      item[item.length - j - 1] = firstValue;
    }
    
    for (let k = 0; k < item.length; k++) {
      if (item[k] === 0) {
        A[i][k] = 1;
      } else {
        A[i][k] = 0;
      }
    }
  }
    
  return A;
};