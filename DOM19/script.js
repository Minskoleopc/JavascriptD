{/* <h1>Hello</h1>
    <ul>
        <li class = "two">Apple</li>
        <li class = "two">Mango</li>
        <li class = "two">Banana</li>
    </ul>
    <button id = "one"></button> */}


    // css selector  and getElementById
    let buttonElement = document.querySelector('#one')
    console.log(buttonElement)

    let buttonElement2 = document.getElementById('one')
    console.log(buttonElement2)


    // className 

    let q1 = document.querySelector('.two')
    console.log(q1)
    let q2 = document.querySelectorAll('.two')
    console.log(q2)
    let q3 = document.getElementsByClassName('two')
    console.log(q3)

    // tagName 
    let headOne = document.querySelector('h1')
    let headOneK = document.querySelectorAll('h1')
    console.log(headOne)
    console.log(headOneK)
    let tagName = document.getElementsByTagName('h1')
    console.log(tagName)

    // name
    let q4  = document.querySelector('[name = "nm"]') // element
    let q5  = document.querySelectorAll('[name = "nm"]') // nodeList
    let q6 = document.getElementsByName('nm') // nodeList
    console.log(q5)
    console.log(q6)

    let headTwo = document.querySelector('h2')
    console.log(headTwo.className)
    console.log(headTwo.classList)

    headTwo.classList.add('seven')
    console.log(headTwo)
    headTwo.classList.remove('five')
    console.log(headTwo)

    headTwo.classList.toggle('seven')
    console.log(headTwo)
    headTwo.classList.toggle('seven')
    console.log(headTwo)


    let a = headTwo.getAttribute('id')
    console.log(a)

    headTwo.setAttribute('data-cy',"o")
    console.log(a)


    








