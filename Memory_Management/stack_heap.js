// base on the storage of data in javascript

// 1. Stack Memory
// 2. Heap Memory

// Stack Memory (store actual values)

// Number =    let a = 10;
// String =    let str = "Hello";
// Boolean =   let isTrue = true;
// null =      let x = null;
// undefined = let y;
// Symbol =    let sym = Symbol("unique");
// BigInt =    let bigNum = 123456789n;

// Example

let fullName = "shamsher";
let newName = fullName; // A copy of fullName is created
newName = "rehan";
console.log(fullName); // shamsher (original value)
console.log(newName); // rehan  


// Heap Memory (store reference values)

// Object = { name: "Sam" }
// Array  = [1, 2, 3]
// Function = function greet() { console.log("Hello"); }

//Example

let obj1 = { name: "Sam" };
let obj2 = obj1; // Both point to the same memory reference

obj2.name = "John";
console.log(obj1.name); // Output: John
console.log(obj2.name); // Output: John (obj1 is also affected)

// without effected reference object capy value and cange it. (shallow capy): shallow capy useing when want lite copy ("uper uper se").
let obj = { name: "vivan" };
let newObj = { ...obj }; // Creates a new copy (spread operator)

newObj.name = "John";
console.log(obj.name); // Output: vivan (obj is not affected)
console.log(newObj.name); // Output: john 

// Deep Copy (For Nested Objects): it's useing when want deep copy means object in object("full copy exest").
let student = { name: "Sam", address: { city: "Delhi" } };
let newStudent = JSON.parse(JSON.stringify(student)); // Deep copy

newStudent.address.city = "Mumbai"; // Change the nested property
console.log(student.address.city); // Output: Delhi (not affected)
console.log(newStudent.address.city); // Output: mumbai 



