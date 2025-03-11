# JavaScript Array Methods - Quick Reference

## 📌 Common Array Methods

### 1️⃣ `push()` - Add element(s) to the end
```javascript
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

### 2️⃣ `pop()` - Remove the last element
```javascript
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

### 3️⃣ `shift()` - Remove the first element
```javascript
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

### 4️⃣ `unshift()` - Add element(s) to the beginning
```javascript
let arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
```

### 5️⃣ `map()` - Apply function to each element
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

### 6️⃣ `filter()` - Filter elements based on a condition
```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
```

### 7️⃣ `reduce()` - Reduce array to a single value
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0); // 10
```

### 8️⃣ `find()` - Find the first matching element
```javascript
let numbers = [5, 10, 15];
let found = numbers.find(num => num > 7); // 10
```

### 9️⃣ `findIndex()` - Find index of the first matching element
```javascript
let numbers = [5, 10, 15];
let index = numbers.findIndex(num => num > 7); // 1
```

### 🔟 `some()` - Check if at least one element matches
```javascript
let numbers = [1, 3, 5];
let hasEven = numbers.some(num => num % 2 === 0); // false
```

### 1️⃣1️⃣ `every()` - Check if all elements match
```javascript
let numbers = [2, 4, 6];
let allEven = numbers.every(num => num % 2 === 0); // true
```

### 1️⃣2️⃣ `concat()` - Merge two arrays
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // [1, 2, 3, 4]
```

### 1️⃣3️⃣ `slice()` - Extract a portion of an array
```javascript
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4); // [2, 3, 4]
```

### 1️⃣4️⃣ `splice()` - Add/remove elements
```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99); // [1, 99, 4]
```

### 1️⃣5️⃣ `flat()` - Flatten nested arrays
```javascript
let arr = [1, [2, [3, 4]]];
let flatArr = arr.flat(2); // [1, 2, 3, 4]
```

### 1️⃣6️⃣ `fill()` - Fill an array with a value
```javascript
let arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
```

### 1️⃣7️⃣ `at()` - Access element by index (supports negative index)
```javascript
let arr = [10, 20, 30];
console.log(arr.at(-1)); // 30
```

### 1️⃣8️⃣ `sort()` - Sort an array
```javascript
let numbers = [4, 2, 9];
numbers.sort((a, b) => a - b); // [2, 4, 9]
```

### 1️⃣9️⃣ `reverse()` - Reverse an array
```javascript
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

## 🚀 Happy Coding!

