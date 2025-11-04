const input=document.querySelector('input[type="text"]')
const userInput=document.querySelector('#inputUsuario')
const lista=document.querySelector("#lista")
let idCounter=0
const stats=document.querySelector("#stats")

userInput.addEventListener('submit', (event)=>{
    event.preventDefault()
    agregaTarea()
})

let agregaTarea=()=>{
    idCounter++
    let newValue=input.value
    if (newValue==""){
        alert("no puede tener una tarea vacia")
        return
    }
    lista.innerHTML+=`
        <div class="contenedor-tarea" id="${idCounter}">
            <label>
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="./public/delete.png" alt="eliminar" class="btnEliminar">
        </div>
    `
    input.value=""
    updateStats()
}

lista.addEventListener('click', (event)=>{
    if (event.srcElement.nodeName=="IMG"){
        deleteTask(event.srcElement.parentNode.id)
    }else if(event.srcElement.nodeName=="INPUT"){
        updateStats()
    }
})

let updateStats=()=>{
    let divs=lista.querySelectorAll('div')
    let check=lista.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML=`
        Tareas: ${divs.length}   Completadas: ${check.length}
    `
}

let deleteTask=(id)=>{
    let taskDelete=document.getElementById(id)
    lista.removeChild(taskDelete)
    updateStats()
}