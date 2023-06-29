
// selecting the element ----->

let headOne = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('click',function(){
    headOne.textContent = "Bye"
    headOne.style.color = "red"
    headOne.style.background = "yellow"

})





// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     parent:{
//         father:"shirish deshpande",
//         mother:"kanchan deshpande"
//     }
// }

// console.log(info.firstName)
// info.firstName  = "tanmay"
// info.parent.mother = "kanchan shirish deshpande"