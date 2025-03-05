// operators is a spcial keywords or symbol which is used to perform on values or variables.

// a + b = (operands'a', operater'+', operands'b')

// arithmatic operators (performs mathematical operations)
let a = 10;
let b = 2;
console.log(a + b); //12, addition 
console.log(a - b); //8, subtraction
console.log(a * b) //20, multiplaction
console.log(a / b); // 5, divsion
console.log(a % b); // 0, mudulo
console.log(a ** b); // 10^2 = 100, Exponenetion

// Assigment Operator (assign value to variable)
let x = 10;
console.log(x += 2) // x = x+2 = 12
console.log(x -= 5) // x = x-5 = 7
console.log(x *= 3) // x = x*3 = 21
console.log(x /= 2) // x = x/2 = 10.5
console.log(x %= 5) // x = x%5 = 0.5

// Camparision Operators (campare value and return "true ", "false")

console.log(10 == "10"); // true, loose type
console.log(10 === "10"); //false, strick Check "value and type"
console.log(10 != "5"); // true "not"
console.log(10 !== "6"); // true
console.log(10 > "12"); // false, grather then
console.log(10 < "8"); // false, less then
console.log(10 >= "10"); // true, both are "grather than equal to"
console.log(10 <= "8"); // false, "less then equal to"


// Logical Opretors (perform logic opretors AND, OR, NOT)
console.log(true && false) // AND
console.log(true || false) // OR
console.log(!true) // NOT

// Ternary Opretors (A shorthand for "if-else")
let age = 19;
let status = (age >= 18) ? 'you can vote' : 'you can not vote';
//   Candition      true               false
console.log(status); // you can vote 

// Additional Research 
console.log(undefined === 0); // false, becouse we are declear but value is not exist in variable. so it's not equal to 0.
console.log(null === 0); // false, null means a totally empty variable nothing in the variable so it's not eqaul to 0.
console.log(undefined > null) // false,
console.log(undefined >= null) // false,
console.log(undefined < null) // false,
console.log(undefined <= null) // false,