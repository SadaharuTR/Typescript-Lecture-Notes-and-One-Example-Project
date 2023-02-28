/*
interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

//aşağıda interface'de belirtilen property'leri kullanmaz isek hata alırız.
//interface'ler tanım barındırmaz. Sadece bize kullanılması zorunlu bir şema
//belirtirler. Bu şemada belirtilenden eksik property kullanılamaz.
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        //ekstra'dan eklemeler yapabiliriz.
        public shorts: string
    ){}
    //Eğer ki Story interface'ini de kullanmak istersek, her nasıl TakePhoto'daki property'leri kullanmak zorunda kaldıysak, Story'nin içerisinde belirtilen createStory() metodunu da kullanmak zorundayız. 
    //Metot ve property'lerin aynı isimde olmasına dikkat edilmelidir. Yoksa hata alınır.
    createStory(): void {
        console.log("Hikaye paylaşımı yaratıldı.")
    }
}
*/