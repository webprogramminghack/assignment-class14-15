var items = [
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
];
function getAvailableItems(color, code) {
  var prefix = 'text-'.concat(color, '-').concat(code);
  var bgPrefix = 'bg-'.concat(color, '-').concat(code);
  return [prefix, bgPrefix];
}
// ------- don't change the code below -------
var item1 = getAvailableItems('red', '400'); // Should return ['text-red-400', 'bg-red-400']
console.log(item1);
var item2 = getAvailableItems('green', '500'); // Should return ['text-green-500', 'bg-green-500']
console.log(item2);
var item3 = getAvailableItems('yellow', '400'); // Should produce type error since 'yellow' is not available in the items array
var item4 = getAvailableItems('red', '700'); // Should produce type error since '700' is not available in the items array
