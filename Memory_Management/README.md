# Memory Management in JavaScript: Primitive vs. Non-Primitive Types

## Introduction
Memory management is a crucial concept in JavaScript, as it determines how variables and data are stored and accessed. JavaScript categorizes data into **primitive** and **non-primitive** types, each managed differently in memory.

## Memory Types in JavaScript
JavaScript primarily uses two types of memory allocation:
1. **Stack Memory** – Used for storing primitive data types.
2. **Heap Memory** – Used for storing non-primitive data types.

---

## 1. Primitive Data Types (Stored in Stack Memory)
Primitive types are **immutable** and stored directly in the stack.

### **Primitive Data Types:**
- `Number` – Example: `let num = 42;`
- `String` – Example: `let str = "Hello";`
- `Boolean` – Example: `let isTrue = true;`
- `Undefined` – Example: `let x;`
- `Null` – Example: `let y = null;`
- `Symbol` – Example: `let sym = Symbol("unique");`
- `BigInt` – Example: `let bigNum = 123456789n;`

### **Stack Memory Behavior:**
- Stores **actual values**.
- When assigned to a new variable, a **copy** of the value is made (pass-by-value).
- Changing the copy **does not affect** the original.

---

## 2. Non-Primitive Data Types (Stored in Heap Memory)
Non-primitive types are **mutable** and stored in the heap. Only references (memory addresses) are stored in the stack.

### **Non-Primitive Data Types:**
- `Object` – Example: `{ name: "Sam" }`
- `Array` – Example: `[1, 2, 3]`
- `Function` – Example: `function greet() { console.log("Hello"); }`

### **Heap Memory Behavior:**
- Stores **actual objects** in heap memory.
- The **stack stores only the reference (memory address)** to the object.
- When assigned to a new variable, the **reference is copied**, not the actual data.
- Modifying one reference affects all references pointing to the same object.

---

## Key Differences: Primitive vs. Non-Primitive
| Feature            | **Primitive Data Types** | **Non-Primitive Data Types** |
|-------------------|----------------------|--------------------------|
| **Stored in**     | Stack Memory         | Heap Memory (Reference in Stack) |
| **Stores**        | Actual Value         | Memory Reference (Pointer) |
| **Copy Behavior** | Creates a new copy   | Copies only the reference |
| **Mutability**    | Immutable (except strings) | Mutable |
| **Example Types** | `Number, String, Boolean` | `Object, Array, Function` |

---

## Preventing Reference Issues
To avoid unintended modifications, **create copies instead of copying references**.

### **Shallow Copy (Only First-Level Properties):**

### **Deep Copy (For Nested Objects):**

---

## Conclusion
- **Primitive types** are stored in **stack memory** and assigned **by value**.
- **Non-primitive types** are stored in **heap memory** with a reference in **stack memory**.
- Always be cautious when handling **non-primitive data** to avoid unwanted side effects.



