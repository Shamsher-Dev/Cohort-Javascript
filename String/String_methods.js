// string is a collection of characters that represent a text. is also a primitive data types .

let user1 = "Shamsher"
let user2 = ' Vivan'
let user3 = `   Rehan   `;
//denoted by double quotes,(""),single quotes(''), or backticks(``)

console.log(`Good Morning ${user1}!`); // Good Morning rehan!
// backticks (supports interpolation)

// String Methods

console.log(user1.length) //8, retern string length.
console.log(user1.toUpperCase()) // SHAMSHER,  return string into uppercase text.
console.log(user1.toLowerCase()) // shamsher,  return string into Lowercase text.
console.log(user2.charAt(3)) //a, index of 3 is a charecter exist. return charecter by the index value
console.log(user2[3]) //a, index of 3 is a charecter exist. modern use
console.log(user3.trim()) // remove spaces in text 
console.log(user1.slice(2, 5)) // asm, Extracts part of a string 
console.log(user2.replace("V", "J")) // Jivan , replace part of string (old, New)

let user = "javascript, Python, PHP";
console.log(user.split(',')) //[ 'javascript', ' Python', ' PHP' ], split return string into array
console.log(typeof user.split()) // array object 

console.log(user1.concat(user2, user3)) //Shamsher Vivan   Rehan, combine multiple string
console.log(user1.indexOf("s")); // 4, find the posstion of character in indexvalue.
console.log(user1.indexOf("z")); // -1, if charecter is not exist in value  then return -1 .


let text = "javaScritp";
console.log(text.substring(0, 4)) // java, Extracting Part of a String (start, End)
console.log(text.substring(-2, 4)) // Nagtive value treated as "0"

let message = "javaScritp is awesome!";
console.log(message.includes("awesome")) // true, if the substirng exsit in sting return "true","false"
console.log(message.includes("python")) // false, 


