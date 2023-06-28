// print 1 to 5
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for loop and while loop
// for(intialization;conditionCheck;increment/decrement){
//     //statements  
// }

//  program 1
for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i)
}

// 1 <= 3 ====> 1
// 2 <= 3 ====> 2
// 3 <= 3 ====> 3

// program 2 - 0 to 5

for (let i = 0; i <= 5; i++) { // 1 // 2 // 3 // 4 // 5 // 6
    console.log(i)  // 0 // 1 // 2 // 3 // 4 // 5
}

// program 3 - print 'hello' three tyms
for (let i = 1; i <= 3; i++) {
    console.log('Hello')
}

// program 4 - table of 2
for (let i = 2; i <= 20; i = i + 2) { // 4 // 6 // 8 ----- 22
    console.log(i) // 2 // 4 // 6 -------- 20
}

// program 5 - 5 to 1

for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 6 - 50 - 5 (reverse)
for (let i = 50; i >= 5; i = i - 5) { // 45 // 40 ------ 0
    console.log(i) // 50 // 45  -------- 5
}

// program 7
for (let i = 0; i <= 5; i++) { // 1 // 2 // 3
    if (i == 3) {
        break
    }
    console.log(i) // 0 // 1 // 2
}

// program 8

for(let i = 5 ; i >=1 ; i-- ){ // 4 // 3 // 2
    console.log(i) // 5 // 4 // 3 // 2
    if(i == 2){
        break
    }
}

// continue

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue;
    }
    console.log(i)  // 1 // 2 // 4 /// 5
}






