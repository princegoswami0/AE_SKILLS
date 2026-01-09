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

// Closure example

function outer(){
  let x=10
  return ()=>x++
}


// Currying

const add=a=>b=>a+b


// Debounce

function debounce(fn,delay){
 let t
 return (...a)=>{
  clearTimeout(t)
  t=setTimeout(()=>fn(...a),delay)
 }
}


// Throttle

function throttle(fn,delay){
 let flag=true
 return (...a)=>{
  if(flag){
   fn(...a)
   flag=false
   setTimeout(()=>flag=true,delay)
  }
 }
}

// ⏳ ASYNC (VERY IMPORTANT)

// Promise example

new Promise((res,rej)=>res("done"))


Async/Await

async function f(){
 const r=await fetch(url)
}


// Promise.all

Promise.all([p1,p2,p3])

// 🧩 OBJECT & THIS

// Deep copy object

JSON.parse(JSON.stringify(obj))


// this keyword example

obj.method.call(otherObj)


// Bind / Call / Apply

fn.call(obj,a,b)
fn.apply(obj,[a,b])
fn.bind(obj)