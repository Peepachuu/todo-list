import {project} from "./project.js";
import {projectsStorage, projectAlreadyExists} from "./storage.js";
import { addTodoToDisplay } from "./todoCreation.js";

export function makeProjectCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "project"); 

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title here";

    const createButton = document.createElement("button");
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
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        popUp.classList.toggle("show");
        resetPopUp(popUp);
    });
    popUp.append(titleInput, createButton, cancelButton);
    return popUp;
}

function addProjectToDisplay(projectToDisplay) {
    const listItem = document.createElement("li");
    
    const projectTitle = document.createElement("span");
    projectTitle.textContent = projectToDisplay.title;

    listItem.addEventListener('click', () => {
        displayTodosFromProject(projectToDisplay);

        // Make this project the only active project
        const projects = document.querySelectorAll(".projects .list span");
        projects.forEach(element => {
            element.classList.remove("active");
        });
        projectTitle.classList.toggle("active");
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

export function displayTodosFromProject(project) {
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
// Get the form functionality here
// Creating a form adds it to the storage
// Make a way to associate the project in the UI to the project in the storage
// This will help in adding todos to respective projects. 