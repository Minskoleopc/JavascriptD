// program 1
//                0     1   2    3
let birthYear = [1989, 1990, 1991, 1992]
let ages = []
//[34,33,32,31]

for (let i = 0; i < birthYear.length; i++) {
    // console.log(i)
    //console.log(birthYear[i])
    //console.log(2023-birthYear[i])
    let r = 2023 - birthYear[i]
    ages.push(r)
}
console.log(ages)

// program 2
//            0    1    2   3 
birthYear = [1989, 1990, 1991, 1992]
let q1 = birthYear.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)


// program 3

let numbers = [11, 22, 33, 44, 55]
// [12,24,35,46,57]
let q22 = numbers.map(function (el, index, arr) {
    return el + 2
})
console.log(q22)

// program 4 

let mks = [32, 43, 52, 34, 43, 52]
// [43,52,43,52]
let above40 = []
for (let i = 0; i < mks.length; i++) {
    //console.log(i)
    // console.log(mks[i])
    if (mks[i] > 40) {
        above40.push(mks[i])
    }
}
console.log(above40)

// program 4
let q23 = mks.filter(function (el, index, arr) {
    return el > 40
})
console.log(q23)

// program 5
let mks2 = [11, 22, 33] // 66
let total = 0
for (let i = 0; i < mks2.length; i++) {
    total = total + mks2[i]
    //       0    +   11   ======> 11
    //       11   +   22  =======> 33
    //       33   +   33  =======> 66  
}

console.log(total)
let q33 = mks2.reduce(function (acc, el, index, arr) {
    return el + acc
}, 0)
console.log(q33)

























