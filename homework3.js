// 1. Given an array. Determine whether it consists only from uniques or not.

function onlyUniques(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false; 
        }
      }
    }
    return true;
  }
  const arr = [1, 2, 3, 4, 5];
  console.log(onlyUniques(arr));

// 2. Given an array of numbers. Find the sum of prime numbers.
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function sumOfPrimes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumOfPrimes(numbers));

// 3. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
  function largestAdjacentProduct(arr) {
    if (arr.length < 2) {
      return false;
    }
  
    let maxProduct = arr[0] * arr[1];
  
    for (let i = 1; i <= arr.length; i++) {
      const currentProduct = arr[i] * arr[i + 1];
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
      }
    }
     return maxProduct;
  }
  const numbers = [2, 3, 4, 5, 6, 7, 8];
  console.log(largestAdjacentProduct(numbers));

// 4.  Given a sorted array and an element from that array. Find the index of that element using binary search. 

  function binarySearch(sortedArray, target) {
    let low = 0;
    let high = sortedArray.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (sortedArray[mid] === target) {
        return mid; 
      } else if (sortedArray[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetElement = 7;
  const resultIndex = binarySearch(sortedArray, targetElement);
  
  if (resultIndex !== -1) {
    console.log(resultIndex);
  } else {
    console.log(false);
  }