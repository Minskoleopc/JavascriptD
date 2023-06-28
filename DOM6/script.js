//  <h1 class = "one" id = "two" name = "three">Chinmay</h1>

// By css selector
// By tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// By id 
let byId = document.querySelector('#two')
console.log(byId)
// By class
let byClassName = document.querySelector(".one")
console.log(byClassName)
// By attribute
// tagName[attributeName = "val"]
let byAttr = document.querySelector('h1[name="three"]')
console.log(byAttr)


byAttr.addEventListener('click',function(){
    byAttr.textContent = "Mayuri"
})







//console.log(byAttr.textContent)
//byAttr.textContent = "Mayuri"
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(info.firstName)
// info.firstName = "tanmay"
// console.log(info)





