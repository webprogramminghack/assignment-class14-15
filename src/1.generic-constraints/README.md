# TypeScript Generic Function for Object Property Mapping

## Objective

The objective of this assignment is to understand and implement **TypeScript generics** with **mapped types** and **constraints**. You will create a generic function that maps properties from a source object to a new object using a mapping object, ensuring type safety.

## Instructions

You are tasked with implementing the `mapObjectProperties` function using **TypeScript generics**. This function will take two arguments:

1. **Source object (`S`)**: The object whose properties will be mapped.
2. **Mapping object (`M`)**: An object that defines how properties from the source should be renamed or mapped to the new object.

### Example

Given a source object like this:

```ts
const user = {
  userId: 123,
  userName: 'JohnDoe',
  userAge: 30,
};
```

And a mapping object like this:

```ts
const mapping = {
  id: 'userId',
  name: 'userName',
  age: 'userAge',
} as const;
```

Your task is to transform the user object into the following target structure:

```ts
const transformedUser = {
  id: 123,
  name: 'JohnDoe',
  age: 30,
};
```

```ts
// please make mapObjectProperties generic function that takes two arguments (source and mapping object)
// Tips:
// You have learned how to implement mapped types in the class, you can use it as the return type of the function
// You can remove the readonly modifier from the mapped type by using -readonly

// start coding here

// ------- don't change the code below -------
const user = {
  userId: 123,
  userName: 'JohnDoe',
  userAge: 30,
};

const mapping1 = {
  id: 'userId',
  name: 'userName',
  age: 'userAge',
} as const;

const mapping2 = {
  id: 'userId',
  name: 'userName',
} as const;

const mapping3 = {
  id: 'userId',
  name: 'userName',
  age: 'doesntExist',
} as const;

const transformedUser1 = mapObjectProperties(user, mapping1);
// type should be:
// const transformedUser1: {
//   id: number;
//   name: string;
//   age: number;
// }

const transformedUser2 = mapObjectProperties(user, mapping2);
// type should be:
// const transformedUser2: {
//   id: number;
//   name: string;
//   userAge: number;
// }

const transformedUser3 = mapObjectProperties(user, mapping3); // should produce error since 'doesntExist' is not a key of user
```
