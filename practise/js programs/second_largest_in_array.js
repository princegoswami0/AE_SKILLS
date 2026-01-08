function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least 2 elements";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity
    ? "No second largest value"
    : secondLargest;
}

// Test
console.log(secondLargest([10, 5, 20, 8, 20]));
