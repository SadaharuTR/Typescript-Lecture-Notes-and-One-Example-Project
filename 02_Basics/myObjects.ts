//basit bir Object tanımlama.
const user = {
    name: "cagatay",
    email: "cagatay@email.com",
    isActive: true
}

//Object'leri genelde fonksiyonlara veri gönderirken ya da fonksiyonlardan return ederken sıklıkla kullanırız.

function createUser({name: string, isPaid: boolean}) { 
    //input olarak object alan bir fonksiyon.
}
//createUser() //bu şekilde çağırırsak hata verir.
createUser({name: "cagatay", isPaid: false}) //Doğru yazım.

//createUser({name: "cagatay", isPaid: false, email:"c@email.com"})
//Eğer ki fonksiyon tanımından daha fazla property'i input olarak göndermek istersek hata alırız.
//bunu çözmek için;
let newUser = {name: "cagatay", isPaid: false, email: "c@email.com"} //şeklinde ekstra property'li bir Object oluşturup,
createUser(newUser) //fonksiyona yollayarak yazabiliriz.
//bu bize anlık bir çözüm getirir. Fakat ileride daha iyi çözüm yollarını göreceğiz.

//Fonksiyonun bir Object return etmesini istersek;

function createCourse(): {name: string, price: number} { //daima name ve price property'lerine sahip bir object dön demiş olduk.
    return {name: "Typescript", price: 399}
}
//bu şekilde yazmamız gerekli.

//---

// Type Aliases

//Type Alias mevcut veri tipleri yerine takma adlar oluşturmamızı sağlar. Bir veri türü için takma ad belirlediğimizde program boyunca o veri türünü kullanmak yerine oluşturduğumuz takma adı kullanabiliriz.

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUserTA(user: User): User { //User tipinde parametre alıp User tipinde return edecek bir fonksiyon.
    return {name: "", email: "", isActive: true}
}

createUserTA({name: "", email: "", isActive: true})

// Documentation'dan Örnek;

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("X koordinatları:" + pt.x)
    console.log("Y koordinatları:" + pt.y)
}

printCoord({ x: 100, y: 100 })

//---

// Readonly ve Optional (?)

type UserNew = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number //? ile bu değeri girmenin opsiyonel olduğunu belirttik.
}

let myUser: UserNew = {
    _id: "12345",
    name: "c",
    email: "c@c.com",
    isActive: false
}

myUser.email = "h@gmail.com" //tekrardan assign edilebilir, çünkü readonly değil.
//myUser._id = "5312" //Cannot assign to '_id' because it is a read-only property.ts(2540) //bu şekilde tsc işlemini yaparsak hata alırız.

let myUser2: UserNew = {
    _id: "12345",
    name: "c",
    email: "c@c.com",
    isActive: false
}

myUser2.creditCardDetails = 123 //opsiyonel. Yukarıda myUser'da vermedik, burada ise verdik.
myUser2.isActive = false

//---

type cardNumber = { //cardNumber isimli bir Type Alias oluşturduk ve bu tip kullanılırken cardnumber'ı string olarak istedik. 
    cardnumber: string
}

type cardDate = { ////cardDate isimli bir Type Alias oluşturduk ve bu tip kullanılırken cardDate'ı string olarak istedik.
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { 
    cvv: number
}
//burada ise cardDetails adı altında cardNumber ve cardDate'i birleştirdik ve ekstradan cvv: number'ı ekledik.
//yani yeni bir oluştururken önceden oluşturduğumuz 2 tiple, sonradan ekstra bir tip oluşturarak bu üçünü kombine ettik.

export {}