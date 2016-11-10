'use strict';

const reverseNum = function (num) {
  num = num + '';
  return Number(num.split('').reverse().join(''));
};

const reverseString = function (str) {
  // Step 1. Use the split() method to return a new array
  let splitString = str.split('');

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse();

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join('');

  //Step 4. Return the reversed string
  return joinArray;
};

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively

const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  let total = 0;

  // Declare an array to hold all palindrome numbers from 1 to upperLimit.
  let palinInt = [];

  // For all numbers from 1 to upperLimit
  for (let i = 1; i < upperLimit; i++) {

    // Check if number and reverse of number are equal
    if (i === reverseNum(i)) {

      // if number and reverse are equal, push into array. Now array has only
      // palindromes of base10
      palinInt.push(i);
    }
  }

  // Declare an array to hold the binaries of all palindromes of base10.
  let binArr = [];

  // For all palindrome numbers in the array
  for (let i = 0; i < palinInt.length; i++) {

    // convert them into binary
    let bin = palinInt[i].toString(2);

    // store them in array binArr. Now array has binaries of palindrome numbers.
    binArr.push(bin);
  }

  // Declare an array to hold the binaries of all palindromes of base2
  let palinBin = [];

  // For all binary numbers of palindromes of base10
  for (let i = 0; i < binArr.length; i++) {

    // check if binaries are palindromes
    if (binArr[i] === reverseString(binArr[i])) {

      // store them in array palinBin. Now array has palindromes of base2.
      palinBin.push(binArr[i]);
    }
  }

  // Declare an array to hold the base10 of base2 pailindromes.
  let arrInt = [];

  // For all base2 palindromes
  for (let i = 0; i < palinBin.length; i++) {

    // Convert them into base10 and save in array
    arrInt[i] = parseInt(palinBin[i], 2);

    // Sum the elements in the array
    total += arrInt[i];
  }

  return total;
};

module.exports = {
  doubleBasePalindromeSum,
};
