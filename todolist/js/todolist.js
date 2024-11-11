const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const ToDo_Key = "todos";

let TODO = [];

function saveTODO() {
    localStorage.setItem(ToDo_Key, JSON.stringify(TODO));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    TODO = TODO.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveTODO(); // 삭제 후 저장하는 부분이 누락되어 추가했습니다.
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { // 함수 이름 수정
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObjet = {
        text: newToDo,
        id: Date.now()
    };
    TODO.push(newToDoObjet);
    paintToDo(newToDoObjet);
    saveTODO();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveTODOs = localStorage.getItem(ToDo_Key);

if (saveTODOs) {
    const parseToDos = JSON.parse(saveTODOs);
    TODO = parseToDos;
    parseToDos.forEach(paintToDo);
}
