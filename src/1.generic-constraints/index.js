// please make mapObjectProperties generic function that takes two arguments (source and mapping object)
// Tips:
// You have learned how to implement mapped types in the class, you can use it as the return type of the function
// You can remove the readonly modifier from the mapped type by using -readonly
// ------- start coding here -------
//Definiskan fungsi generik `mapObjectProperties`
function mapObjectProperties(source, mapping) {
    var result = {}; // Inisialisasikan objek kosong untuk menyimpan hasil
    for (var key in mapping) {
        var mappedKey = mapping[key];
        result[key] = source[mappedKey];
        // Pemetaan properti berdasarkan objek pemetaan
    }
    return result; // kembalikan objek yang telah diubah
}
// ------- don't change the code below -------
var user = {
    userId: 123, // original key is userId
    userName: 'JohnDoe', // original key is userName
    userAge: 30, // original key is userAge
};
var mapping1 = {
    id: 'userId', // change the key to id
    name: 'userName', // change the key to name
    age: 'userAge', // change the key to age
};
var mapping2 = {
    id: 'userId', // change the key to id
    name: 'userName', // change the key to name
};
var mapping3 = {
    id: 'userId', // change the key to id
    name: 'userName', // change the key to name
    age: 'doesntExist', // change the key to age, but since 'doesntExist' is not a key of user, it should produce type error when this object is used as the argument of mapObjectProperties function
};
var transformedUser1 = mapObjectProperties(user, mapping1);
console.log(transformedUser1);
// type should be:
// const transformedUser1: {
//   id: number;
//   name: string;
//   age: number;
// }
var transformedUser2 = mapObjectProperties(user, mapping2);
console.log(transformedUser2);
// type should be:
// const transformedUser2: {
//   id: number;
//   name: string;
//   userAge: number;
// }
var transformedUser3 = mapObjectProperties(user, mapping3); // should produce error since 'doesntExist' is not a key of user
