# JavaScript Date and Time

## Creating a Date Object
```javascript
let now = new Date(); // Current date and time
console.log(now);
```

## Getting Specific Date Components
```javascript
let date = new Date();
console.log(date.getFullYear()); // Year (e.g., 2025)
console.log(date.getMonth());    // Month (0-11, January is 0)
console.log(date.getDate());     // Day of the month (1-31)
console.log(date.getDay());      // Day of the week (0-6, Sunday is 0)
console.log(date.getHours());    // Hours (0-23)
console.log(date.getMinutes());  // Minutes (0-59)
console.log(date.getSeconds());  // Seconds (0-59)
console.log(date.getMilliseconds()); // Milliseconds (0-999)
```

## Setting Date Components
```javascript
let date = new Date();
date.setFullYear(2026);
date.setMonth(5); // June (months are zero-based)
date.setDate(15);
console.log(date);
```

## Formatting a Date
```javascript
let date = new Date();
console.log(date.toDateString());  // Example: "Sun Mar 09 2025"
console.log(date.toISOString());   // Example: "2025-03-09T12:34:56.789Z"
console.log(date.toLocaleDateString()); // Localized date format
console.log(date.toLocaleTimeString()); // Localized time format
console.log(date.toLocaleString()); // Full localized date and time
```

## Working with Timestamps
```javascript
let timestamp = Date.now(); // Current timestamp (milliseconds since 1970)
console.log(timestamp);
```

## Creating a Specific Date
```javascript
let specificDate = new Date(2025, 2, 9, 14, 30, 0); // March 9, 2025, 14:30:00
console.log(specificDate);
