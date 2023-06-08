
// one input and multiple output


// numT > 0 && numT <= 5  --- 10 % discount
// numT > 5 && numT <= 10 --- 20 % discount
// numT > 10              --- 30 % discount


// condition --- true or false
// if(condition){
//     // statement
// }

let numT = 13

if(numT > 0 && numT <=5 ){
    console.log('10 % discount')
}
if(numT > 5 && numT <= 10){
    console.log('20 % discount')
}
if(numT > 10){
    console.log('30 % discount')
}

// program 2
let numT2 = -23
if(numT2 > 0 && numT2 <=5 ){
    console.log('10 % discount')
}
else if(numT2 > 5 && numT2 <= 10){
    console.log('20 % discount')
}
else if(numT2 > 10){
    console.log('30 % discount')
}
else {
    console.log("Incorrect input")
}

// program 3

let marks = 56
// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }

if(marks > 90){
    console.log('Grade A')
}
else if(marks > 75){
    console.log('Grade B')
}
else if(marks > 65){
    console.log('Grade C')
}
else {
    console.log('Fail try again')
}

// program 4

let a = 10
let b = 50

if(a > b){
    console.log('a is greater')
}
else {
    console.log('b is greater')
}

// program 5

let x = 1000
let y = 200
let z = 30

if(x > y && x > z){
    console.log("x is greater")
}
else if( y > x && y > z){
    console.log('y is greater')
}
else {
    console.log('z is greater')
}


// program 6
let s = 10
let t = 50

if(s > t){
    console.log('s is greater')
}
else {
    console.log('t is greater')
}

// tenary operator

s > t ? console.log('s is greater'):console.log('t is greater')































