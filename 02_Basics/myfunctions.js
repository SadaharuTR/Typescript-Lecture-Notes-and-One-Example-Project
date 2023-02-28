"use strict";
/*
function addTwo(num) {
    num.toUppercase() //yazabilirim. ve tsc ile js dosyasına aktardığımızda hatasız bir şekilde aktarır.
    return num + 2
}

addTwo(5) //addTwo("5") 'te çalışır.
//addTwo'nun üzerine geldiğimizde de function addTwo(num: any): any yazdığını görürüz.
//İstenen bir durum değil.
export{}
*/
// çözüm
/*
function addTwo(num: number) {
    //num.toUppercase() // Hata!
    return num + 2
}

addTwo(5) //addTwo("5") Hata!
//addTwo'nun üzerine geldiğimizde de function addTwo(num: number): number yazdığını görürüz.
//İstenen bir durum!
export{}
*/
exports.__esModule = true;
//Return'u daha etkili kullanmak gerekli. Fonksiyonları return ederken de tip güvenli hale getirebiliriz.
function addTwoWrong(num) {
    return "hello";
}
//hata yok ama mantıksız. Yapmamamız gerekliydi sanki.
//Düzeltelim,
function addTwo(num) {
    //return "hello" hata
    return num + 5;
}
//Peki ya birden fazla tipte değer return edebilecek bir metot var.
/*
function getValue(myVal: number):string {
    if(myVal > 5) {
        return true //burası hata verecek.
    }
    return "200 OK" //:string yerine boolean yazsaydık da burası hata verecekti.
}
//İleride daha detaylı anlatılacaktır.
*/
//Arrow Function ile;
var getHello = function (s) {
    return "";
};
var heroes = ["Lucifer Morningstar", "Mr.Manhattan", "Batman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
var heroes2 = [1, 2, 3];
heroes2.map(function (hero) {
    return "hero is ".concat(hero);
});
/*
//yani burada,
heroes.map(hero: string => { //ya da heroes2 için number.
    return `hero is ${hero}`
})
//yazmamıza gerek yok. Typescript parametreleri ve işlem yapılan array'in içindeki elemanların türlerini anlar.
*/
//peki return işin içine girerse;
var heroes4 = ["Lucifer Morningstar", "Mr.Manhattan", "Batman"];
heroes4.map(function (hero) {
    return "hero is ".concat(hero);
});
//bu daha tercih edilir bir syntax'dir.
//Örnekleri genişletelim;
//Void Kullanımı
function consoleError(errMsg) {
    console.log(errMsg);
}
//Fakat manuel olarak bunu belirtmek daha iyi bir syntax tercihi olacaktır.
function consoleErrorBetter(errMsg) {
    console.log(errMsg);
    //return 1 //hata verir. //çünkü void yazarak bu fonksiyonun bir değer döndürmeyeceğini garanti altına almış olduk.
}
//Örnekleri genişletelim;
//Never Kullanımı:
//Sadece typescript’e has bir veri tipidir. Herhangi bir değer dönmeyecek veya hataya düşme olasılıkları olan geri dönüşler için kullanılır.
function handleError(errMsg) {
    throw new Error(errMsg);
}
//Void - Never Farkı
//Void tanımsız (undefined) veya boş (null) bir değerde olabilir. Never benzer herhangi bir değer alamaz.
//Detaylar: https://www.kemalsahin.com/docs/typescript-egitimi/
//İleride bir detayı daha gösterilecek.
