# Transforming Nested Object Types in TypeScript

## Objective

The objective of this assignment is to learn how to transform nested object types in TypeScript using generic types and type manipulation. You will implement a `Transformer` type that will take the properties of a deeply nested object type and merge them into a single flat type.

## Instructions

### Problem Description

You are provided with a `Details` type that contains nested properties. Your task is to create a **generic type** called `Transformer` that:

- **Transforms** a type like `Details` by flattening the nested structure.
- Merges all the properties from nested objects into one flat type.
- Uses TypeScript features such as:
  - Conditional types
  - infer

The goal is to create a type transformation that results in a flattened object containing all the properties from the nested structure. However, since this is just a simple task, no need to use recursion.

### Make the `Transformer` Generic Type

Your task is to implement the `Transformer` generic type that will transform the Details type.

### Initial Code

Below is the initial code provided:

```typescript
// Make the `Transformer` generic type that will transform the `Details` type

// ------- start coding here -------

// ------- don't change the code below -------

type Details = {
  person: {
    name: string;
    age: number;
  };
  location: {
    city: string;
    country: string;
  };
};

type TransformedResult = Transformer<Details>;
// TransformedResult type should be:
// {
//   name: string;
//   age: number;
//   city: string;
//   country: string;
// }
```
