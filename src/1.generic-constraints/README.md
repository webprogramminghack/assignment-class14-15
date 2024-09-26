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

# Fungsi Generik TypeScript untuk Pemetaan Properti Objek

## Tujuan

Tujuan dari tugas ini adalah untuk memahami dan mengimplementasikan **TypeScript generik** dengan **tipe yang dipetakan** dan **batasan**. Anda akan membuat fungsi generik yang memetakan properti dari objek sumber ke objek baru menggunakan objek pemetaan, untuk memastikan keamanan jenis.

## Petunjuk

Anda ditugaskan untuk mengimplementasikan fungsi `mapObjectProperties` menggunakan **TypeScript generik**. Fungsi ini akan mengambil dua argumen:

1. **Objek sumber (`S`)**: Objek yang propertinya akan dipetakan.
2. **Pemetaan objek (`M`)**: Objek yang menentukan bagaimana properti dari sumber harus diganti namanya atau dipetakan ke objek baru.

### Contoh

Diberikan objek sumber seperti ini:

```ts
pengguna konstan = {
  ID pengguna: 123,
  nama pengguna: 'JohnDoe',
  umur pengguna: 30,
};
```

Dan objek pemetaan seperti ini:

```ts
pemetaan const = {
  id: 'ID pengguna',
  nama: 'Nama Pengguna',
  usia: 'Usia pengguna',
} sebagai konstanta;
```

Tugas Anda adalah mengubah objek pengguna menjadi struktur target berikut:

```ts
const transformUser = {
  nomor identitas: 123,
  nama: 'JohnDoe',
  usia: 30,
};
```

```ts
// tolong jadikan fungsi generik mapObjectProperties yang menggunakan dua argumen (sumber dan objek pemetaan)
// Kiat:
// Anda telah mempelajari cara mengimplementasikan tipe yang dipetakan di kelas, Anda dapat menggunakannya sebagai tipe kembalian dari fungsi tersebut
// Anda dapat menghapus pengubah readonly dari tipe yang dipetakan dengan menggunakan -readonly

// mulai membuat kode di sini

// ------- jangan ubah kode di bawah ini -------
pengguna konstan = {
  ID pengguna: 123,
  nama pengguna: 'JohnDoe',
  umur pengguna: 30,
};

pemetaan const1 = {
  id: 'ID pengguna',
  nama: 'Nama Pengguna',
  usia: 'Usia pengguna',
} sebagai konstanta;

pemetaan const2 = {
  id: 'ID pengguna',
  nama: 'Nama Pengguna',
} sebagai konstanta;

pemetaan const3 = {
  id: 'ID pengguna',
  nama: 'Nama Pengguna',
  usia: 'tidak ada',
} sebagai konstanta;

const transformUser1 = mapObjectProperties(pengguna, pemetaan1);
// tipenya harus:
// const transformUser1: {
// id: nomor;
// nama: rangkaian;
// usia: nomor;
// }

const transformUser2 = mapObjectProperties(pengguna, pemetaan2);
// tipenya harus:
// const transformUser2: {
// id: nomor;
// nama: rangkaian;
// Usia pengguna: nomor;
// }

const transformUser3 = mapObjectProperties(pengguna, pemetaan3); // akan menghasilkan kesalahan karena 'tidak ada' bukan kunci pengguna
```
