 
// let info = ["chinmay","deshpande",27,45]
// let object  =  {
//     // key:value
//     // property:value
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:27,
//     rollNo:45
// }
//              0        1             2       3
let cities  = ["pune","banglore", "kolkata","chennai"]

// adding element to array
// cities.push('nagpur')
// cities.unshift("wardha")
// console.log(cities)

// update 
// cities[2] = "mysore"
// console.log(cities)

// retrive 
//console.log(cities[3])

// delete
// cities.pop()
// cities.shift()
// cities.splice(1,1)

// looping through
//           0       1           2         3
cities  = ["pune","banglore", "kolkata","chennai"]
for(let i = 0 ; i < cities.length ; i++){
    console.log(cities[i])
}

// Objects 

let student = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33
}

// program 1

// retrive (.dot notation and bracket notation)
console.log(student.firstName)
console.log(student['firstName'])

// update (.dot notation and bracket notation)
student.firstName = "tanmay"
student['firstName'] = "ninad"
console.log(student)

// add (.dot notation and bracket notation)
student.city = "pune"
student['language'] = "marathi"
console.log(student)

// delete (.dot notation and bracket notation)
delete student.firstName
delete student['lastName']
console.log(student)


let vehicle = {
    color:"red",
    name:"audi"
}

//retrive (.dot notation and bracket notation)
console.log(vehicle.color)
console.log(vehicle['color'])

// udapte(.dot notation and bracket notation)
vehicle.color = "blue"
vehicle['color'] = "green"

// add (.dot notation and bracket notation)
vehicle.city = "pune"
vehicle['reg'] = 123
console.log(vehicle)

// delete (.dot notation and bracket notation)
delete vehicle.color
delete vehicle['city']
console.log(vehicle)













