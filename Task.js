// // 1. Write a function that takes a number and prints all numbers from 1 to that number using a loop.

// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// printNumbers(5);



// // 2. Write a function that takes a number and returns whether it is even or odd using if-else.

// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(checkEvenOdd(7));



// // 3. Write a function that takes a string and counts how many vowels are in it.

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("JavaScript"));



// // 4. Write a function that takes a string and returns the reverse of that string.

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));



// // 5. Write a function that takes a number n and returns the sum of all numbers from 1 to n.

// function sumNumbers(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sumNumbers(5));



// // 6. Write a function that takes two numbers and returns the larger number.

// function findLarger(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(findLarger(10, 20));



// // 7. Write a function that takes a number and returns its factorial using a loop.

// function factorial(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }

//     return fact;
// }

// console.log(factorial(5));



// // 8. Write a function that takes a string and counts how many spaces are present in it.

// function countSpaces(str) {
//     let count = 0;

//     for (let char of str) {
//         if (char === " ") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countSpaces("Hello World JavaScript"));



// // 9. Write a function that takes a number and prints all even numbers from 1 to that number.

// function printEvenNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// printEvenNumbers(10);



// // 10. Write a function that takes a string and checks whether it is a palindrome or not using if-else.

// function checkPalindrome(str) {
//     let reversed = str.split("").reverse().join("");

//     if (str === reversed) {
//         return "Palindrome";
//     } else {
//         return "Not Palindrome";
//     }
// }

// console.log(checkPalindrome("madam"));

// // global Scope 
// let names = "abc"
// //functional scope
// function hey(){
//     let name2 = "def"
//     console.log(names)
// }

// //block scope
// {
//     let blockname = "shalini"
// }
// console.log(blockname)
// console.log(name2)
// console.log(names)

// 
// Arrays

// let cars = ["bmw","kwid","fortuner","volvo"]
// // declaring initializing 
// let arr = [1,
//     2,
//     30.3,
//     "fortuner",
//     true,
//     [1,2,3,4,5],
//     function(){
//         console.log("hello from array")
//     },
//     (a,b)=>a*b,
//     (message) =>
//          {
//         console.log("arrow function initialized in arrays")
//         console.log(message)
//     }
// ]
// console.log(arr[3])

// console.log(arr[5])
// console.log([7](6,7))

// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()

// console.log(arr.length)
// console.log(cars.toString())
// console.log(typeof cars)
// console.log(arr.at(2))
// console.log(cars.join(";"))
// cars.push("maserti")
// console.log(cars)
// cars.pop()
// console.log(cars)
// cars.shift()
// console.log(cars)
// cars.unshift("Porsche")
// console.log(cars)
// console.log(cars.slice(1,3))
const fruits = ["Banana","Orange","Apple","Mango"]

fruits.splice(0,2,"Kiwi");
console.log(fruits);

let cars = ["hyundai","maruti","porche","fortuner"]
console.log(cars.slice(1,3))
cars.splice(0,2,"porche");
console.log(cars);

// for(let i of cars){
//     console.log(i)
// }