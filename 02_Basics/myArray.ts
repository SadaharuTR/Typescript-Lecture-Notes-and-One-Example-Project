//Arrays

const justaAnArray = [] //const justaAnArray: never[] olarak oluşturdu.
const superHeroesEmpty: [] = [] //daima boş bir array olsun. (sebebi neydi ki :)

const superHeroes: string[] = [] //superHeroes daima bir string array'i tipinde olsun.
const heroPowerLevel: number[] = [] //heroPowerLevel daima bir number array'i tipinde olsun.

//justaAnArray.push("spiderman") //never olduğu için herhangi bir push işlemi yapılamaz.
//superHeroesEmpty.push("spiderman") //hata çünkü boş bir array olsun istemiştik.

superHeroes.push("spiderman")
//heroPowerLevel.push("10") //string veremeyiz. number olarak belirttik.
heroPowerLevel.push(10)

//Bir başka Array tanımlama şekli daha vardır.

const heroArrayN: Array<number> = []
const heroArrayS: Array<string> = []
//ile de aynı işlemi gerçekleştirebiliriz.

//daha da ilerlersek;

type User = {
    name: string
    isActive: boolean
}

// Type Alias'lar konusunda gördüğümüz gibi custom olarak oluşturduğumuz bir türü de array türü olarak belirleyebiliriz.
const allUsers: User[] = []

//allUsers.push("") //Argument of type 'string' is not assignable to parameter of type 'User'.ts(2345)
//Çünkü User tipini içerisine name ve isActive adında iki property alan bir object olarak customize etmiştik.
allUsers.push({name: "", isActive: true}) //bu şekilde doğrusunu yazmış oluruz.

//---

//Multidimentional- Çok boyutlu Array'ler de tanımlayabiliriz.

const MLModels: number[][] = [
    [255, 255, 255],
    [3],
    [123]
]