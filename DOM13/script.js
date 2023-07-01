let ulList = document.querySelector('ul')
console.log(ulList)
let buttonOne = document.querySelector('#one')
console.log(buttonOne)
let inputText = document.querySelector('input')
console.log(inputText)

buttonOne.addEventListener('click',function(){
    let fruitName = inputText.value // "papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruitName  // <li>papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})

{/* <li>Grapes
            <button class = remove>Remove</button>
            <button class = up>Up</button>
            <button class = down>Down</button> </li> */}

function createButtons(li){
    let r = document.createElement('button') // <button></button>
    r.classList.add('remove') // <button class = "remove"><button>
    r.textContent = "Remove" // <button class = "remove">Remove</button>
    li.appendChild(r)
  
    let u = document.createElement('button') // <button></button>
    u.classList.add('up') // <button class = "up"></button>
    u.textContent = "Up" // <button class = "down">Up</button>
    li.appendChild(u)

    let d = document.createElement('button') // <button></button>
    d.classList.add('down') // <button class = "down"></button>
    d.textContent = "Down" // <button class = "down">Down</button>
    li.appendChild(d)

}