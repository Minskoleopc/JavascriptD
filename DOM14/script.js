
let ulList = document.querySelector('ul')
let byIdButton = document.querySelector('#one')
let inputValue = document.querySelector('input')



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
        else if(e.target.className === "down"){
           
            
        }
        else if(e.target.className === "up"){
            
            
        }


   }


})





byIdButton.addEventListener('click',function(){
    let textE = inputValue.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = textE // <li>Papaya</li>
    createButton(newLi)
    ulList.appendChild(newLi) 
    inputValue.value = ""
})


function createButton(li){

    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove"  // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">remove<button>
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