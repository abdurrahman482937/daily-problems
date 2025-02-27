// 1. Palindrome Checker
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (str === rev) {
    return true;
  } else {
    return false;
  }
  // return str === str.split("").reverse().join(""); //   1 line
}
console.log(isPalindrome("lool"));

// 2. Fibonacci Sequence Generator
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;

  // // // wrong code ❌
  //   let num1 = 0,
  //     num2 = 1,
  //     sum;
  //   if (n == 0) {
  //     return num1;
  //   } else if (n == 1) {
  //     return num2;
  //   } else {
  //     for (let i = 3; i <= n; i++) {
  //       sum = num1 + num2;
  //       num1 = num2;
  //       num2 = sum;
  //     }
  //     return num2;
  //   }
}
console.log(fibonacci(10));

// 3. Factorial Calculator
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;

  // // // simple
  //   if (n <= 1) return 1;
  //   return n * factorial(n - 1);
}
console.log(factorial(3));

// 4. Array Sum
function arraySum(arr) {
  function reduceFunc(a, b) {
    return a + b;
  }
  return arr.reduce(reduceFunc);
}
console.log(arraySum([1, 2, 3, 4, 5, 6, 7]));

// 5. Reverse Words in a Sentence
function reverseWords(s) {
  return s
    .split(" ")
    .map((ss) => ss.split("").reverse().join(""))
    .join(" ");

  // // // wrong code ❌
  //   let words = s.split("").filter((word) => word);
  //   words.reverse();
  //   return words.join("");
}
console.log(reverseWords("my name is abdurrahman!"));
