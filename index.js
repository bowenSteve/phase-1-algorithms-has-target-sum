function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length; j++) {
          if (i !== j) { 
              let sum = array[i] + array[j];
              if(sum === target) {
                  return true;
              }
          }
      }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  The function uses a quadratic time complexity. This is because there are two nested 
  loops iterating through the array, resulting in a quadratic time complexity.
*/

/* 
  iterate through the array twice, while adding the elements.
  if a pair adds up to the target, then it should return true, otherwise it returns false
 */

/*
   It iterates through each element of the array twice, attempting to find a pair of numbers 
  whose sum equals the target. If such a pair is found, the function returns true; otherwise, 
  it returns false after checking all possible pairs.
  It ensures that it does not add the same element to itself by excluding cases where the indices of 
  the array elements are equal.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
