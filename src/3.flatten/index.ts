// Make the `Transformer` generic type that will transform the `Details` type
// Tips:
// You can use the conditional type with infer to produce union type
// Once you have the union type, you can intersect it to get the final type using conditional type with infer
// No need to use recursion

// ------- start coding here ------- 
// Di bagian U extends di sini sangat berpengaruh, terutama tanda kurung tersebut sangat ngaruh, jika tidak maka tanda k akan terbaca sebagai key dari property tersebut
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer R
) => void
  ? R
  : never;

type Transformer<S> = UnionToIntersection<{
  [K in keyof S]: S[K] extends object ? { [L in keyof S[K]]: S[K][L] } : never;
}[keyof S]>;
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
