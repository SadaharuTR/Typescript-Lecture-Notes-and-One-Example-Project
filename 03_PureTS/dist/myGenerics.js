"use strict";
const score = [];
const names = [];
//bool ve number değer alıp bool ve number dönebilir.
function identityOne(val) {
    return val;
}
//her tipte veriyi alıp her tipte veri dönebilir.
function identityTwo(val) {
    return val;
}
//Type tipinde veri alıp, Type tipinde dönebilir.
function identityThree(val) {
    return val;
}
//bu şekilde kullanımın avantajı, eğer ki input'u number olarak belirtirsek otomatik olarak parametreyi ve dönüş tipini de number yapmasıdır.
identityThree(3); //function identityThree<3>(val: 3): 3
identityThree("cagatay"); //function identityThree<"cagatay">(val: "cagatay"): "cagatay"
identityThree(true); //function identityThree<true>(val: true): true
//biraz daha kısaltalım.
function identityFour(val) {
    return val;
}
console.log(identityFour({ brand: "Whiskey", type: 4 }).brand);
console.log(identityFour({ brand: "Whiskey", type: 40 }).type);
console.log(identityFour({ brand: "Whiskey", type: 4 }));
// Generics in Array and Arrow Functions
function logIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function logIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
//iki fonksiyon da aynı işi yapmaktadır. logIdentity fonksiyonları Type tipinde arg parametresi almaktadır ve aynı zamanda arg, Type türünden bir dizidir. Bu fonksiyonlar yine Type türünden arg dizisi döndürmektedir.
//T tipinde bir products dizisi alıp, T tipinde bir değer dönsün.
function getSearchProducts(products) {
    // veritabanı operasyonları...
    const myIndex = 3;
    return products[myIndex]; //dizinin 4. elemanını döndür.
}
//bu fonksiyonu Arrow Function'a dönüştürelim.
const getMoreSeatchProducts = (products) => {
    // veritabanı operasyonları...
    const myIndex = 3;
    return products[myIndex];
};
//U Extends Database yerine direkt Database de yazabilirdik. Ama bilgi bilgidir yani.
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "Sql", username: "cagatay", password: "123" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
//Bir nesnenin property'lerine erişmek için bir fonksiyon oluşturalım.
//keyof, oluşturduğumuz tip objelerindeki keyler ile yeni tipler oluşturmamıza olanak sağlar.
function getProperty(obj, key) {
    console.log(key);
    return obj[key];
    //bu satır için: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
}
let x = { a: 1, b: "caca", c: true, d: 3.4 };
getProperty(x, "d");
console.log(getProperty(x, "d"));
//console.log(getProperty(x, "z")); //hata
