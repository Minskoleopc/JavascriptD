{/* <h1 class="one" id="two" name="nm" >Chinmay</h1>
    <h2 id = "one">Poorva</h2>
    <ul>
        <li class = "fri">Apple</li>
        <li class = "fri">Banana</li>
        <li class = "fri">Mango</li>
</ul> */}


// program 1
//<h1 class="one" id="two" name="nm" >Chinmay</h1>
let one = document.querySelector('#one')
console.log(one)

let two = document.getElementById('one')
console.log(two)

 
let three = document.querySelector('.fri') // htmlelement
let four = document.querySelectorAll('.fri') // nodeList
console.log(three)
console.log(four)

let five = document.getElementsByClassName('fri') // htmlCollection
console.log(five)

let six = document.querySelector('li[name = "fruit"]')
let seven = document.querySelectorAll('[name = "fruit"]')
console.log(six)
console.log(seven)

let eight = document.getElementsByName('fruit')
console.log(eight)

let headingOne = document.querySelector('h1')
console.log(headingOne)

let liList2 = document.querySelectorAll('li')
console.log(liList2)

let liList = document.getElementsByTagName('li')
console.log(liList)





