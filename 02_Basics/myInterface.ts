//Interface
/*
//Örnek;
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string //opsiyonel
    //startTrial: () => string //string return edecek bir fonksiyon, farklı bir şekilde de tanımlanabilir.
    startTrial(): string //üsttekinin aynısı.
    getCoupon(couponName: string, value: number): number //string ve number parametreler alan, number return eden bir fonksiyon.
}

//Yukarıdaki interface şemasını kullanarak bir değişken oluşturalım.
const cagatay: User = { 
    dbId: 11, 
    email: "c@gmail.com", 
    userId: 2213,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "save10", off: 10) => { //yukarıdaki couponName ya da value ile eşleşmesine gerek yok. Yukarıda sadece ana şemayı belirtiyoruz.
        return 10
    }
}

cagatay.email = "acd@gmail.com"
//cagatay.dbId = 1234 //hata çünkü readonly
*/

//---

//Interface'e Sonradan Property Ekleme - Reopening the Interface

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string 
    startTrial(): string 
    getCoupon(couponName: string, value: number): number 
}

// Diyelim ki yukarıda oluşturduğumuz User interface'ine yeni property'ler eklememiz gerekti.

interface User {
    githubToken: string //bu şekilde ekleyebiliriz.
}

const cagatay: User = { 
    dbId: 11, 
    email: "c@gmail.com", 
    userId: 2213,
    githubToken: "github123", //zorunlu yaptığımız için oluşturduğumuz cagatay değişkeninde de değerini girmemiz gerekli.
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "save10", off: 10) => {
        return 10
    }
}

// Interface ile Kalıtım

interface Admin extends User { //User'dan kalıtım alan Admin interface'i
    role: "admin" | "administrator" | "yonetici" //bu 3 değerden birini kesin olarak almalıdır dedik.
}

//Artık Admin arayüzü User'a ait tüm property'leri kullanabilecektir.

const cagatayA: Admin = { 
    role: "admin",
    dbId: 11, 
    email: "c@gmail.com", 
    userId: 2213,
    githubToken: "github123", //zorunlu yaptığımız için oluşturduğumuz cagatay değişkeninde de değerini girmemiz gerekli.
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "save10", off: 10) => {
        return 10
    }
}

//Type Aliases ile Interface'in farkı: Çok benzerlerdir. Bütün interface özellikleri type'da da bulunur. Tek farkı yukarıda anlattığımız gibi
//type'lar sonradan açılıp yeni property'ler eklenemezken, interface'lerde bu gayet yapılabilir bir özelliktir.

// Not: Type'lar ile kalıtımı şu şekilde uygulayabiliriz.
type Animal = { 
    name: string
}
type Bear = Animal & { //& işareti ile.
    honey: boolean
}

