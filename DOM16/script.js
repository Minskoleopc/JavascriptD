
let ulList  = document.querySelector('ul')
console.log(ulList)

let buttonE  = document.querySelector('#one')
console.log(buttonE)

let inputT = document.querySelector('input')
console.log(inputT)

buttonE.addEventListener('click',function(){
    let textE = inputT.value //"Papaya"
    let newList  = document.createElement('li') // <li><li>
    newList.textContent = textE   // <li>"Papaya"</li>
    createButton(newList) // adding buttons 
    ulList.appendChild(newList)

})


function createButton(li){
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


ulList.addEventListener('click',function(e){

    // console.log(e.target)
    // console.log(e.target.tagName)
    // console.log(e.target.className)

    if(e.target.tagName === "BUTTON"){

        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(e.target.className === "up"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let prevli = li.previousElementSibling
            if(prevli){
                ul.insertBefore(li,prevli)

            }

        }
        else if(e.target.className === "down"){

            let li = e.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling
            if(nextli){
                ul.insertBefore(nextli,nextli)

            }
            
        }



    }








})