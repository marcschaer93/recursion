/** product: calculate the product of an array of numbers. */

// VERSION 1
// Runtime O(nˆ2) ---> making everytime a new array with slice method
// function product(nums) {
//   // Base Case
//   if (nums.length === 0) return 1;
//   return nums[0] * product(nums.slice(1));
// }

// VERSION 2
// Runtime O(n)
function product(nums, i = 0) {
  if (nums.length === i) return 1;
  return nums[i] * product(nums, i + 1);
}

product([2, 3, 4]); // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestSoFar = 0) {
  if (i === words.length) return longestSoFar;
  longestSoFar = Math.max(words[i].length, longestSoFar);
  return longest(words, i + 1, longestSoFar);
}
longest(["hello", "hi", "hola"]); // 5

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newString = "") {
  if (i >= str.length) return newString;
  newString += str[i];
  return everyOther(str, i + 2, newString);
}
everyOther("hello"); // "hlo"

/** isPalindrome: checks whether a string is a palindrome or not. */
// racecar
function isPalindrome(str, i = 0) {
  let leftIndex = i;
  let rightIndex = str.length - 1 - i;
  if (str[leftIndex] !== str[rightIndex]) return false;
  if (leftIndex >= rightIndex) return true;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i;
  if (i === arr.length) return -1;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, revStr = "") {
  revStr += str[str.length - 1 - i];
  if (revStr.length === str.length) return revStr;
  return revString(str, i + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === val) return middle;

  if (arr[middle] > val) return binarySearch(arr, val, start, middle - 1);

  return binarySearch(arr, val, middle + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
