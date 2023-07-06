let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')







buttonA.addEventListener('click', function () {
    let inputTextA = inputText.value  // "papaya"
    let newli = document.createElement('li') // <li></li>
    newli.textContent = inputTextA // <li>papaya<li>
    createButton(newli)
    ulList.appendChild(newli)
    inputText.value = ""

})

function createButton(li) {

    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

}


ulList.addEventListener('click', function (e) {
    // console.log(e.target) // element
    //console.log(e.target.tagName) // element's tagName
    // console.log(e.target.className) // className

    if (e.target.tagName === "BUTTON") {

        if (e.target.className == "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)


        }
        else if (e.target.className == "down") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }

        }
        else if (e.target.className == "up") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if(preLi){
                ul.insertBefore(li,preLi)
            }
        }


    }


})