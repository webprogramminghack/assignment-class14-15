# Type-Safe Filtering in TypeScript

## Objective

The objective of this assignment is to practice advanced TypeScript features, such as type inference and conditional types, by implementing a function that filters items based on color and code. The function should produce type errors if invalid values are provided, ensuring type safety in your TypeScript code.

## Instructions

### Problem Description

You are provided with an array of `items` that represent CSS classes for different colors and sizes. Your task is to implement a function `getAvailableItems` that:

- **Accepts two arguments**: `color` and `code`.
  - `color`: A string representing the color (e.g., "red", "green", "blue").
  - `code`: A string representing the size or shade (e.g., "400", "500", "600").
- **Returns** an array of items that match the given `color` and `code`.
- **Produces a type error** if the provided `color` or `code` does not exist in the `items` array.

### Requirements

1. The function should only allow colors and codes that exist in the provided `items` array.
2. If an invalid `color` or `code` is passed, TypeScript should produce a type error.
3. You should use TypeScript's features such as conditional types to get the color and code from the string.

### Initial Code

The following code is provided for you:

```typescript
const items = [
  'text-red-400',
  'text-red-500',
  'text-red-600',
  'text-green-400',
  'text-green-500',
  'text-green-600',
  'text-blue-400',
  'text-blue-500',
  'text-blue-600',
  'bg-red-400',
  'bg-red-500',
  'bg-red-600',
  'bg-green-400',
  'bg-green-500',
  'bg-green-600',
  'bg-blue-400',
  'bg-blue-500',
  'bg-blue-600',
] as const;

// ------- don't change the code above -------

// Your task is to implement a function `getAvailableItems` which should return an array of items based on the color and size provided.
// The function should accept two arguments:
// - color: string
// - code: string
// If the color doesn't exist in the items array, the function should produce a type error.
// If the code doesn't exist in the items array, the function should produce a type error.

// ------- start coding here -------

// ------- don't change the code below -------
const item1 = getAvailableItems('red', '400'); // Should return ['text-red-400', 'bg-red-400']
console.log(item1);

const item2 = getAvailableItems('green', '500'); // Should return ['text-green-500', 'bg-green-500']
console.log(item2);

const item3 = getAvailableItems('yellow', '400'); // Should produce type error since 'yellow' is not available in the items array

const item4 = getAvailableItems('red', '700'); // Should produce type error since '700' is not available in the items array
```
