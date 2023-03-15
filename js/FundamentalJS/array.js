//  Array:
let arry = [1, 2, 3, 4, 5];

// membuat array
 var products = ["Senter", "Radio", "Antena", "Obeng"];

// mengambil radio
 document.write(products[1]);

// Mengakses Elemen Array
console.log(arry[0]); // 1
console.log(arry[2]); // 3

// Mengubah Elemen Array
arry[2] = 10;
console.log(arry); // [1, 2, 10, 4, 5]

// Menambah Elemen Array
arry.push(6);
console.log(arry); // [1, 2, 10, 4, 5, 6]

// Menghapus Elemen Array
arry.pop();
console.log(arry); // [1, 2, 10, 4, 5]