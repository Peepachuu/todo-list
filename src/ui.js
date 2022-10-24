import { project } from "./project.js";
import { todo } from "./todo.js";


export function loadUI() {
    const main = document.querySelector(".main");
    const newTodo = todo("This is a todo");
    addTodoToDisplay(newTodo);
    const todoForm = createTodoPopUp();
    const projectForm = createProjectPopUp();

    main.append(todoForm, projectForm);
}


export function togglePopUp(isProjectButton) {
    const selector = isProjectButton ? ".pop-up.project" : ".pop-up.todo";
    const form = document.querySelector(selector);
    form.classList.toggle("show");
}

function createProjectPopUp() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "project");

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title here";

    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.addEventListener("click", () => {
        popUp.classList.toggle("show");
        const newProject = project(titleInput.value);
        addProjectToDisplay(newProject);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (e) => {
        popUp.classList.toggle("show");
        resetPopUp(e);
    });
    popUp.append(titleInput, createButton, cancelButton);
    return popUp;
}

function createTodoPopUp() {
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
        addTodoToDisplay(newToDo);
    });

    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', (e) => {
        popUp.classList.toggle("show");
        resetPopUp(e);
    })
    popUp.append(titleLabel, titleInput, descriptionLabel, descriptionInput, createButton, cancelButton);
    return popUp;
}

function resetPopUp(e) {
    const inputFields = e.target.parentNode.querySelectorAll("input");
    inputFields.forEach(element => {
        element.value = "";
    });
}

function addProjectToDisplay(projectToDisplay) {
    const project = document.createElement("li");
    const title = document.createElement("h3");
    title.textContent = projectToDisplay.title;
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    project.append(title, editButton);
    
    const list = document.querySelector(".sidebar .projects .list");
    list.appendChild(project);
}

function addTodoToDisplay(todoToDisplay) {
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

// Change the appearance of the form. It's pretty ugly rn. 
// Make the project creation form.
// When the project create button is pressed a separate form appears
// Projects can only have titles and contain a list of todos.
// when create is pressed it's added to the list in the sidebar
// and when the project item is clicked each of the todo in it is loaded onto the screen