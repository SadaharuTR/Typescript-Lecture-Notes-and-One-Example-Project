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

//string'ler ile çalışalım.
/*
function getUpper(val) { //Parameter 'val' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
    return val.toUpperCase()
}

getUpper(4) //yine çalıştı. Ama ideal bir durum değil.
*/

//string'ler ile çalışalım.
/*
function getUpper(val:string) { //Parameter 'val' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
    return val.toUpperCase()
}

//getUpper(4) //Hata!
getUpper("cagatay")
getUpper("4")
*/

// örneği genişletelim;

// function signUpUser(name, email, isPaid) { //üç parametre de any ile işaretlendi.
// }
/*
function signUpUser(name: string, email:string, isPaid: boolean){

}

signUpUser(1,2,3) //aslında üç parametre de hatalı girildi. Fakat kodumuzda sadece 1'in altı çizili olduğunu görürüz.
//bunun sebebi tek seferde bir hata vermesidir. Hata çözüldükten sonra diğer hatalara geçecektir. 1 yerine string yazdığımızda 2'nin
//2'nin hatasını düzelttiğimizde 3'ün hatası gelecektir.
*/
/*
//Doğrusu;
function signUpUser(name: string, email:string, isPaid: boolean){

}

signUpUser("cagatay", "cagatay@gmail.com" , true) 

*/

//Arrow Functions;

//let loginUser = (name: string, email: string, isPaid: boolean) => {}
//loginUser("cagatay", "cagatay@gmail.com") // An argument for 'isPaid' was not provided. hatası alınır.
/*
//Default bir değer verilmeli.
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("cagatay", "cagatay@gmail.com")

*/
export{}

//Return'u daha etkili kullanmak gerekli. Fonksiyonları return ederken de tip güvenli hale getirebiliriz.

function addTwoWrong(num: number) {
    return "hello"
}
//hata yok ama mantıksız. Yapmamamız gerekliydi sanki.

//Düzeltelim,

function addTwo(num: number):number {
    //return "hello" hata
    return num + 5
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

const getHello = (s: string): string => {
    return ""
}

const heroes = ["Lucifer Morningstar", "Mr.Manhattan", "Batman"]

heroes.map(hero => { //hero: string olduğunu görürüz. Çünkü yukarıdaki Array string'lerden oluşan bir array.
    return `hero is ${hero}`
})

const heroes2 = [1, 2, 3]
heroes2.map(hero => { //hero: number olduğunu görürüz. Çünkü heroes2 array'i number'lerden oluşan bir array.
    return `hero is ${hero}`
})
/*
//yani burada,
heroes.map(hero: string => { //ya da heroes2 için number.
    return `hero is ${hero}`
})
//yazmamıza gerek yok. Typescript parametreleri ve işlem yapılan array'in içindeki elemanların türlerini anlar.
*/

//peki return işin içine girerse;

const heroes4 = ["Lucifer Morningstar", "Mr.Manhattan", "Batman"]

heroes4.map((hero): string => { //burada return edilecek değerin string olacağını garanti altına almış olduk.
    return `hero is ${hero}`
})
//bu daha tercih edilir bir syntax'dir.

//Örnekleri genişletelim;
//Void Kullanımı
function consoleError(errMsg: string) { //consoleError'un üzerinde gelirsek, function consoleError(errMsg: string): void yazdığını görürüz.
    console.log(errMsg)
}
//Fakat manuel olarak bunu belirtmek daha iyi bir syntax tercihi olacaktır.

function consoleErrorBetter(errMsg: string):void {  
    console.log(errMsg)
    //return 1 //hata verir. //çünkü void yazarak bu fonksiyonun bir değer döndürmeyeceğini garanti altına almış olduk.
}

//Örnekleri genişletelim;
//Never Kullanımı:
//Sadece typescript’e has bir veri tipidir. Herhangi bir değer dönmeyecek veya hataya düşme olasılıkları olan geri dönüşler için kullanılır.

function handleError (errMsg: string):never {
    throw new Error(errMsg)
}

//Void - Never Farkı
//Void tanımsız (undefined) veya boş (null) bir değerde olabilir. Never benzer herhangi bir değer alamaz.
//Detaylar: https://www.kemalsahin.com/docs/typescript-egitimi/
//İleride bir detayı daha gösterilecek.