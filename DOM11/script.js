
let headone = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('button')

console.log(headone)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let colorText = inputText.value
    headone.style.color = colorText
    inputText.value = ""

})