// 1. Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.

// function invertObject(obj) {
//     let invertedObject = {};

//     for (let key in obj) {
//       let value = obj[key];

//       if (invertedObject[value] === undefined) {
//         invertedObject[value] = key;
//       } else {
//         if (Array.isArray(invertedObject[value])) {
//           invertedObject[value].push(key);
//         } else {
//           invertedObject[value] = [invertedObject[value], key];
//         }
//       }
//     }

//     return invertedObject;
//   }
//   const originalObject = { a: 1, b: 2, c: 1, d: 3, e: 2 };

//   const invertedObject = invertObject(originalObject);

//   console.log(invertedObject);


// 2. Given two objects. Write a function that performs shallow compare.

// function shallowCompare(obj1, obj2) {
//     if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
//       return false;
//     }
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
//     for (let key of keys1) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   const objA = { a: 1 }
//   const objB = { a: 1, b: 2 }
//   console.log(shallowCompare(objA, objB)); 


// 3. Check whether string is palindrome, or not.

// function isSymmetric(str) {
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
//         if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
//             return false; 
//         }
//     }
//       return true; 
// }

// let symmetricString = "abba";
// console.log(isSymmetric(symmetricString)); 



// 4.Given an array of integers. All numbers are unique. Find the count of missing numbers
//between minimum and maximum elements to make integers sequence.

// function countMissingNumbers(arr) {
//     if (arr.length <= 1) {
//         return 0;
//     }
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const expectedLength = max - min + 1;
//     const actualLength = arr.length;
//     const missingCount = expectedLength - actualLength;
//     return missingCount;
// }
// const array1 = [1, 3, 5, 6, 8];
// const array2 = [10, 12, 15, 18];
// console.log(countMissingNumbers(array1));
// console.log(countMissingNumbers(array2));


//5. Given an array and element. Check if that element exists in array.

// function doesElementExist(array, element) {
//     return array.includes(element);
//   }
//   const myArray = [1, 2, 3, 4, 5];
//   const searchElement = 3;
//   console.log(doesElementExist(myArray, searchElement)); 
  
