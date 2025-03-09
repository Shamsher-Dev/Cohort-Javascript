
// Date : javascript date object is a primitive data type which is used to represent a specific date and time.

let date = new Date();
console.log(date); // 2025-03-09T09:58:12.296Z , Carrent Date with time.

// Getting specfic date component (methods)

console.log(date.getFullYear()); // 2025, Carrent Year 
console.log(date.getMonth())  // Carrent Month (0 - 11 , january is 0)
console.log(date.getDay()); // Carrent Day (1 - 31)
console.log(date.getHours()); // Carrent Hours(0 -23)
console.log(date.getMinutes()); // Carrent Minutes(0 -59)
console.log(date.getSeconds()); // Carrent Secend(0 -59)
console.log(date.getMilliseconds()); // Carrent Milliseconds(0 -999)

// Formatting a Date

console.log(date.toString()); // Sun Mar 09 2025 15:43:21 GMT+0530 (India Standard Time), Convet Date Formate into string 
console.log(date.toDateString()) // Sun Mar 09 2025, 
console.log(date.toLocaleDateString()) // 3/9/2025
console.log(date.toLocaleTimeString()) // 3:47:23 PM, Convet time into string format.

let nowTime = Date.now()
console.log(nowTime); // Output : Carrent timestamp since 1970

// when you choose specific date 

let specficDate = new Date(2003, 2, 2,) // YYYY/MM/DD
console.log(specficDate.toDateString()) // Sun Mar 02 2003