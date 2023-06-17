

let x  = 10
console.log(x)


//             0          1        2     3       4
let names = ["chinmay","shirish","ram","sham","sarika"]
console.log(names)
//console.log(names[0])
//console.log(names[2])

// program 1
for(let i = 0 ; i < 5 ; i++){ // 1 // 2 //3 //4 //5
    //console.log(i) 
    console.log(names[i])
}
// i = 0
// i = 1
// i = 2
// i = 3
// i = 4

// program 2
//            0       1        2        3
let city = ["pune","wardha","nagpur","nashik"]
for(let i = 0 ; i < 4 ; i++){
    console.log(city[i])
}


// program 3 
for(let i = 3 ; i >= 0 ; i--){ // 2 // 1 // 0 // -1
    //console.log(i) // 3 // 2 // 1 // 0
    console.log(city[i])
}

// Type --- object ------ properties and method
// Array -- object ---- properties and method


// Human 
// Properties - age , color , height
// Method - walk() , talk()


// Vehicle
// Properties - color , regNo 
// Method - start() , stop()


// Bank
// Properties - accNo ,accName
// Methods - withdrawl(), deposit()

//              0        1       2        3        4
let fruits = ["apple","mango","banana","grapes","papaya"]
let r1 = fruits.length
console.log(r1)

for(let i = 0 ; i < fruits.length; i++){
    //console.log(i)
    console.log(fruits[i])

}

// Methods 

// Gym 
// Action --- excerxise
// Return --- health

// program 2
//              0         1      2     3
let country = ["India","China","USA","UK"]
// Push()
// action - add the element at last 
// return - new length of array
let q1 = country.push("Russia")
console.log(q1)
console.log(country)

// Program 3

// Unshift()
// Action - add the element at first
// return - new length 
//[ 'India', 'China', 'USA', 'UK', 'Russia' ]

let q2 = country.unshift('Srilanka')
console.log(q2)
console.log(country)

// Program 4

let cities2 = ["Pune","Banglore","Wardha","Nagpur"]

// Pop()
// Action removes the last element 
// return - same element

let q3 = cities2.pop()
console.log(q3)
console.log(cities2)


// Program5 

// Shift()
// Action removes the first element 
// return - same element
// [ 'Pune', 'Banglore', 'Wardha' ]

let q4 = cities2.shift()
console.log(q4)
console.log(cities2)






















