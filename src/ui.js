import project from "./project.js";
import { todo } from "./todo.js";


export function loadUI() {
    const main = document.querySelector(".main");
    const newTodo = todo("This is a todo");
    displayToDo(newTodo);
    const form = createPopUp(false);

    main.appendChild(form);
}


export function togglePopUp(isProjectPopUp) {
    const itemForm = document.querySelector(".pop-up");
    itemForm.classList.toggle("show");
}

function createOption(name) {
    const option = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = name;

    option.appendChild(button);
    return option;
}

export function createPopUp(isProject) {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    const nameInput = document.createElement("input");
    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    if (isProject) {
        createButton.addEventListener('click', randomfunction());
    } else {
        createButton.addEventListener('click', () => {
            popUp.classList.toggle("show");
            const newToDo = todo(nameInput.value);
            displayToDo(newToDo);
        });
    }
    cancelButton.textContent = "Cancel";

    popUp.append(nameInput, createButton, cancelButton);
    return popUp;
}

function displayProject() {

}

function displayToDo(todoToDisplay) {
    const todo = document.createElement("div");

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    const title = document.createElement("p");
    title.textContent = todoToDisplay.title;
    const detailsButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    detailsButton.textContent = "Details";
    deleteButton.textContent = "Del";

    todo.append(status, title, detailsButton, deleteButton);
    const list = document.querySelector(".main .list");
    list.appendChild(todo);
}

// Make it so the todo form appears at the bottom of the main section (after all the todos)
// Change the appearance of the form. It's pretty ugly rn. 
// Make the project creation form.
// 