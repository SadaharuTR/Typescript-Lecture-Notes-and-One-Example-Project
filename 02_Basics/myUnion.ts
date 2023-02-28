// Union işlemleri eğer ki gelen verinin türünden emin değilsek (sayı olabilir, string olabilir, hatta ikisi de olabilir) any kullanmak yerine
// kullandığımız işlemlerdir.

let score: number | string = 33 //score değişkeni sayı ya da string olabilir demiş olduk.

score = "cagatay"
score = 44
score = "55"

//Örnek;

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let cagatay: User | Admin = { //cagatay adlı değişkenin türü User ya da Admin türünde olabilir dedik.
    name: "cagatay", //burada User'ı esas alarak property'lerini doldurduk.
    id: 334
}

//daha sonra ise Admin'i esas alarak veriyi manipüle edebiliriz.
cagatay = { username: "ahmet", id: 44} 

// Fonksiyonlara da uygulanabilir.
/*
function getDbId(id: number | string) { //id parametresi number ya da string olabilen bir fonksiyon tanımladık.
    console.log(`Db id is: ${id}`);
}

getDbId(3) //3 sayısı da gönderebiliriz.
getDbId("3") //"3" string'i de.
*/

// Fakat parametre üzerindeki işlemlerde string veya integer'a ait metotları kullanmaya çalışırsak hata alırız.
/*
function getDbId(id: number | string) { 
    id.toLowerCase() //id sayı ya da string olabilir dememize rağmen hata aldık.
}
*/
//hatanın içeriğine bakarsak: Property 'toLowerCase' does not exist on type 'string | number'.
//Property 'toLowerCase' does not exist on type 'number'.

//Bunu çözmek için;
function getDbId(id: number | string) { 
    if (typeof id === "string") { //if yapısı ile string olma durumunu garanti alarak çözebiliriz.
        id.toLowerCase()
    }
    //geri kalan olsalılıklar zaten if'in dışında kaldı.
}

// Array'ler ile kullanımı;

//const data: number[] = [1, 2, 3, "4"] //olmaz.
//const data: string[] = ["1", "2", "3", 4] //ooolmaaz.

const data: number [] = [1, 2, 3]
const data2: string[] =["1", "2", "3"]
//const data3: string | number [] = ["1", "2", "3"] //classic rookie mistake - çömez hatası.
//const data3: string[] | number [] = ["1", "2", 3] //e yine olmadı. Çünkü burada ya tamamı string ya da tamamı sayıdan oluşan Array'ler kullan dedik.

const data3: (string | number)[] = ["1", "2", 3] //sonunda burada içerisinde string veya number elemanlar olmasına izin verilen bir Array tanımlayabildik.

const data4: (string | number | boolean)[] = ["1", "2", 3, true] //yapılabiliyor yani. Pek bir amacı yok.
const data4any: any[] = ["1", "2", 3, true] 
//yukarıdaki ile aynı işlemi yaptık. Fakat Typescript'in tüm olayı zaten kodumuzu daha mutlak-kuralcı yapmak.
//o yüzden any'i pek kullanmamak lazım.

//-

// Değişkenlere değer atarken de aynı mantığı kullanabiliriz.

// Diyelim ki elimizde sadece atanan sayıda kalmasını istediğimiz bir değişkenimiz var.

let pi: 3.14 = 3.14
//pi = 3.145 hata.
//bu şekilde de pi sadece 3.14 olsun diyebiliriz. Fakat bu pek yararlı bir kullanım olmadı.

// Daha yararlı bir kullanım;
// Diyelim ki bir uçakta yer ayırtma ekranındayız,

let seatAllotment: "cam kenarı" | "orta" | "koridor"

seatAllotment = "orta"
// seatAllotment = "yerde" //sadece yukarıda belirlenen üç değeri alabilir. yerde oturamazsın!
