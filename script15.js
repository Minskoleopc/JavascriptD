
// program 1
// //                0    1    2     3
// let birthYear = [1989,1990,1991,1992]
// let ages = []
// // [34,33,32,31]

// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(i)
//     //console.log(birthYear[i])
//     //console.log(2023 - birthYear[i])
//     let x = 2023 - birthYear[i]
//     ages.push(x)
// }
// console.log(ages)

// program 2
//                0     1   2    3     4
let birthYear2 = [2000,2001,2002,2003,2004]
let age2 = []
for(let i = 0 ; i < birthYear2.length ; i++){
   // console.log(i)
   // console.log(birthYear[i])
   //console.log(2023 - birthYear[i])
   let y = 2023 - birthYear2[i]
   age2.push(y)
}
console.log(age2)
// program 2
//              0  1  2  3  4
let  numbers = [34,66,77,88,44]
let above50 = [] 
//[66,77,88]

for(let i = 0  ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    if(numbers[i] > 50){
        above50.push(numbers[i])
    }
}
console.log(above50)

// program 3
let transactions  =[300,-45,6,78,99,899,-89,67]
let deposit = []

for(let i = 0 ; i < transactions.length ; i++){
    console.log(i)
    console.log(transactions[i])
    if(transactions[i] > 0){
        deposit.push(transactions[i])
    }
}
console.log(deposit)


// program 4
//              0  1  2
let sumOfArr = [11,22,33]
// 11 + 22 + 33 ====> 66
let total = 0
for(let i = 0 ; i < sumOfArr.length ; i++){
    //console.log(i)
    //console.log(sumOfArr[i])

    total = total  + sumOfArr[i]
    //       0     +   11    =====>  11
    //       11    +   22    =====>  33
    //       33    +   33    =====> 66
}
console.log(total)



