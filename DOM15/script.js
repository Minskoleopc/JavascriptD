let ulList = document.querySelector('ul')
console.log(ulList)
let inputText = document.querySelector('input')
console.log(inputText)
let buttonA = document.querySelector('#one')
console.log(buttonA)


ulList.addEventListener('click', function (e) {
    // console.log(e.target) // retrive the element
    //console.log(e.target.tagName)// retrive tagName
    //console.log(e.target.className) // retrive class name


    if(e.target.tagName === 'BUTTON'){

        if(e.target.className === "remove"){
            
            let li = e.target.parentElement
            let ulLista = li.parentElement 
            ulLista.removeChild(li)
        }

        else if(e.target.className === "up"){
            
        }

        else if(e.target.className === "down"){
            
        }
    }





})








//---------------------------------------------------------

buttonA.addEventListener('click', function () {
    let inputTexta = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = inputTexta // <li>Payapa</li>
    createButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})


function createButton(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)


    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)


    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)




}
