const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDE_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDE_CLASSNAME);
    console.log(username)
    greeting.innerText = "hello" + username
    greeting.classList.remove(HIDDE_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

console.log("asdf")