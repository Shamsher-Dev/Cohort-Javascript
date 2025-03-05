# JavaScript Operators

## 1. Arithmetic Operators
Perform mathematical operations on numbers.

```js
let a = 10, b = 5;
console.log(a + b); // Addition → 15
console.log(a - b); // Subtraction → 5
console.log(a * b); // Multiplication → 50
console.log(a / b); // Division → 2
console.log(a % b); // Modulus (Remainder) → 0
console.log(a ** b); // Exponentiation → 10^5 = 100000
```

## 2. Assignment Operators
Assign values to variables.

```js
let x = 10;  
x += 5;  // Same as x = x + 5
x -= 3;  // Same as x = x - 3
x *= 2;  // Same as x = x * 2
x /= 2;  // Same as x = x / 2
x %= 3;  // Same as x = x % 3
```

## 3. Comparison Operators
Compare values and return `true` or `false`.

```js
console.log(10 == "10");  // true (loose equality, type conversion happens)
console.log(10 === "10"); // false (strict equality, no type conversion)
console.log(10 != 5);     // true (not equal)
console.log(10 !== "10"); // true (strict not equal)
console.log(10 > 5);      // true (greater than)
console.log(10 < 5);      // false (less than)
console.log(10 >= 10);    // true (greater than or equal)
console.log(10 <= 9);     // false (less than or equal)
```

## 4. Logical Operators
Perform logical operations (`AND`, `OR`, `NOT`).

```js
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)
```

## 5. Ternary Operator
A shorthand for `if...else`.

```js
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: Adult
```

---

This document covers the essential JavaScript operators except Spread & Rest Operators, Type Operators, and Bitwise Operators.

