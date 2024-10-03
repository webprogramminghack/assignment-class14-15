// please make mapObjectProperties generic function that takes two arguments (source and mapping object)
// Tips:
// You have learned how to implement mapped types in the class, you can use it as the return type of the function
// You can remove the readonly modifier from the mapped type by using -readonly

// ------- start coding here -------
type Mapping<S, M extends Record<string, keyof S>> = {
  -readonly [K in keyof M]: S[M[K]];
} & Omit<S, M[keyof M]>;

function mapObjectProperties<
  S extends Record<string, any>,
  M extends { [K in keyof M]: keyof S }
>(source: S, mapping: M): Mapping<S, M> {
  const result = { ...source } as any;
  for (let x in mapping) {
    result[x] = result[mapping[x]];
  }
}

// ------- don't change the code below -------
const user = {
  userId: 123, // original key is userId
  userName: 'JohnDoe', // original key is userName
  userAge: 30, // original key is userAge
};

const mapping1 = {
  id: 'userId', // change the key to id
  name: 'userName', // change the key to name
  age: 'userAge', // change the key to age
} as const;

const mapping2 = {
  id: 'userId', // change the key to id
  name: 'userName', // change the key to name
} as const;

const mapping3 = {
  id: 'userId', // change the key to id
  name: 'userName', // change the key to name
  age: 'doesntExist', // change the key to age, but since 'doesntExist' is not a key of user, it should produce type error when this object is used as the argument of mapObjectProperties function
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

console.log(transformedUser1);
console.log(transformedUser2);
console.log(transformedUser3);
