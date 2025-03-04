// convasion base on two thing in javascript

// 1. Implicit convarsion (automatic performed by javascript)
console.log("2" + 1); // 21, string + number = string. 
console.log(2 + "1"); // 21, number + string = string. 
console.log("2" - 1); // 21, string + number = number. 
console.log(2 - "1"); // 21, number + string = number.
console.log(true + 1); // 2, boolean + number = number.(true = 1, false = 0)
console.log(2 + true); // 3, number + boolean = number.(true = 1, false = 0)
console.log(true + false); // 1, boolean + boolean = number.(true = 1, false = 0)
console.log("2" * "5"); // 10, string * string = number.
console.log("2" + "5"); // 25, string + string = string.
console.log("2" - "5"); // -3, string - string = number.


// 2. Explicit convarsion (perfomred by developer)

let num = 10;
let string = String(num);
console.log(string); // 10
console.log(typeof string); // string

let age = "20"; // string
let numAge = Number(age); //convert in Number
console.log(numAge); // 20
console.log(typeof numAge); // number

/* primetive data types written in lowercase but wrapper object, which is provide methods for primitives, start with the capital latter. */

// String(), Number(), Boolean() create an objcet not a primitives

let fullName = 'vivan';
console.log(fullName);
console.log(typeof fullName); //string

let str1 = new String("shamsher"); // object, new String() methods
console.log(str1); // shamsher
console.log(typeof str1); // object


// NaN (not a number)
let x = "12" //string
let newX = Number("12abc"); //convert in number with some alphabets
console.log(newX) // NaN


