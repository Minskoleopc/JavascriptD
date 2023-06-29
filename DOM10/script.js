
// select the element

let cButton = document.querySelector('button')
let headOne = document.querySelector('h1')

console.log(cButton)
console.log(headOne)

cButton.addEventListener('click',function(){
    headOne.textContent = "Bye"
    headOne.style.color = "red"
    headOne.style.background = "yellow"
})