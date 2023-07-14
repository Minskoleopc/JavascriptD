let info = {
    // property ----------> string
    firstName: "chinmay",
    lastName: "deshpande",
    age: 23
}

let mapA = new Map()
console.log(mapA)


// set()

mapA.set(1, "chinmay")
mapA.set(true, "canDrive")
mapA.set('city', "pune")
console.log(mapA)

// get()
let q1 = mapA.get(true)
console.log(q1)

// delete 
mapA.delete(true)
console.log(mapA)

//has()
let q2 = mapA.has(1)
console.log(q2)

// clear()
mapA.clear()
console.log(mapA)


// let mapB = new Map()
// mapB.set(1,"admin")
// mapB.set(2,"customer")
// mapB.set(3,"support")
// mapB.set(4,"manager")
// console.log(mapB)


let mapC = new Map([
    [1, "admin"],
    [2, "customer"],
    [3, 'support'],
    [4, 'manager']

])

let q3 = mapC.size


console.log(mapC)

mapC.forEach(function(val,key){
   // console.log(val,key)
   if(key == 3){
        console.log(val)
   }
})

// for of
for(let key of mapC.keys()){
    console.log(key)
}

for(let val of mapC.values()){
    console.log(val)
}

for(let kv of mapC.entries()){
    console.log(kv)
}

// set ()

let numbers = [11,22,33,44,55,44,33,22,11]
// length
console.log(numbers)

let setA = new Set()
console.log(setA)

// program 1
setA.add(11)
setA.add(12)
setA.add(13)
setA.add(13)
console.log(setA)

// size
console.log(setA.size)

// has()
let q22 = setA.has(11)
let q23 = setA.has(33)
console.log(q22)
console.log(q23)

//clear
// setA.clear()
// console.log(setA)

setA.delete(11)
console.log(setA)

// reserve -------> chat gtp
console.log(setA.keys())
console.log(setA.values())
console.log(setA.entries())

setA.forEach(function(el){
    console.log(el)
})
















