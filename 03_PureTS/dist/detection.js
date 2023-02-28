"use strict";
//Bu derste gerçek hayatta karşımıza çıkabilecek farklı senaryolara uygun kodlar yazalım.
// if'in Type Guard Olarak Kullanımı;
//türü algılamaya yarayan bir algoritma.
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
//değer girilip girilmedi mi?
function provideId(id) {
    if (!id) { //null ise
        console.log("Lütfen id giriniz.");
        return;
    }
    id.toLowerCase();
}
//girilen verinin türüne göre işlemler yapılsın.
function printAll(strs) {
    if (strs) { //buraya giriyorsa null değildir.
        if (typeof strs === "object") { //Array'ler de object tipinde sayılır.
            for (const s of strs) { //yani Array ise elemanlarını yazdır dedik.
                console.log(s);
            }
        }
        else if (typeof strs === "string") { //düz string ise de
            console.log(strs); //ekrana ver
        }
    }
    else
        console.log("Değer giriniz.");
}
let arr = ['Apple', 'Orange', 'Banana', "true"];
printAll(arr);
let str = "cagatay";
printAll(str);
let str2 = "";
printAll(str2);
function isAdminAccount(account) {
    if ("isAdmin" in account) { //isAdmin property'sine sahip ise,
        return account.isAdmin; //burayı yap.
    }
}
//---
//instanceof ile ilgili değişkenin new ile bir class'tan türetilip türetilmediğini kontrol ederiz.
let date = new Date();
function logValue(x) {
    if (x instanceof Date) { //Date class'ından türemişse,
        console.log(x.toUTCString());
    }
    else { //düz string ise,
        console.log(x.toUpperCase());
    }
}
logValue("cagatay"); //CAGATAY
logValue(date); //Sat, 25 Feb 2023 01:38:07 GMT
// pet is Fish buradaki type predicate'dir.
function isFish(pet) {
    return pet.swim !== undefined;
    //eğer ki bu metot mevcutsa undefined olamaz.
}
// Type Predicate olarak belirtilen fonksiyonlar mutlaka boolean değer dönmelidir. Bu return değer true olduğu zaman Typescript return tipinin type predicate olarak yazılan tip olduğunu varsayar. 
function getFood(pet) {
    if (isFish(pet)) {
        //balık olduğu garanti
        pet; //(parameter) pet: Fish olduğunu görmek için.
        return "fish food";
    }
    else {
        //kuş olduğu garanti
        pet; //(parameter) pet: Bird
        return "bird food";
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        //tüm olası değerleri tükettik ve bundan emin olmak istiyoruz.
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
        //eğerki case "rectange": return ...'u yorum satırı haline getirirsek Type 'Rectangle' is not assignable to type 'never'.ts(2322) hatası alırız. Bunun sebebi never tipi her tipe assign edilebilir. Fakat hiçbir tip never'a assign edilemez.
    }
}
//-
function test(x) {
    if (x === null) {
        return;
    }
    if (typeof x === 'string') {
        return;
    }
    x; // type of x is never the remainder of the function
}
