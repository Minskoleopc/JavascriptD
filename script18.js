
//push()
//shift()
//unshift()
//pop()
//includes()
//indexOf()
// reverse()
// sort()
// concat()
// join()
// at()

// map()
// filter()
// reduce()
// forEach()
// find()
// findIndex()
// every()
// some()


// slice()

//            0       1         2       3       4        
let names = ["ram","satish","jagdeep","suhas","ramesh"]
//            -5     -4        -3         -2       -1
//names.slice(startIndex,EndIndex(not inclusive))
let q1 = names.slice(1)
console.log(q1)
let q2 = names.slice(1,4)
console.log(q2)
console.log(names.slice(1,-1))
console.log(names.slice(-5,-2))
console.log(names.slice(-5,3))
console.log(names.slice(4,1))

// sort()
let cities = ["pune","banglore","Kolkata","chennai"]
cities.sort()
console.log(cities)

// splice()
//              0       1        2        3        4
let fruits = ["apple","mango","banana","grapes","chikoo"]
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

//fruits.splice(startIndex,numOfElementsTobeDeleted)
// fruits.splice(2,1)
// console.log(fruits)

// fruits.splice(3,2)
// console.log(fruits)

// fruits.splice(1,2,"pineapple","jackfruit")
// console.log(fruits)

// fill()

//             0   1  2  3 4
let numbers = [11,22,33,44,55]
//console.log(numbers.fill(undefined,1))
console.log(numbers.fill('a',1,4))