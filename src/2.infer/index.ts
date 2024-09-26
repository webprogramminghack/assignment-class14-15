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
// The if the color doesn't exist in the items array, the function should produce a type error.
// The if the code doesn't exist in the items array, the function should produce a type error.
// Tips:
// Use conditional type with infer to get the color and code type, that's how you can prevent the non-available color and code from being passed to the function

// ------- start coding here -------

type Item = (typeof items)[number];
// Menentukan warna yang tersedia beserta kode yang sesuai
type ColorCodes = {
  red: '400' | '500' | '600';
  green: '400' | '500' | '600';
  blue: '400' | '500' | '600';
};

type AvailableColors = keyof ColorCodes;

// Membuat tipe untuk item yang valid berdasarkan warna dan ukuran
type AvailableItems<
  C extends AvailableColors,
  S extends ColorCodes[C]
> = Extract<Item, `${`text-${C}` | `bg-${C}`}-${S}`>[];

function getAvailableItems<C extends AvailableColors, S extends ColorCodes[C]>(
  color: C,
  code: S
): AvailableItems<C, S> {
  const prefix = `text-${color}-${code}`;
  const bgPrefix = `bg-${color}-${code}`;

  return [prefix, bgPrefix] as AvailableItems<C, S>;
} 
// ------- don't change the code below -------
const item1 = getAvailableItems('red', '400'); // Should return ['text-red-400', 'bg-red-400']
console.log(item1);

const item2 = getAvailableItems('green', '500'); // Should return ['text-green-500', 'bg-green-500']
console.log(item2);

const item3 = getAvailableItems('yellow', '400'); // Should produce type error since 'yellow' is not available in the items array

const item4 = getAvailableItems('red', '700'); // Should produce type error since '700' is not available in the items array
