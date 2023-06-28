
//intialization
// while (condition) {
//     // statement 
//     // increment
// }

let t1 = 1
while(t1 <= 5){
    console.log(t1) // 1 / 2 // 3 // 4 // 5
    t1 ++  // 2 // 3 // 4 // 5 // 6
}

// program -3 (print hello 3 times)
let t2 = 1
while(t2 <= 3){
    console.log('hello') // "hello" , hello", "hello"
    t2 ++ // 2 // 3 // 4
}

// program 4 (print 5- 1)

let t3 = 5
while(t3 >= 1){
    console.log(t3)
    t3 --
}

// program 5 (table of 2)
let t4 = 2
while(t4 <= 20){
    console.log(t4)
    t4 = t4 + 2
}

//program 6(table of 5 in reverse)
let t5 = 50
while(t5 >= 5){
    console.log(t5)
    t5 = t5 - 5
}

// program 7 (while with break statement)

let t6  =  1
while(t6 <= 5){
    if(t6 == 3){
        break
    }
    console.log(t6) // 1 // 2
    t6 ++ // 2 // 3
}

// program 8
let t7 = 5
while(t7 >= 1){
    console.log(t7) // 5 // 4 // 3
    if(t7 == 3){
        break
    }
    t7 -- // 4 // 3
}


// program 3 (while with continue)
let t8 = 1
while(t8 <= 5){
    if(t8 == 3){
        t8 ++ // 4
        continue;
    }
    console.log(t8) // 1 // 2 // 4 // 5
    t8++ // 2 // 3 // 5 // 6
}








