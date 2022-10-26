import {insertTodoInStorage} from "./storage.js";
import {todo} from "./todo.js";

export function makeTodoCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "todo");

    const titleInput = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleInput.id = "title";
    titleInput.setAttribute("name", "title");
    titleLabel.setAttribute("for", titleInput.id);

    const descriptionInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionInput.id = "description";
    descriptionLabel.setAttribute("for", descriptionInput.id);
    descriptionInput.setAttribute("name", "description");

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show");
        const newToDo = todo(titleInput.value);
        insertTodoInStorage(newToDo);
        addTodoToDisplay(newToDo);
    });

    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', () => {
        popUp.classList.toggle("show");
        const inputFields = popUp.querySelectorAll("input");
        inputFields.forEach(element => {
            element.value = "";
        });
    })
    popUp.append(titleLabel, titleInput, descriptionLabel, descriptionInput, createButton, cancelButton);
    return popUp;
}

export function addTodoToDisplay(todoToDisplay) {
    const todo = document.createElement("div");

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    const title = document.createElement("p");
    title.textContent = todoToDisplay.title;
    const detailsButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    detailsButton.textContent = "Details";
    deleteButton.textContent = "Del";

    todo.classList.add("todo");
    todo.append(status, title, detailsButton, deleteButton);
    const list = document.querySelector(".main .list");
    list.appendChild(todo);
}