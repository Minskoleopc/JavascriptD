
let amol = {
    firstName:"amol",
    lastName :"rao",
    age:23,
    rollNo:24
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:34
}

console.log(amol)
console.log(chinmay)

// 100 ----- 400 lines 


// program 2
class Person {
    firstName = undefined
    lastName  = undefined
    rollNo = undefined
    age = undefined

}
let amol2 = new Person()
console.log(amol2)
amol2.firstName = "amol2"
amol2.lastName = "rao2"
amol2.rollNo = 34
amol2.age = 44
console.log(amol2)


// program 2

class PersonC {

    constructor(fn, ln, age, rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.rollNo = rollNo
    }

}
let amol3 = new PersonC("amol3", "rao3",34,56)
let amol4 = new PersonC("amol3", "rao3",24,16)
let amol5 = new PersonC("amol3", "rao3",34,36)

console.log(amol3)
console.log(amol4)
console.log(amol5)

// program 3

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

    setRoll(rn){
        this.rollNo = rn
    }


}

let amol6 = new PersonD()
console.log(amol6)
amol6.setAge(12)
amol6.setFirstName("amol6")
amol6.setLastName("rao6")
amol6.setRoll(23)
console.log(amol6)

// 8:40 cypress
// batch 8 pm


