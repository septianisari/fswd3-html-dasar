//Operator


//Operator Penugasan (Assignment operator)
var ayah = "Budi";
var ibu = "Wati";
console.log("Oh "+ibu+" dan "+ayah+" selamat pagi");

// Operator Aritmatika
var a=2, b=3, c=5;
console.log(a+b); // 5
console.log(a-b); // -1
console.log(a/b); // 0.6666
console.log(a*b); // 6
console.log(c%a); // 1
console.log(++c); // 6
console.log(b++); // 3
console.log(--b); // 3

// Operator Perbandingan
var i = 10;
var j = 5;
console.log(i > j); // true
console.log(i < j); // false
console.log(i >= j); // true
console.log(i <= j); // false
console.log(i == j); // false
console.log(i != j); // true

// Operator Logika
var a = 3, b = 4;
console.log(!(a>3) && b==4);
console.log(a>1 || !(b<4));
console.log(!(a>3) || !(b>4));
console.log(!(a>0 || b<0));
console.log(!(a+b<0 && a-b >0));