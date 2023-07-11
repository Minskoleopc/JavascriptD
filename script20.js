let chinmay  = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:13,
    rollNo:45
}
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:56
}
// 100 objects ------> 400 lines 

// program 1

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

}

// let amol2 = new Person()
// console.log(amol2)
// amol2.firstName = "amol"
// amol2.lastName = "rao"
// amol2.rollNo = 33
// amol2.age = 44
// // console.log(amol2)

// let chinmay2 = new Person()
// console.log(chinmay2)


// program 2

class Person2 {
    constructor(fn, ln, age , roll){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.rollNo = roll
    }

}

let  amol3 = new Person2("amol","rao",23,35)
let  chinmay3 = new Person2("chinmay","deshpande",23,35)
console.log(amol3)
console.log(chinmay3)
chinmay3.language = "hindi"
console.log(chinmay3)
console.log(amol3)


// program 3

class Person3 {

    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setRollNo(rn){
        this.rollNo = rn
    }

    setAge(ag){
        this.age = ag
    }

}

let mayuri  = new Person3()
mayuri.setFirstName("mayuri")
mayuri.setLastName("rao")
mayuri.setRollNo(23)
mayuri.setAge(34)
console.log(mayuri)





