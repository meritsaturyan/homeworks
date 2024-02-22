// 1. Given a number. Write a recursive function that reverse the number. Return the new number.


function reverseNumber(number, reversed = 0) {
    if (number === 0) {
        return reversed;
    }
    const lastDigit = number % 10;
    const remainingNumber = Math.floor(number / 10);
    const result = reversed * 10 + lastDigit;
    return reverseNumber(remainingNumber, result);
}
const inputNumber = 12345;
const reversedNumber = reverseNumber(inputNumber);
console.log(reversedNumber);

// 2. Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two.

function findSecondOccurrence(arr, target, index = 0, firstOccurrenceFound = false) {
    if (index === arr.length) {
        return -1;
    }
    if (arr[index] === target) {
        if (firstOccurrenceFound) {
            return index;
        } else {
            return findSecondOccurrence(arr, target, index + 1, true);
        }
    }
    return findSecondOccurrence(arr, target, index + 1, firstOccurrenceFound);
}
const array = [8, 8, 4, 0, 8, 0, 0, 0, 4];
const targetNumber = 8;
const secondOccurrenceIndex = findSecondOccurrence(array, targetNumber);

if (secondOccurrenceIndex !== -1) {
    console.log(secondOccurrenceIndex);
} else {
    console.log(targetNumber, "not found");
}

// 3. Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use str.substring(startIndex, endIndex),
// str.substr(startIndex, length) )

function countSubstring(str, substring, startIndex = 0, count = 0) {
    if (startIndex + substring.length > str.length) {
        return count;
    }
    const currentSubstring = str.substring(startIndex, startIndex + substring.length);
    if (currentSubstring === substring) {
        count++;
    }
    return countSubstring(str, substring, startIndex + 1, count);
}

const mainString = "Are var far shared?";
const subString = "ar";
const occurrences = countSubstring(mainString, subString);

console.log(occurrences);

// 4. Given a string, compute recursively (no loops) a new string where all appearances of "pi"
// have been replaced by "3.14".

function replacePi(str) {
    if (str.length === 0 || !str.includes("pi")) {
        return str;
    }
    const index = str.indexOf("pi");
    const replacedString = str.substring(0, index) + "3.14" + str.substring(index + 2);
    return replacePi(replacedString);
}
const originalString = "picturespicturespictures";
const modifiedString = replacePi(originalString);

console.log(modifiedString);

// 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function flattenArray(arr) {
    let flattened = [];

    function flattenHelper(currentArr) {
        for (let i = 0; i < currentArr.length; i++) {
            if (Array.isArray(currentArr[i])) {
                flattenHelper(currentArr[i]);
            } else {
                flattened.push(currentArr[i]);
            }
        }
    }
    flattenHelper(arr);
    return flattened;
}
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

// 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumOfDigits(number) {
    if (number < 10) {
        return number;
    }
    let digitSum = 0;
    let tempNumber = number;
    while (tempNumber > 0) {
        digitSum += tempNumber % 10;
        tempNumber = Math.floor(tempNumber / 10);
    }
    return sumOfDigits(digitSum);
}
const inputNumber = 14;
const result = sumOfDigits(inputNumber);
console.log(result);