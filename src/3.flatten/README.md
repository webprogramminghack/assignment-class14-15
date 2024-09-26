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
type Transformer<T> = {
  [K in keyof T]: T[K] extends object ? Transformer<T[K]> : T[K];
}[keyof T];

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

# Mengubah Tipe Objek Bersarang di TypeScript

## Tujuan

Tujuan dari tugas ini adalah mempelajari cara mengubah tipe objek bersarang di TypeScript menggunakan tipe generik dan manipulasi tipe. Anda akan menerapkan tipe `Transformer` yang akan mengambil properti tipe objek yang sangat bertingkat dan menggabungkannya menjadi satu tipe datar.

## Petunjuk

### Uraian Masalah

Anda diberikan tipe `Detail` yang berisi properti bertingkat. Tugas Anda adalah membuat **tipe generik** yang disebut `Transformer` yang:

- **Mengubah** tipe seperti `Detail` dengan meratakan struktur bertingkat.
- Menggabungkan semua properti dari objek bersarang menjadi satu tipe datar.
- Menggunakan fitur TypeScript seperti:
  - Tipe bersyarat
  - menyimpulkan

Tujuannya adalah untuk membuat transformasi tipe yang menghasilkan objek rata yang berisi semua properti dari struktur bersarang. Namun, karena ini hanyalah tugas sederhana, tidak perlu menggunakan rekursi.

### Buat Tipe Generik `Transformer`

Tugas Anda adalah mengimplementasikan tipe generik `Transformer` yang akan mengubah tipe Detail.

### Kode Awal

Di bawah ini adalah kode awal yang diberikan:

```naskah ketikan
// Buat tipe generik `Transformer` yang akan mengubah tipe `Detail`

// ------- mulai coding di sini -------
ketik Transformator<T> = {
  [K di keyof T]: T[K] memperluas objek? Transformator<T[K]> : T[K];
}[kunci T];

// ------- jangan ubah kode di bawah ini -------

ketik Detail = {
  orang: {
    nama: tali;
    usia: nomor;
  };
  lokasi: {
    kota: tali;
    negara: tali;
  };
};
```
