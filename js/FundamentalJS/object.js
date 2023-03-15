// Object

var magcoding = {};
magcoding.lahir = 1989;
magcoding.age = function() {
    return new Date().getFullYear()-this.lahir+" Tahun";
}
console.log(magcoding); // object properties {lahir: 1989, age: ƒ}
console.log(magcoding.age()); //28 Tahun
magcoding.lahir = 1999;
console.log(magcoding.age()); //18 Tahun


//membuat object
var obja = {
    nama: "John",
    umur: 30,
    alamat: {
        jalan: "Jalan Raya",
        kota: "Jakarta"
    }
};

// Mengakses Properti Object
console.log(obja.nama); // John
console.log(obja.umur); // 30
console.log(obja.alamat.jalan); // Jalan