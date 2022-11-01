import {project} from "./project.js";
import {projectsStorage, defaultProjectsStorage, projectAlreadyExists, findImportantTodos, findTodosForToday} from "./storage.js";
import { addTodoToDisplay } from "./todoCreation.js";

export function makeProjectCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "project"); 

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title here";

    const createButton = document.createElement("button");
    createButton.classList.add("create");
    createButton.textContent = "Create";
    createButton.addEventListener("click", () => {
        if (projectAlreadyExists(titleInput.value)) {
            alert("Project Already Exists");
            return ;
        }
        popUp.classList.toggle("show");
        const newProject = project(titleInput.value);
        projectsStorage.push(newProject);
        console.log(projectsStorage);
        resetPopUp(popUp);
        addProjectToDisplay(newProject);
    });

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        popUp.classList.toggle("show");
        resetPopUp(popUp);
    });
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");
    buttonContainer.append(createButton, cancelButton);

    popUp.append(titleInput, buttonContainer);
    return popUp;
}

function addProjectToDisplay(projectToDisplay) {
    const listItem = document.createElement("li");
    
    const projectTitle = document.createElement("span");
    projectTitle.textContent = projectToDisplay.title;

    listItem.addEventListener('click', () => {
        displayTodosFromProject(projectToDisplay);
        setProjectAsActive(projectTitle);
    });
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.addEventListener("click", () => {
        createEditForm();
    });
    listItem.append(projectTitle, editButton);
    
    const list = document.querySelector(".sidebar .projects .list");
    list.appendChild(listItem);
}

function displayTodosFromProject(project) {
    const list = document.querySelector(".main .list");
    list.textContent = "";
    project.todos.forEach(todo => {
        addTodoToDisplay(todo);
    });
}

function createEditForm() {
    const editForm = document.createElement("div");
    const titleInput = document.createElement("input");
}

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
    inputFields.forEach(element => {
        element.value = "";
    });
}

function setProjectAsActive(project) {
    const projects = document.querySelectorAll(".sidebar span");
    projects.forEach(element => {
        element.classList.remove("active");
    });
    project.classList.toggle("active");
}

export function setUpDefaultProjects() {
    const defaultProjects = document.querySelectorAll(".home span");
    defaultProjects.forEach(element => {
        const defaultProject = project(element.textContent);
        defaultProjectsStorage.push(defaultProject);
        element.addEventListener("click", () => {
            setProjectAsActive(element);
            if (element.textContent == "Important")
                showTodosForDefaultProject(findImportantTodos());
            else if (element.textContent == "Today")
                showTodosForDefaultProject(findTodosForToday());
        });
    });
}

function showTodosForDefaultProject(todosToShow) {
    const list = document.querySelector(".main .list");
    list.textContent = "";
    todosToShow.forEach(element => {
        addTodoToDisplay(element);
    })
}
// Get the form functionality here
// Creating a form adds it to the storage
// Make a way to associate the project in the UI to the project in the storage
// This will help in adding todos to respective projects. 