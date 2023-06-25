//       
let info2 = ["chinmay","deshpande", 33 , 45]
// console.log(info2)

// // retrive
// console.log(info2[0])
// // add
// info.push(7709192441)
// info.unshift('Mr')
// // update 
// info2[2] = "dani"
// // delete
// info2.pop()
// info2.shift()

// info2.splice(2,1)
// let cities = ["pune","mumbai","chennai","kolkata"]
// for(let i = 0 ; i < cities.length ; i++){
//     console.log(i)
//     console.log(cities[i])
// }


// object - {}
let info3 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    rollNo:45
}

// retrive  (dot notation &&  bracket notation)
console.log(info3.firstName)
console.log(info3['firstName'])
console.log(info3.lastName)
console.log(info3['age'])

// update (dot notation &&  bracket notation)
info3.firstName = "shirish"
info3['lastName'] = "dani"
// add (dot notation &&  bracket notation)
info3.city = "mumbai"
info3['language'] = "hindi"

// delete (dot notation &&  bracket notation)

delete info3.firstName
delete info3['lastName']
console.log(info3)