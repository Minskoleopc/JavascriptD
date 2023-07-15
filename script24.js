
let names = ["chinmay","ram","sarika","poorva"]

// let q1 = names[0]
// let q2 = names[1]
// let q3 = names[2]
// let q4 = names[3]

// console.log(q1)
// console.log(q2)
// console.log(q3)
// console.log(q4)

// Destructure

let [x1,x2,x3,x4] =  names
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

// program 2
//               0        1       2       3
let fruits = ["apple","mango","banana","grapes"]
let [y1,y2,y3,y4] = fruits
console.log(y1)
console.log(y2)
console.log(y3)
console.log(y4)

// program 3

let states = [
    ["nagpur","pune"],
    ["jaipur","udaipur"],
    ["lucknow","varasani"]
]
let [[c1,c2],[c3,c4],[c5,c6]] = states
// console.log(s1)
// console.log(s2)
// console.log(s3)

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)
console.log(c5)
console.log(c6)

// program 4
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}
let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)

// program 5

let vehicle = {
    color:"green",
    type:"sedane"
}

let {color,type} = vehicle
console.log(color)
console.log(type)

// program 6
let family = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName,parent:{mother,father}} = family
console.log(fullName)
console.log(mother)
console.log(father)


// python ----
// java   ----







