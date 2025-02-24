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
    if(text === 'a', 'e', 'i', 'o', 'u' ) {
        console.log(text)
    }
}
vowelsCount('Raisa')

// 4️⃣ Remove Duplicates from an Array
function duplicatesRemove() {}

// 5️⃣ Title Case a Sentence
function Sentence() {}
