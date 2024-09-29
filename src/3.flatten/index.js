// Make the `Transformer` generic type that will transform the `Details` type
// Tips:
// You can use the conditional type with infer to produce union type
// Once you have the union type, you can intersect it to get the final type using conditional type with infer
// No need to use recursion
// TransformedResult type should be:
// {
//   name: string;
//   age: number;
//   city: string;
//   country: string;
// }
