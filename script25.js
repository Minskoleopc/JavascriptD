// oops 
// Object literal
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:12,
    rollNo:34
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:24,
    rollNo:34
}
console.log(amol)
console.log(chinmay)

// 100 -- object =======> 400 lines


// function constructor

function Person(fn,ln,ag,roll){
    this.firstName = fn
    this.lastName  = ln
    this.age = ag
    this.rollNo = roll
}

let amola = new Person("amol1","rao1",24,55)
let chinmaya = new Person("chinmaya","deshpandea",24,55)
console.log(amola)
console.log(chinmaya)

//retrive 
console.log(amola.firstName)
console.log(amola['firstName'])

// add 
amola.city = "pune"
amola['city'] = "nagpur"

// update 
amola.firstName = "ninad"
amola['lastName'] = "dani"

// delete 
delete amola.firstName

console.log(amola)
console.log(chinmaya)

// Es6 class


class PersonB {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.rollNo = rollNo
        this.age = ag
    }

}

let amolb = new PersonB("amolb","raob",12,45)
let chinmayb = new PersonB("chinmayb","deshpande",12,45)
console.log(amolb)
console.log(chinmayb)


// Object.create

let amol6 = Object.create({})
console.log(amol6)
amol6.firstName = "amol6"
amol6.lastName = "rao"
amol6.age = 12
amol6.rollNo = 12

console.log(amol6)







// Object Create


