// //Task - 1
// let name = prompt("Enter your name :");

//  if(name == "admin"){
//     console.log("Welcome admin");
// }
// else{
//     console.log("Access denined");
// }
// //Task - 2
// let age = prompt("Enter your age: ")

// if (age >= 18){
//     console.log("You are Eligible for vote")

// }
// else{
//     console.log("you are not eligible")
// }
// Task - 3
// let n = prompt("Enter a number :")
// if (n % 2 == 0){
//     console.log("Even number")
// }
// else{
//     console.log("Odd number")
// }

//Task - 4
// let tem = prompt("Enter the temprature")
// if (tem > 30){
//     console.log("Hot")
// }
// else if(tem >= 15  && tem <= 30){
//     console.log("Normal")

// }
// else 
// {
//     console.log("cold")
// }
//task - 5

// let marks = prompt("Enter marks :")
// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks >= 70 && marks <= 89 )
// {
//     console.log("Grade B")
// }
// else if(marks >= 50 && marks <= 69)
// {
//     console.log("Garde C")
// }
// else {
//     console.log("fail")
// }
//Task - 6

// let bank_balance = 10000

// let w = prompt(" ENTER Withdrawal amount")
// if (w <= bank_balance)
// {
//     console.log("Transaction Succesful")
// }
// else{
//     console.log("Insufficient Balance")
// }
// Task - 7

// let n = prompt("Enter a number :")

// for(let i = 1;i <=10;i++){
//     console.log(n * i)
// }


//Task - 8

// let n = prompt("Enter a number")

// for(let i = 1; i<=n;i++ )
// {
//     console.log((n * n + 1)/2)
//

// Task - 9
// a = 4
// b = 7
// if(a > b ){
//     console.log(a)
// }
// else{{
//     console.log(b)
// }}

// Task - 10
// a = 7
// b = 8
// c = 5
// if(a > b && a > c){
//     console.log(a)
// }
// else if(b > a && b > c){
//     console.log(b)
// }
// else {
//     console.log(c)
// }

// task - 11
//  let n = prompt(" Enter a number")
//  if(n  % 5 == 0 && n % 11 == 0)
//  {
//     console.log("Divisible")
//  }
//  else{
//     console.log("Not Divisible")
//  }

// Task - 12

// let n = prompt("Enter a character :")
// if(n === 'a' || n === 'e' || n === 'i' || n === 'o' || n ==='u'){
//     console.log("Vowels")
// }
// else{
//     console.log("Consonunt")
// }

// Task - 13

// let year = prompt(" Enter year :")
// if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//     console.log(" Leap Year")

// }

// Task - 14

// let a = abs(Number(prompt("Enter first number : ")))
// let b = abs(Number(prompt("Enter second number : ")))
// let c = prompt("Enter operator : ")


// switch(c){
//     case "+":
       
//         console.log("sum = " (a + b))

// }
// 1. Write a JavaScript program to check whether a number is even or odd using if-else.

let num = 7;

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}



// 2. Write a program to find the largest among two numbers using if-else.

let a = 20;
let b = 15;

if (a > b) {
    console.log(a + " is largest");
} else {
    console.log(b + " is largest");
}



// 3. Write a program to find the largest among three numbers.

let x = 10;
let y = 25;
let z = 18;

if (x > y && x > z) {
    console.log(x + " is largest");
} else if (y > x && y > z) {
    console.log(y + " is largest");
} else {
    console.log(z + " is largest");
}



// 4. Write a program to check whether a number is divisible by 5 and 11.

let n = 55;

if (n % 5 === 0 && n % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not divisible by both 5 and 11");
}



// 5. Write a program to check whether a character is a vowel or consonant using if-else.

let ch = 'a';

if (
    ch === 'a' || ch === 'e' || ch === 'i' ||
    ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' ||
    ch === 'O' || ch === 'U'
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}



// 6. Write a program to check whether a year is a leap year or not.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}



// 7. Write a program to calculate grade based on marks.

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



// 8. Write a program to create a simple calculator using switch case.

let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Addition = " + (num1 + num2));
        break;

    case "-":
        console.log("Subtraction = " + (num1 - num2));
        break;

    case "*":
        console.log("Multiplication = " + (num1 * num2));
        break;

    case "/":
        console.log("Division = " + (num1 / num2));
        break;

    default:
        console.log("Invalid Operator");
}



// 9. Write a program to check whether a number is divisible by 2, 3, or both.

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both 2 and 3");
} else if (number % 2 === 0) {
    console.log("Divisible by 2 only");
} else if (number % 3 === 0) {
    console.log("Divisible by 3 only");
} else {
    console.log("Not divisible by 2 or 3");
}



// 10. Write a program to find the absolute value of a number using if-else.

let value = -25;

if (value < 0) {
    console.log("Absolute Value = " + (-value));
} else {
    console.log("Absolute Value = " + value);
}



// 11. Write a program to print the multiplication table.

let table = 5;

for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}



// 12. Write a program to input cost price and selling price and calculate profit or loss.

let costPrice = 500;
let sellingPrice = 650;

if (sellingPrice > costPrice) {
    console.log("Profit = " + (sellingPrice - costPrice));
} else if (costPrice > sellingPrice) {
    console.log("Loss = " + (costPrice - sellingPrice));
} else {
    console.log("No Profit No Loss");
}