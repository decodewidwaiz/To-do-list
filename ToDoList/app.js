console.log("let write javascript")

let input = document.getElementById("add")
let addBtn = document.getElementById("addBtn")
let todocont = document.getElementById("todo")
let container = document.getElementsByClassName("container")
const button = document.getElementById("ToggleButton")
const content = document.getElementById("content")

addBtn.addEventListener("click" ,()=>{
    
        let li = document.createElement('li')
        li.innerText = input.value;
        li.style.backgroundColor = "green"
        li.style.color = "white"
        todocont.appendChild(li)

        li.addEventListener("click", ()=>{
            li.style.backgroundColor = "red"
            li.style.textDecoration = "line-through"
            li.style.color = "white"
        })

        li.addEventListener("dblclick", ()=>{
            alert("Are you sure. You want to remove")
            todocont.removeChild(li)
        })
})


button.addEventListener("click",()=>{
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
})