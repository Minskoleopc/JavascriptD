let x = 10
console.log(x)

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:22,
    rollNo:33
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:28,
    rollNo:22
}

console.log(amol)
console.log(chinmay)

// program 2
// template 
// class Person {
//     firstName = undefined
//     lastName = undefined
//     rollNo = undefined
//     age = undefined
// }


// let amol2 = new Person()
// console.log(amol2)
// amol2.firstName = "amol"
// amol2.lastName = "rao"
// amol2.rollNo = 12
// amol2.age = 23
// console.log(amol2)

// program 3

// class PersonB { 
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.age = age
//         this.rollNo = rollNo

//     }
// }

// let  amol4 = new PersonB("amol4","rao5",23,56)
// console.log(amol4)

// program 4

class PersonD {

    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }

}

let amol5 = new PersonD()
console.log(amol5)
amol5.setFirstName("amol5")
amol5.setLastName("rao5")
amol5.setAge(34)
amol5.setRollNo(36)
console.log(amol5)


class Vehicle {
    constructor(color,type){
        this.color = color
        this.type = type
    }
    displayColor(){
        console.log(this.color)
    }

}

let car1 = new Vehicle("red", "sedane")
let car2 = new Vehicle("black", "suv")
let car3 = new Vehicle("green", "mini")
let car4 = new Vehicle("yellow", "hatchback")
let car5 = new Vehicle("blue", "flat")


// let cars = [car1,car2,car3,car4,car5]
// for(let i = 0 ; i < cars.length ; i++){
//     cars[i].displayColor()
//     console.log(cars[i].type)
//     console.log(cars[i].color)
// }

let cars2 = [
    new Vehicle('black',"sedane"),
    new Vehicle('blue',"SUV")
]

for(let i = 0 ; i < cars2.length ; i++){
    console.log(cars2[i]['type'])
    console.log(cars2[i]['color'])
    //cars2[i].displayColor()
}











