//Tuples

//burada önceki derslerdeki gibi sadece string veya sayı alabilecek bir dizi belirttik.
const user: (string | number)[] = ["cd"]

//burada ise Tuple ile türü yazılan sırada girilmesi gereken bir dizi belirttik.
let userT: [string, number, boolean]
userT = ["cd", 113, true]
//userT = [true, 132, "cd"] //hata.
//Bu özellikle API uygulamalarında gelen-giden verinin belirli sırada işlenmesi gereken durumlarda işe yaramaktadır.

//

let rgb: [number, number, number] = [255, 123, 112]
let rgbOpacity: [number, number, number, number] = [255, 123, 112, 0.5]

// Tür tanımlamasında da kullanılabilir.

type User = [number, string] //bu şekilde tanımladığımızda yazılan sırada tanımlanmasını şart koyduk.
const newUser: User = [1123, "example@outlook.com"] //bu türden bir değişken oluşturduğumuzda bu sırayı izlememiz şart.
// const newUser2: User = [1123, "example@", true] //hata
// const newUser3: User = ["1123", 112] //hata

//Ayrıca veriyi sonradan manipüle de edebiliriz.
newUser[0] = 456
newUser[1] = "mymail@gmail.com"

// Dikkat edilmesi gereken noktalar var. Bunlardan biri de push metodunun kullanımı.
//newUser.push(true) //hata
//aşağıdaki kullanımlar hata vermeyecektir. Fakat yukarıda belirlediğimiz sınırlamalara tam olarak uydukları da söylenemez.
newUser.push(1)
newUser.push("newmail@mail.com")
newUser.push(123, "newmail@mail.com")
newUser.push("123", 123)

export{}