//Enums

//kötü kod. ya birisi gelip değerleri değiştirirse?
/*
const AISLE = 0
const MIDDLE = 1
const WINDOW = 2
let seatChoice

if (seatChoice === AISLE) {
    //işlemler işlemleri
}
*/

//enum'lar ile,
//iyi kod.
/*
enum seatChoice {
    AISLE, //(enum member) seatChoice.AISLE = 0
    MIDDLE, //(enum member) seatChoice.MIDDLE = 1 
    WINDOW,
    ECO_AISLE
}

const hcSeat = seatChoice.AISLE
const hcSeat2 = seatChoice.ECO_AISLE
*/
/*
//0'dan başlamasın da isteyebiliriz.
enum seatChoice {
    AISLE = 10, //(enum member) seatChoice.AISLE = 10
    MIDDLE, //(enum member) seatChoice.MIDDLE = 11 
    WINDOW,
    ECO_AISLE
}

const hcSeat = seatChoice.AISLE
const hcSeat2 = seatChoice.ECO_AISLE
*/
/*
//10'dan başlasın ama artık sırasına uymayalım,
enum seatChoice {
    AISLE = 10, //(enum member) seatChoice.AISLE = 10
    MIDDLE = 22, //(enum member) seatChoice.MIDDLE = 22
    WINDOW, //(enum member) seatChoice.WINDOW = 23
    ECO_AISLE
}

const hcSeat = seatChoice.AISLE
const hcSeat2 = seatChoice.ECO_AISLE
*/

//Fakat string bir değer atamak istediğimizde tüm elemanlara değer vermek zorundayız. 
//Çünkü string ifadelerde sayılardaki gibi otomatik artış belirleyemiyor.

enum seatChoice {
    AISLE = "koridor", //(enum member) seatChoice.AISLE = 10
    MIDDLE = "orta", //(enum member) seatChoice.MIDDLE = 22
    WINDOW = "camKenari", //(enum member) seatChoice.WINDOW = 23
    ECO_AISLE = "ekonomikKoridor",
    ECO_MIDDLE = 0, //tekrar sayı da verebiliriz. Otomatik artış devam edecektir.
    ECO_WIND0W // (enum member) seatChoice.ECO_WIND0W = 1
}

const hcSeat = seatChoice.AISLE
const hcSeat2 = seatChoice.ECO_AISLE


export{}