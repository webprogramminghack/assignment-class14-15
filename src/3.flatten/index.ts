// Make the `Transformer` generic type that will transform the `Details` type
// Tips:
// You can use the conditional type with infer to produce union type
// Once you have the union type, you can intersect it to get the final type using conditional type with infer
// No need to use recursion

// ------- start coding here -------
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer R
) => void
  ? R
  : never;

type Transformer<T> = UnionToIntersection<T[keyof T]>;

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
