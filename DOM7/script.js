//<h1 class = "one" id="two" name = "three">Chinmay</h1>


let byId = document.querySelector('#two')
let byClass = document.querySelector('.one')
let byTagName = document.querySelector('h1')
let byAttr = document.querySelector('h1[name="three"]')

byAttr.addEventListener('click',function(){
    byAttr.textContent = "mayur"
    byAttr.style.color = "red"
 })