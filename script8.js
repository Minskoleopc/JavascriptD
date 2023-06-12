// program 1
let numbers = [33,44,5,6,7,8,9,8]
//[32,43,4,5,6,7,8,7]
let q1 = numbers.map(function(el,index,arr){
    return el - 1
})
console.log(q1)

// program 2
let transactions = [44,55,25,-56,-78,99,-45]
let q2 = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(q2)

let q3 = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(q3)

// program 3
let deposit = q2.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(deposit)

let withdrawl = q3.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(withdrawl)

// program 4
let cities = ["pune","nagpur","wardh"]

let q4  =cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q4)

// program 5
let marks = [11,33,44,55,4,55,22,55,66,77]
let q5 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q5)

// program 6
let q6 = marks.find(function(el,index,arr){
    return el > 50
})
console.log(q6)

// program 7
let q7 = marks.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q7)

// program 8 

let a = [12,44,66,77,88,66,88,12,34]
let q8 = a.every(function(el,index,arr){
    return el > 30
})
console.log(q8)

// program 9
let q9 = a.some(function(el,index,arr){
    return el > 300
})
console.log(q9)

// map() , filter() , reduce() , forEach()
// find(), findIndex(), every(), some()












