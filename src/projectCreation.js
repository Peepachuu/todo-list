import {project} from "./project.js";
import {projectsStorage, defaultProjectsStorage, projectAlreadyExists, findImportantTodos, findTodosForToday, findTodoForThisWeek} from "./storage.js";
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
    const projectItem = document.createElement("li");
    
    const projectTitle = document.createElement("span");
    projectTitle.textContent = projectToDisplay.title;

    projectItem.addEventListener('click', () => {
        displayTodosFromProject(projectToDisplay);
        setProjectAsActive(projectItem);
    });
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.addEventListener("click", () => {
        createEditForm();
    });
    projectItem.append(projectTitle, editButton);
    
    const list = document.querySelector(".sidebar .projects .list");
    list.appendChild(projectItem);
}

function displayTodosFromProject(project) {
    const list = document.querySelector(".main .list");
    list.textContent = "";
    const heading = document.createElement("h2");
    heading.textContent = project.title;
    list.appendChild(heading);
    project.todos.forEach(todo => {
        addTodoToDisplay(todo);
    });
    const addButton = createTodoAddButton();
    list.append(addButton);
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
    const projects = document.querySelectorAll(".sidebar .list li");
    projects.forEach(element => {
        element.classList.remove("active");
    });
    project.classList.toggle("active");
}

export function setUpDefaultProjects() {
    const defaultProjects = document.querySelectorAll(".home li");
    defaultProjects.forEach(element => {
        const defaultProject = project(element.textContent);
        defaultProjectsStorage.push(defaultProject);
        element.addEventListener("click", () => {
            setProjectAsActive(element);
            if (element.textContent == "Important")
                showTodosForDefaultProject(findImportantTodos());
            else if (element.textContent == "Today")
                showTodosForDefaultProject(findTodosForToday());
            else if (element.textContent == "This Week")
                showTodosForDefaultProject(findTodoForThisWeek());
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

export function createProjectAddButton() {
    const addButton = document.createElement("button");
    addButton.textContent = "Create Project";
    addButton.classList.add("add");
    addButton.addEventListener("click", () => {
        togglePopUp(true);
    });
    return addButton;
}

function createTodoAddButton() {
    const addButton = document.createElement("button");
    addButton.textContent = "Create ToDo";
    addButton.classList.add("add");
    addButton.addEventListener("click", () => {
        togglePopUp(false);
    });
    return addButton;
}

function togglePopUp(isProjectButton) {
    const selector = isProjectButton ? ".pop-up.project" : ".pop-up.todo";
    const form = document.querySelector(selector);
    form.classList.toggle("show");
}