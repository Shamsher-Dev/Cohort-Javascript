// array is spcail object which store multiple values in sigle variable. like string, number, boolean etc.

// Create array and sintax
let arr = [] //empty array
arr = [1, 2, 3, 4, 5] // [ 1, 2, 3, 4, 5 ]
console.log(typeof arr) // object


// Constructor
let arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1.length); // 5 
arr1[0] = 100 // [ 100, 2, 3, 4, 5 ], replace the value 1 into 100
console.log(arr1) // Array start with 0 indexvalue

// Array accesse alements with indexvalue Example:
console.log(arr[3]); // 4

// Array Methods
let num = [2, 4, 2, "apple", 10]

console.log(num.push(77)); //  Add  an elment to the end in array
console.log(num) // [ 2, 4, 2, 'apple', 10, 77 ],

num.pop() //Remove the last element in array
console.log(num); // [ 2, 4, 2, 'apple', 10 ], 

num.unshift(44) // Add the element begining in array
console.log(num); // [ 44, 2, 4, 2, 'apple', 10 ]

num.shift() // Remove the element begining in the array
console.log(num) // [ 2, 4, 2, 'apple', 10 ]

console.log(num.length) // 5, Return the number of element in array

console.log(num.indexOf("apple")) // 3, find the index of element

// The splice() method is used to add, remove, or replace elements in an array. take 3 paramenter (add, remove or replace).

// array.splice(Add, deleteCount, Replece)

// Remove Elements Using splice()
let numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 2); // Remove 2 elements starting from index 1
console.log(numbers) // [ 1, 4, 5 ], index value 1,2 remove in the array

// Add Elements Using splice()
let colors = ['Red', 'Green', 'Blue']
colors.splice(1, 0, 'Yellow', 'Pink');  // Add "Yellow" & "Pink" at index 1 (without removing anything)
console.log(colors); // [ 'Red', 'Yellow', 'Pink', 'Green', 'Blue' ]

// Replace Elements Using splice()
let fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1, "Orange"); // Replace "Banana" with "Orange"
console.log(fruits); // [ 'Apple', 'Orange', 'Mango' ]

// Simple Map Sintax
// let newArray = array.map(callback(currentValue, index, array));
let newArray = [1, 2, 3, 4, 5];
let doubled = newArray.map(num => num * 2);
console.log(doubled) // [ 2, 4, 6, 8, 10 ], map return new array

let fahrenheit = [32, 68, 100];
let celsius = fahrenheit.map(f => (f - 32) * 5 / 9);
console.log(celsius); // [0, 20, 37.7778]


let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]


// Sintax of filter
//   The filter() method creates a new array with elements that pass a condition (callback function).

//   let newArray = array.filter(callback(currentValue, index, array));
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = number.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]  Return a new array without change the original array

let newNumbers = [-10, -5, 0, 5, 10, 15];
let positive = newNumbers.filter(num => num > 0);
console.log(positive); // [5, 10, 15]

let user = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

let adults = user.filter(user => user.age >= 18);
console.log(adults);
/*
[
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 }
]
*/

let mixed = [0, "Hello", "", null, 42, undefined, "World", false, NaN];
let truthy = mixed.filter(Boolean);

console.log(truthy); // ["Hello", 42, "World"]


// The forEach() method executes a function for each element in an array but does not return a new array.

// Sintax of forEach
// array.forEach(callback(currentValue, index, array));

let otherNumbers = [1, 2, 3, 4, 5];
otherNumbers.forEach(num => console.log(num)); // Loops through each element and prints it.

let fruit = ["Apple", "Banana", "Cherry"];

fruit.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

/* 
Index 0: Apple
Index 1: Banana
Index 2: Cherry
*/

let newNumber = [10, 20, 30, 40];
let sum = 0;

newNumbers.forEach(num => {
    sum += num;
});
console.log(sum); // 100 itearted each element and add in sum variable




