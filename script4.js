//console.log(4 === '4')

// Logical operator

// AND --- && 

// true     &&      true    ======> true
// false    &&      true    ======> false
// true     &&      false   ======> false
// false    &&      false   ======> false

console.log(4 === 4 &&  8 !== '8')
console.log(4 !== 4 &&  8 !== '8')
console.log(4 === 4 &&  8 === '8')
console.log(4 !== 4 &&  8 === '8')

// OR -- ||

// true     ||      true    ======> true
// false    ||      true    ======> true
// true     ||      false   ======> true
// false    ||      false   ======> false


console.log(4 === 4 ||  8 !== '8')
console.log(4 !== 4 ||  8 !== '8')
console.log(4 === 4 ||  8 === '8')
console.log(4 !== 4 ||  8 === '8')

// NOT
// true  -----> false 
// false -----> true 

console.log(!(7 === 7))
console.log(!(7 !== 7))

// Conditional statements
// one input ----> multiple outcomes
// numT > 0  && numT <= 5   ======> 10 % discount
// numT > 5  && numT <= 10  ======> 20 % discount
// numT > 10                ======> 30 % discount

// if(condition){
//     //statement
// }

let numT = -1
// if(numT > 0 && numT <= 5){
//     console.log('10 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }

if(numT > 0 && numT <= 5){
    console.log('10 % discount')
}
else if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
else if(numT > 10){
    console.log("30 % discount")
}
else {
    console.log('incorrect value')
}












