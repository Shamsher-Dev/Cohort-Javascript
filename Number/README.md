# JavaScript Number Methods & Math Operations

## Number Methods

### `toFixed(digits)`
Rounds a number to the specified number of decimal places and returns a string.
```js
console.log(1234.4553.toFixed(2)); // "1234.46"
```

### `toPrecision(precision)`
Returns a string representing the number with a specified precision.
```js
let num = 123;
console.log(num.toPrecision()); // "123"
```

### `toString()`
Converts a number to a string.
```js
let anotherNumber = 1234567.89;
console.log(anotherNumber.toString()); // "1234567.89"
```

### `toLocaleString(locale, options)`
Formats a number according to a given locale.
```js
console.log((1234567.89).toLocaleString("hi-IN")); // "12,34,567.89"
console.log((1234567.89).toLocaleString()); // Default locale format
```

### `parseInt(string)`
Converts a string into an integer.
```js
console.log(parseInt("100px")); // 100
```

### `parseFloat(string)`
Converts a string into a floating-point number.
```js
console.log(parseFloat("123.56")); // 123.56
```

### `isNaN(value)`
Checks if a value is NaN (Not-a-Number).
```js
console.log(isNaN("hello")); // true
```

## Math Operations

### `Math.random()`
Generates a random number between 0 and 1.
```js
console.log(Math.random());
```

### `Math.min(a, b, ...)`
Returns the smallest number from the given arguments.
```js
console.log(Math.min(5, 3, 9)); // 3
```

### `Math.max(a, b, ...)`
Returns the largest number from the given arguments.
```js
console.log(Math.max(5, 3, 9)); // 9
```

### `Math.abs(x)`
Returns the absolute (positive) value of a number.
```js
console.log(Math.abs(-10)); // 10
```

### `Math.round(x)`
Rounds a number to the nearest integer.
```js
console.log(Math.round(4.7)); // 5
```

### `Math.floor(x)`
Rounds a number down to the nearest integer.
```js
console.log(Math.floor(4.9)); // 4
```

### `Math.ceil(x)`
Rounds a number up to the nearest integer.
```js
console.log(Math.ceil(4.2)); // 5
```

### Generating a Random Integer in a Range
```js
let min = 1;
let max = 6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```

## Conclusion
These JavaScript number methods and Math operations are useful for formatting numbers, performing calculations, and generating random values.

