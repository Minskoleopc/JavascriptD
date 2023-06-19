

// property -----> 
//length
// shift()
// unshift()
// pop()
// push() 


// ------------------- program 1----------------------
//             0          1        2       3      4
let names = ["chinmay", "poorva", "sarika", "ram", "satish"]
// program1 
for (let i = 0; i < names.length; i++) {
    //console.log(i)
    console.log(names[i])
}

// program 2

for (let i = names.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(names[i])
}

// program 3
let fruits = ["apple", "mango", "banana"]
let q1 = fruits.push('grapes')
console.log(q1)
console.log(fruits)

// program 4
let q2 = fruits.unshift('chikoo')
console.log(q2)
console.log(fruits)

// program 5

let q3 = fruits.pop()
console.log(q3)
console.log(fruits)

// program 6
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

// push() , pop() , shift() , unshift()
//                  0         1        2         3
let vegetable = ["cabbage", "carrot", "brinjal", "tomato"]
let q5 = vegetable.includes('Brinjal')
console.log(q5)

// indexOf()
let q6 = vegetable.indexOf('carrot')
console.log(q6)
let q7 = vegetable.indexOf('Carrot')
console.log(q7)

//at()
//             0  1  2  3
let numbers = [11, 22, 33, 44]
let q8 = numbers.at(2)
console.log(q8)

//concat()

let a = [11, 22, 33]
let b = [44, 55, 66]

let q9 = a.concat(b)
console.log(q9)

let q10 = b.concat(a)
console.log(q10)

// reverse()
//               0         1          2            3 
let country = ["india", "pakistan", "bangladesh", "srilanka"]
let q11 = country.reverse()
console.log(q11)

// join()
let info = ["chinmay","deshpande",7709192441]
let q12 = info.join('@')
console.log(q12)





























