//let greetings: string yazıp bırakırsak sadece değişkeni tanımlamış oluruz.

let greetings: string = "Cagatay Demirtas"

greetings.toLocaleUpperCase()
console.log(greetings)

export{} //alınan hatayı geçiçi olarak gidermek için. (ileride detaylı)


// number

let userId: number = 3334455
let userId2: number = 3334455.3
userId2.toFixed()
//userId = "cagatay" hata!
//userId. yazdığımızda sayılara ait metotların sıralandığını görürüz.

// boolean

let isLoggedIn: boolean = false
//isLoggedIn.valueOf 'dan başka fonksiyonu da yok zaten.

//------

//any
/*
let hero;

function getHero() {
    return "Rorschach" //true'da yazabilirdik. 33'de yazabilirdik.
}

hero = getHero()

// Şu anda let hero: any olarak kaldı. Typescript hangi tür geleceğini bilemediği için any kullandı.
// Bu Typescript'te tam olarak istenen bir durum değil.
*/

let hero: string;

function getHero() {
    return "Rorschach" //return true hata verecektir!
}

hero = getHero()

//noImplicitAny

//Typescript'in any olarak belirlediği anda hata vermesini istersek tsconfig ayarlarından noImplicitAny'i aktif edersek;
//This can cause some errors to be missed, for example:
/*
function fn(s) {
  // Hata yok. s burada any olarak belirlendi.
  console.log(s.subtr(3));
}
fn(42);
*/
//Aktif edildikten sonra;

function fn(s) {
    // Parameter 's' implicitly has an 'any' type. hatası verecektir.
    console.log(s.subtr(3));
  }
fn(42);