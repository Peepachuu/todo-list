import {makeProjectCreationForm, setUpDefaultProjects} from "./projectCreation.js";
import {makeTodoCreationForm} from "./todoCreation.js";

export function loadUI() {
    const main = document.querySelector(".main");
    const projectsSection = document.querySelector(".projects");
    const todoForm = makeTodoCreationForm();
    const projectForm = makeProjectCreationForm();
    setUpDefaultProjects();
    
    projectsSection.appendChild(projectForm);
    main.appendChild(todoForm);
}