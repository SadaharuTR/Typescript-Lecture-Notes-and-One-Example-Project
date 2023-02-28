"use strict";
exports.__esModule = true;
//basit bir Object tanımlama.
var user = {
    name: "cagatay",
    email: "cagatay@email.com",
    isActive: true
};
//Object'leri genelde fonksiyonlara veri gönderirken ya da fonksiyonlardan return ederken sıklıkla kullanırız.
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    //input olarak object alan bir fonksiyon.
}
//createUser() //bu şekilde çağırırsak hata verir.
createUser({ name: "cagatay", isPaid: false }); //Doğru yazım.
//createUser({name: "cagatay", isPaid: false, email:"c@email.com"})
//Eğer ki fonksiyon tanımından daha fazla property'i input olarak göndermek istersek hata alırız.
//bunu çözmek için;
var newUser = { name: "cagatay", isPaid: false, email: "c@email.com" }; //şeklinde ekstra property'li bir Object oluşturup,
createUser(newUser); //fonksiyona yollayarak yazabiliriz.
//bu bize anlık bir çözüm getirir. Fakat ileride daha iyi çözüm yollarını göreceğiz.
//Fonksiyonun bir Object return etmesini istersek;
function createCourse() {
    return { name: "Typescript", price: 399 };
}
function createUserTA(user) {
    return { name: "", email: "", isActive: true };
}
createUserTA({ name: "", email: "", isActive: true });
function printCoord(pt) {
    console.log("X koordinatları:" + pt.x);
    console.log("Y koordinatları:" + pt.y);
}
printCoord({ x: 100, y: 100 });
var myUser = {
    _id: "12345",
    name: "c",
    email: "c@c.com",
    isActive: false
};
myUser.email = "h@gmail.com"; //tekrardan assign edilebilir, çünkü readonly değil.
