//Bu derste gerçek hayatta karşımıza çıkabilecek farklı senaryolara uygun kodlar yazalım.

// if'in Type Guard Olarak Kullanımı;

//türü algılamaya yarayan bir algoritma.
function detectType (val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

//değer girilip girilmedi mi?
function provideId (id: string | null) {
    if (!id) { //null ise
        console.log("Lütfen id giriniz.")
        return
    }
    id.toLowerCase()
}

//girilen verinin türüne göre işlemler yapılsın.
function printAll (strs: string | string[] | null) {
    if (strs) { //buraya giriyorsa null değildir.
        if (typeof strs === "object") { //Array'ler de object tipinde sayılır.
            for (const s of strs) { //yani Array ise elemanlarını yazdır dedik.
                console.log(s)
            }
        } else if (typeof strs === "string") { //düz string ise de
            console.log(strs) //ekrana ver
        }
    }
    else
    console.log("Değer giriniz.")
}

let arr = ['Apple', 'Orange', 'Banana', "true"];
printAll(arr)

let str = "cagatay"
printAll(str)

let str2 = ""
printAll(str2)

//---

//interface'ler aracılığıyla belirlenen Type'lara ait bir property'nin hangisinde olup olmadığıyla ilgilenelim.
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) { //isAdmin property'sine sahip ise,
        return account.isAdmin //burayı yap.
    }
}

//---

//instanceof ile ilgili değişkenin new ile bir class'tan türetilip türetilmediğini kontrol ederiz.
let date: Date = new Date(); 
function logValue(x: Date | string) {
    if (x instanceof Date) { //Date class'ından türemişse,
        console.log(x.toUTCString());
    } else { //düz string ise,
        console.log(x.toUpperCase());
    }
}

logValue("cagatay") //CAGATAY
logValue(date) //Sat, 25 Feb 2023 01:38:07 GMT

//Type Predicates : Type Predicate'lar bir özel return türü olup, Typescript compiler'ına o anki değerin hangi tipte olacağını bildirirler.

type Fish = {swim: () => void}
type Bird = {fly: () => void}

// pet is Fish buradaki type predicate'dir.
function isFish (pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
    //eğer ki bu metot mevcutsa undefined olamaz.
}

// Type Predicate olarak belirtilen fonksiyonlar mutlaka boolean değer dönmelidir. Bu return değer true olduğu zaman Typescript return tipinin type predicate olarak yazılan tip olduğunu varsayar. 

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        //balık olduğu garanti
        pet //(parameter) pet: Fish olduğunu görmek için.
        return "fish food"
    } else {
        //kuş olduğu garanti
        pet //(parameter) pet: Bird
        return "bird food"
    }
}

//---

//Discriminated Union 

//kind burada discriminant property olarak görev yapar.
//üç interface'de de ortak olarak bulunur ve onları ayırt etmekte kullanılır.
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}
/*
type Shape = Circle | Square

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}
*/
//Exhaustiveness Checking

type Shape = Circle | Square | Rectangle

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return  Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width
        //tüm olası değerleri tükettik ve bundan emin olmak istiyoruz.
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
        //eğerki case "rectange": return ...'u yorum satırı haline getirirsek Type 'Rectangle' is not assignable to type 'never'.ts(2322) hatası alırız. Bunun sebebi never tipi her tipe assign edilebilir. Fakat hiçbir tip never'a assign edilemez.
    }
}

//-

function test(x: string | null) {
    if (x === null) {
      return
    }
    if (typeof x === 'string') {
      return;
    }
    x; // type of x is never the remainder of the function
  }