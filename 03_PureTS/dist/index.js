"use strict";
//TS'de Class-Sınıf
/*
class User {
    email: string
    name: string
    city: string = ""
    constructor(email:string , name: string) {
        this.email = email;
        this.name = name
    }
}

const cagatayUser = new User("c@email.com", "cagatay")
cagatayUser.city = "Mersin"
*/
//
/*
class User {
    email: string
    name: string
    readonly city: string = "Mersin"
    constructor(email:string , name: string) {
        this.email = email;
        this.name = name
    }
}

const cagatayUser = new User("c@email.com", "cagatay")
//cagatayUser.city = "Mersin" //hata, erişilebilir ama set edilemez.
// set edilemez -> veri atanamaz, silinemez, güncellenemez...
*/
//Eğer ki hem erişilemez hem de set edilemez yapmak istersek.
/*
class User2 {
    email: string
    name: string
    private readonly city: string = "Mersin"
    constructor(email:string , name: string) {
        this.email = email;
        this.name = name;
        //this.city ile class içerisinden erişebiliriz.
    }
}
const cagatayUser2 = new User2("c@email.com", "cagatay")
//cagatayUser2. dediğimizde sadece email ve name'e erişebiliriz.
//çünkü private keyword'ü sayesinde city'i sadece class içerisinden erişilebilir hale getirdik.
//#name: string = "Cagatay" //#'da private için kullanılan bir syntax'dir.
*/
/*
//Public

//Public ile işaretlemediğimiz her şey default olarak public'tir.

class User3 {
    public email: string
    public name: string
    readonly city: string = "Mersin"
    constructor(email:string , name: string) {
        this.email = email;
        this.name = name;
    }
}
const cagatayUser3 = new User3("c@email.com", "cagatay")

// kod çok uzun. daha kısa ve okunabilir yazmak mümkün.

class UserShort {
    readonly city: string = "Mersin"
    constructor(
        public email:string,
        public name: string
        ){
            //kodlar
    }
}
const cagatayUserShort = new UserShort("c@email.com", "cagatay")

//JS dosyasına baktığımızda User3 class'ı ile UserShort class'ının aynı kodu oluşturduğunu görürüz.
*/
/*
class UserShortDetailed {
    readonly city: string = "Mersin"
    constructor(
        public email:string,
        public name: string,
        private userId: string
        ){
            //kodlar
    }
}
const cagatayUserSD = new UserShortDetailed("c@email.com", "cagatay", "Adana")

//cagatayUserSD.userId
//Property 'userId' is private and only accessible within class 'UserShortDetailed'.ts(2341)
*/
// Getters and Setters - Alıcılar ve Ayarlayıcılar
/*
class User {
    private _courseCount = 1
    //sitemize kayıt olan kişi en az bir kurs almış olsun.
    readonly city: string = "Mersin"
    constructor(
        public email: string,
        public name: string,
        ){
    }
    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
        //email'i apple ile birleştirip return ettik.
    }
    // setter
    get courseCount(): number {
        return this._courseCount
    }
    //A 'set' accessor cannot have a return type annotation.ts(1095)
    // set courseCount(courseNum): void {
    // }
    // set ile return tipi aynı mekanda çay bile içemez.

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error ("Alınan kurs sayısı 1'den fazla olmalı.")
        }
        this._courseCount = courseNum
    }

    // ek olarak private metotlarımız da bulunabilir.
    private deleteToken() { //class dışından erişilemez bir metot.
        console.log("Girdi silindi.")
    }
}

let user = new User("at@gmail.com", "Cagatay");
user.courseCount
user.courseCount = 2
console.log(user.getAppleEmail)
*/
/* Kısaca özetlersek;
getter: Bu metot bir object'in peroperty'lerine erişmekte kullanılır. Accessor olarak da adlandırılır.
setter: Bir object'in propert'sini değiştirmek istediğimizde kullanırız. Mutator olarak da bilinir.

nesneAdi.propName yazıldığında get propName() {} çalışır.
nesneAdi.propName = value yazıldığında set propName() {} çalışır.

//Daha fazla örnek için;
//https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
*/
// Protected
// Kalıtım alınan class'lardaki 'private olarak işaretlenmişler harici' her property veya metodu alan class'ta kullanabiliriz. 
// -> basitçe private _courseCount = 1 yerine,
// protected _courseCount = 1 yazarsak,
// hem kullanıldığı class'ta hem de o class'ı kalıtım alan class'larda kullanılabilir olduğunu belirtmiş oluruz.
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Mersin";
    }
    // getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // setter
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Alınan kurs sayısı 1'den fazla olmalı.");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Girdi silindi.");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4
        // Property '_courseCount' is private and only accessible within class 'User'.ts(2341) hatasını alırız. 
        // bunu çözmek için yukarıda ->
    }
}
