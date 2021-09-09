/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function getGCD(a,b){
  while (b !== 0)
    [a, b] = [b, a % b];
  return a;
}

function getLCM(a,b){
  if(Math.abs(b-a) == 1) return a * b;
  return b / getGCD(a,b) * a;
}

function smallestCommons(arr) {
  let a = Math.min(...arr);
  let b = Math.max(...arr);
  if ((b-a)==1) return getLCM(a, b);
  else{
    return getLCM(a, smallestCommons([a+1,b]));
  }
}

console.log(smallestCommons([2,5]));