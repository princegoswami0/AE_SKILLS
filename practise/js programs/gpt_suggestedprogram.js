// Reverse a string

str.split('').reverse().join('')


// Check palindrome

str === str.split('').reverse().join('')


// Reverse a number

parseInt(num.toString().split('').reverse().join(''))


// Find max / min in array

Math.max(...arr)
Math.min(...arr)


// Remove duplicates from array

[...new Set(arr);]; // Note: The semicolon is part of the correct syntax


// Find duplicate elements

arr.filter((v,i,a)=>a.indexOf(v)!==i)

