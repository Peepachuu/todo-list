import {insertTodoInStorage} from "./storage.js";
import {todo} from "./todo.js";

export function makeTodoCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "todo");

    const titleContainer = document.createElement("div");
    const titleInput = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleInput.id = "title";
    titleInput.setAttribute("name", "title");
    titleLabel.setAttribute("for", titleInput.id);
    titleContainer.append(titleLabel, titleInput);

    const descriptionContainer = document.createElement("div");
    const descriptionInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionInput.id = "description";
    descriptionLabel.setAttribute("for", descriptionInput.id);
    descriptionInput.setAttribute("name", "description");
    descriptionContainer.append(descriptionLabel, descriptionInput);

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    createButton.classList.add("create");
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show")
        const newToDo = todo(titleInput.value);
        insertTodoInStorage(newToDo);
        resetPopUp();
        addTodoToDisplay(newToDo);
    });

    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel");
    cancelButton.addEventListener('click', () => {
        popUp.classList.toggle("show");
        resetPopUp(popUp);
    })

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");
    buttonContainer.append(createButton, cancelButton);

    popUp.append(titleContainer, descriptionContainer, buttonContainer);
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

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
        inputFields.forEach(element => {
            element.value = "";
        });
}

// Add more functionality to todo creation.
// Improve the look of things. 