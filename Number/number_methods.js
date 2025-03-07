// Number Methods Opreation

console.log(1234.4553.toFixed()) // 1234.45, remove of number to decimal places.(2) mmeans after the decimal point we want to 2 digit.
let num = 123;
console.log(num.toPrecision()) //return a string with significate number. 
console.log(typeof num.toPrecision()) // string 

console.log(parseInt("100px")) // 100, convert a string to an integer 
console.log(parseFloat("123.56")) // 123.56 conver a string to a flooting point number
console.log(isNaN("hello")) // true , check if the value is not a number return "true, false"

let anotherNumber = 1234567.89;
console.log(anotherNumber.toString()) // "1234567.89" , convert number in to string format  
console.log(anotherNumber) // without modifiy orignal value return new value 

console.log(...anotherNumber.toLocaleString("hi-IN")) //1 2, 3 4, 5 6 7. 8 9 , Indain format number 
console.log(...anotherNumber.toLocaleString()) // 1 , 2 3 4 , 5 6 7 . 8 9 , default format US
// output depend on user system local 


// Number Math Opreation

// .Math : the math object provides build in methods for canstract for methamatical. it is a static object 

// basic .Math Opreation
console.log(Math.random()) // Generate a random number between 0 to 1
console.log(Math.min(5, 3, 9)) // 3, Return the smallest number
console.log(Math.max(5, 3, 9)) // 9, Return the largest number 
console.log(Math.abs(-10)) // 10, Return the Nagative value into posstive value
console.log(Math.round(4.7)) // 5, Round of the nearest number
console.log(Math.floor(4.9)) // 4, Round down the nearest number
console.log(Math.ceil(4.2)) // 5, Round upper the nearest number

let min = 1
let max = console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random number genrate between 1 - 6 ; like lodu game dais. : )


