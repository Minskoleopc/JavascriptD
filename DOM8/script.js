let buttonA = document.querySelector('button')
let headOne = document.querySelector('h1')

buttonA.addEventListener('click',function(){
    headOne.textContent = "mayur";
    headOne.style.color = "red";
    headOne.style.backgroundColor = "yellow";
})
