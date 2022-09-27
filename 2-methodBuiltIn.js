//Method 
// 1. Search
// Merupakan method yang digunakan untuk mencari apakah suatu str mengandung properti tertentu
// array.search(searchValue)
// contoh
let myArray = ['roti', 'bakso', 'sate']
for (i = 0; i < myArray.length; i++) {
    if (myArray[i].search('sate') == 0) {
        console.log(myArray[i]);
    }
}
// Penjelasan apakah mutasi atau tidak, parameter ada berapa

// 2. Concat
// Menambahkan string 1 ke string 2 dan mereturnnya
let str1 = "This is string one";
let str2 = "This is string two";
let str3 = str1.concat(str2);
console.log(str3);

// 3. charAt
// Mereturn huruf dari string berdasarkan index
let str = "This is string";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));

// 4. indexOf
// Mencari tau index ke berapa suatu string dalam string
// string.indexOf(searchValue)
// untuk searchValue merepresentasikan nilai yang ingin dicari
// Contoh

let string1 = "This is string one";
let index = string1.indexOf("string");
console.log("indexOf found String :" + index);


// 5. lastIndexOf
// Mencari tau index ke berapa suatu string dalam urutan string terakhir
let string5 = "This is string one and again string";
let index3 = string5.lastIndexOf("string");
console.log("lastIndexOf found String :" + index3);