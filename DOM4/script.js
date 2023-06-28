//<h3 class = "one" id = "two" name = "three">Minskole</h3>
// css selector

// tagName
let byTagName = document.querySelector('h3')
console.log(byTagName)

// By id
let byId = document.querySelector('#two')
console.log(byId)

// By class
let byClass = document.querySelector('.one')
console.log(byClass)

// By attribute
// tagName[attribute= "value"]
let byAttr = document.querySelector('h3[name= "three"]')
console.log(byAttr)


byAttr.addEventListener('click',function(){
    byAttr.textContent = "Minksole nagpur"
})




// Concept
// console.log(byAttr.textContent)
// byAttr.textContent = "Minksole nagpur"


// let a = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(a.firstName)
// a.firstName = "tanmay"
// console.log(a)