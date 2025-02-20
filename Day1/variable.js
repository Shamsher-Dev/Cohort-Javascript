// variable let, cosnt, var with datatypes.
// premetive datatypes

let fristName = 'vivan';
fristName = 'rahul'; // update name.
console.log(fristName); // print something.
console.log(typeof(fristName)); // type of variable. "string"

const age = 20; 
// age = 25; // Not Update, show error.
console.log(age); // Output 20
console.log(typeof (age)); // type of variable 'Number'.

let isOnline = true;
console.log(typeof(isOnline)); // Boolean 

let Name ;
console.log(typeof(Name)); // undefine 

let box = null; // null is specail value that mean total empty.
console.log(typeof(null)); //object 

const sym = Symbol["id"];
console.log(typeof(sym)); // symbol, that show undefine becouse of id id not define.

let bigNumber = 1234567890n;
console.log(typeof(bigNumber)); // bigint 

// non-premitive datatypes

let student = {
    fristName : "vivan",
    studentId : 12345,
    isPresent : true
}
console.log(student);
console.log(typeof (student)); // Object 

let array = [1,2,3,4,5,6,]; //Array
console.log(array);
console.log(typeof (array)); // typefo Array

function myfunction (){     //functon declertion
    return 'Hello World';
}

console.log (myfunction); // funtion
console.log (typeof (myfunction())); // type of function "string"

