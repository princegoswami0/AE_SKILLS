// Program: Analyze Numbers in an Array
// Tasks:
// 1. Remove duplicates
// 2. Count frequency
// 3. Find largest & smallest
// 4. Sort ascending & descending

function analyzeArray(arr) {
  // Remove duplicates
  const uniqueArray = [...new Set(arr)];

  // Frequency count
  const frequency = {};
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Find max & min
  let max = arr[0];
  let min = arr[0];

  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  // Sorting
  const ascending = [...uniqueArray].sort((a, b) => a - b);
  const descending = [...uniqueArray].sort((a, b) => b - a);

  return {
    originalArray: arr,
    uniqueArray,
    frequency,
    max,
    min,
    ascending,
    descending
  };
}

// Testing
const numbers = [2, 4, 5, 2, 7, 4, 9, 1, 5, 9];
console.log(analyzeArray(numbers));
