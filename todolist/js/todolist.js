const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = toDoForm.querySelector("input")
const ToDo_Key = "todos"

let TODO = []

function saveTODO(){
    localStorage.setItem(ToDo_Key,JSON.stringify(TODO))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newToDo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newToDo
    toDoList.appendChild(li)
}

function handleToDosumbit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    TODO.push(newToDo)
    paintToDo(newToDo)
    saveTODO();
}



toDoForm.addEventListener("submit",handleToDosumbit)

const saveTODOs = localStorage.getItem(ToDo_Key);

if (saveTODOs) {
    const parseToDos = JSON.parse(saveTODOs);
    TODO = parseToDos;
    parseToDos.forEach(paintToDo);
}
