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

let newFruits = ["Apple", "Banana", "Cherry"];
console.log(newFruits.includes('Cherry'))  //cheac if the element exist in array return true/ false

console.log(newFruits.reverse()) // reverse Array 

let num1 = [1, 2, 2, 4, 6, 3, 5]
console.log(num1.sort()) // [1, 2, 2, 3, 4, 5, 6] // sort the array in count formate

console.log(num1.slice(1, 4)) //[ 2, 2, 3 ], Extract the partion of the array

// The concat() method merges two or more arrays and returns a new array without modifying the original arrays.

// Sintax concat() methods
// let newArray = array1.concat(array2, array3, ...);
let margeArr = newFruits.concat(num1);
console.log(margeArr) // [ 'Cherry', 'Banana', 'Apple', 1, 2, 2, 3, 4, 5, 6 ] 

let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];

let merged = [...arr2, ...arr3]; // sprede oprater
console.log(merged); // [1, 2, 3, 4, 5, 6]

console.log(newFruits.join()) // Cherry,Banana,Apple : convert array to string


// The find() method returns the first element in an array that satisfies a given condition. If no element matches, it returns undefined.

// Sintax of find()
// let result = array.find(callback(currentValue, index, array));

let num2 = [1, 3, 5, 8, 10];

let firstEven = num2.find(num => num % 2 === 0);
console.log(firstEven); // 8 

let userObj = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let findUser = userObj.find(u => u.id === 2);
console.log(findUser); // { id: 2, name: "Bob" }


// The findIndex() method returns the index of the first element that satisfies a given condition. If no element matches, it returns -1.

// Sintax of findIndex()
// let index = array.findIndex(callback(currentValue, index, array));

let numbersArr = [1, 3, 5, 8, 10];

let index = numbersArr.findIndex(num => num % 2 === 0);
console.log(index); // 3

let fruitsArr = ["apple", "banana", "mango"];
let findFruit = fruits.findIndex(fruit => fruit === "orange");
console.log(findFruit); // -1

// The reduce() method reduces an array to a single value by applying a function to each element.

// Sintax of reduce()
// let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

let numbersArray = [1, 2, 3, 4, 5];

let sumArr = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(sumArr); // 15, Adds all numbers in the array (1 + 2 + 3 + 4 + 5 = 15).


let numbersMax = [10, 25, 5, 40, 30];

let findMax = numbersMax.reduce((acc, num) => Math.max(acc, num), -Infinity);
console.log(findMax); // 40


// The some() method checks if at least one element in an array satisfies a given condition and returns true or false.

//Sintax of some()
// let result = array.some(callback(currentValue, index, array));

let hasEven = numbersArr.some(num => num % 2 === 0);
console.log(hasEven); // true

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
];

let isExpensive = products.some(product => product.price > 900);
console.log(isExpensive); // true


// The every() method checks if all elements in an array satisfy a given condition. If all elements match, it returns true; otherwise, it returns false.

// Sintax of every()
// let result = array.every(callback(currentValue, index, array));
let allEvennumbers = [2, 4, 6, 8];

let allEven = allEvennumbers.every(num => num % 2 === 0);
console.log(allEven); // true

let words = ["apple", "banana", "cherry"];

let allLongWords = words.every(word => word.length > 3);
console.log(allLongWords); // true


// The flat() method flattens a nested array into a single-level array.

//Sintax of flat()
// let newArray = array.flat(depth);

let mixNumbers = [1, 2, [3, 4], [5, 6]];

let flatArray = mixNumbers.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

let arrX = new Array(5).fill("X");
console.log(arrX); // ["X", "X", "X", "X", "X"]

// The at() method retrieves an element from an array using positive or negative indexing.

// Sintax of at()
// let element = array.at(index);

let possitiveNumbers = [10, 20, 30, 40, 50];
console.log(possitiveNumbers.at(2)); // 30 stat count

console.log(possitiveNumbers.at(-1)); // 50 reverse count

// at(), support negative index