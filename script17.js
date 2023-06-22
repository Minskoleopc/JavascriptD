// program 1
let birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})

console.log(q1)

// program 2

let mks = [12,33,44,55,66,77]
let q2 = mks.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)

// program 3
let numbers = [11,22,33]
let q3 = numbers.reduce(function(acc,el,index,arr){
    return acc  +  el // 66
},0)
console.log(q3)

// program 4

let cities = ["pune","mumbai","nagpur"]
 cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5
//               0 1  3  4 5
let numbersB =  [1,12,3,44,5]
let q5 =numbersB.filter(function(el,index,arr){
    return el > 10
})
console.log(q5)

let q6 =numbersB.find(function(el,index,arr){
    return el > 10
})
console.log(q6)

let q7 =numbersB.findIndex(function(el,index,arr){
    return el > 10
})
console.log(q7)

// map() , filter() , reduce(), forEach() , find(), findIndex()
// some() , each()


let r = [ 66,71,88,99 ,89,7]
let q8 = r.every(function(el,index,arr){
    return el > 60
})
console.log(q8)

let r2 = [ 66,71,88,99 ,89,7]
let q9 = r2.some(function(el,index,arr){
    return el > 600
})
console.log(q9)













