"use strict";
/*
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getReelTime(): number {
        // bla bla code code
        return 8
    }
}

//bir class'ı abstract olarak belirttiğimizde ondan nesne-object türetemeyiz.
//const cagatay = new TakePhoto("test", "Test")

// Fakat o class'ı kalıtım alan bir başka class'tan,
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepya: Mürekkepbalığından elde edilen koyu siyah boya.")
    }
}
// nesne üretebiliriz.
const cagatay = new Instagram("test", "Test", 3)
cagatay.getReelTime()
*/
//-
/*
abstract class Veritabani {
    listele() {
        console.log("Her veritabanına ayrı listeleme işlemi yapılır.")
    }
    abstract ekleme(): void
}

class Sql extends Veritabani {
    ekleme() {
        console.log("Sql veritabanına göre eklendi.")
    }
}

class MongoDB extends Veritabani {
    ekleme() {
        let name = "Cagatay"
        name += " Demirtaş"
        console.log(`${name} tarafından MongoDB veritabanına göre eklendi.`)
    }
    
}

function VeritabaniEkleme(param1: Veritabani) {
    param1.ekleme()
    param1.listele()
}

VeritabaniEkleme(new Sql())
VeritabaniEkleme(new MongoDB())
*/
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, code) {
        super(name); // zorunlu super()
        this.empCode = code;
    }
    find(name) {
        return new Employee(name, 10);
    }
}
let emp = new Employee("James", 100);
emp.display(); //James
console.log(emp.find("Josh").display()); //Josh
let emp2 = new Employee("Mike", 1000);
console.log(emp2.empCode);
