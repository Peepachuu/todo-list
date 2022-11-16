import {insertTodoInStorage, deleteTodoFromStorage} from "./storage.js";
import {todo} from "./todo.js";
import starIcon from "./icons/star-outline.svg";
import trashIcon from "./icons/trash-can-outline.svg";
import editIcon from "./icons/note-edit-outline.svg";

export function makeTodoCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "todo");

    const titleContainer = createInputField("text", "Title");
    const descriptionContainer = createInputField("text", "Description");
    const datePickerContainer = createInputField("date", "Date");

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    createButton.classList.add("create");
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show")
        const newToDo = todo(titleContainer.querySelector("input").value, 
            descriptionContainer.querySelector("input").value, 
            datePickerContainer.querySelector("input").value);
        console.log(newToDo.dueDate);
        insertTodoInStorage(newToDo);
        resetPopUp(popUp);
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

    popUp.append(titleContainer, descriptionContainer, datePickerContainer, buttonContainer);
    return popUp;
}

export function addTodoToDisplay(todoToDisplay) {
    const todo = document.createElement("div");
    const list = document.querySelector(".main .list");

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.addEventListener("change", () => {
        todo.classList.toggle("completed");
    });
    const title = document.createElement("p");
    title.textContent = todoToDisplay.title;
    const detailsButton = document.createElement("button");
    const deleteButton = document.createElement("img");
    const dueDate = document.createElement("span");
    dueDate.textContent = todoToDisplay.dueDate;

    deleteButton.classList.add("icon");

    detailsButton.textContent = "Details";
    deleteButton.src = trashIcon;

    deleteButton.addEventListener("click", () => {
        deleteTodoFromStorage(todoToDisplay);
        list.removeChild(todo);
    });
    detailsButton.addEventListener("click", () => {
        showTodoDetails(todoToDisplay);
    });

    todo.classList.add("todo");

    const important = document.createElement("input");
    important.checked = todoToDisplay.isImportant;
    important.setAttribute("type", "checkbox");
    important.addEventListener("change", () => {
        todoToDisplay.isImportant = important.checked;
        console.log(important.checked);
    });

    todo.append(status, title, dueDate, detailsButton, important, deleteButton);

    list.appendChild(todo);
}

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
        inputFields.forEach(element => {
            element.value = "";
        });
}

function createInputField(type, name) {
    const inputContainer = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.textContent = name;
    input.id = name;
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    label.setAttribute("for", input.id);
    inputContainer.append(label, input);

    return inputContainer;
}

function showTodoDetails(todoToShow) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const title = document.createElement("h3");
    const parentProject = document.createElement("p");
    const priority = document.createElement("p");
    const dueDate = document.createElement("p");
    const description = document.createElement("p");
    const closeButton = document.createElement("button");

    closeButton.textContent = "x";
    title.textContent = todoToShow.title;
    parentProject.textContent = "Project: " + todoToShow.parentProject;
    priority.textContent = "Priority: " + (todoToShow.isImportant ? "Important" : "Not Important");
    dueDate.textContent = "Due Date: " + todoToShow.dueDate;
    description.textContent = "Description: " + todoToShow.description;

    closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
    })

    const container = document.createElement("div");
    const topContainer = document.createElement("div");
    container.classList.add("container");
    topContainer.classList.add("top");

    topContainer.append(title, closeButton);
    container.append(topContainer, parentProject, priority, dueDate, description);
    overlay.appendChild(container);
    document.body.appendChild(overlay);
}

// Make it so that the date can always been seen