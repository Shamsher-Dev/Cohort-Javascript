# JavaScript String Methods

JavaScript provides several built-in string methods for manipulating and working with text. Below are some commonly used string methods with examples.

---

## 1. `indexOf()`
Finds the position of the first occurrence of a substring. Returns `-1` if not found.
```javascript
let text = "JavaScript is awesome!";
console.log(text.indexOf("JavaScript")); // 0
console.log(text.indexOf("Python")); // -1
```

---

## 2. `includes()`
Checks if a substring exists within a string. Returns `true` or `false`.
```javascript
let text = "Hello, World!";
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false (case-sensitive)
```

---

## 3. `substring()`
Extracts a portion of a string.
```javascript
let text = "JavaScript";
console.log(text.substring(0, 4)); // "Java"
console.log(text.substring(4)); // "Script"
```

---

## 4. `charAt()`
Returns the character at a specified index.
```javascript
let text = "Hello";
console.log(text.charAt(1)); // "e"
console.log(text.charAt(10)); // "" (empty string if out of range)
```

---

## 5. `slice()`
Extracts a section of a string, similar to `substring()`, but supports negative indices.
```javascript
let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"
console.log(text.slice(-6)); // "Script"
```

---

## 6. `replace()`
Replaces part of a string with another value.
```javascript
let text = "Hello World";
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"
```

---

## 7. `toUpperCase()` & `toLowerCase()`
Converts a string to uppercase or lowercase.
```javascript
let text = "Hello";
console.log(text.toUpperCase()); // "HELLO"
console.log(text.toLowerCase()); // "hello"
```

---

## 8. `trim()`
Removes whitespace from both ends of a string.
```javascript
let text = "   Hello World   ";
console.log(text.trim()); // "Hello World"
```

---

## 9. `split()`
Splits a string into an array based on a delimiter.
```javascript
let text = "apple,banana,orange";
console.log(text.split(",")); // ["apple", "banana", "orange"]
```

---

## 10. `concat()`
Joins two or more strings.
```javascript
let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2)); // "Hello World"
```

---

## Conclusion
These string methods help in manipulating and processing text efficiently in JavaScript. Use them based on your needs!

