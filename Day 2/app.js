// 1️⃣ Reverse a String
function reverseString(text) {
  console.log(text.split("").reverse().join(""));
}
reverseString("hello");

// 2️⃣ Find Maximum Number
function maximumNumber1(arr) {
  console.log(Math.max(...arr));
}
maximumNumber1([1, 2, 4, 3, 9, 5, 8, 6, 7]);

function maximumNumber2(arr) {
  let max = arr[0];
  arr.filter((num) => {
    if (num > max) {
      max = arr;
    }
  });
}
maximumNumber2([1, 2, 4, 3, 9, 5, 8, 6, 7]);

// 3️⃣ Count Vowels in a String
function vowelsCount(text) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const element of text) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  console.log(count);
}
vowelsCount("abdurrahmanwithraisa");

// 4️⃣ Remove Duplicates from an Array
function duplicatesRemove(array) {
  const checked = [...new Set(array)];
  console.log(checked);
}
duplicatesRemove([1, 2, 3, 3, 4, 3, 5, 5, 6, 7]);

// 5️⃣ Title Case a Sentence
function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(titleCase("abdurrahman with raisa"));
