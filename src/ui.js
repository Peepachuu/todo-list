import {makeProjectCreationForm, setUpDefaultProjects} from "./projectCreation.js";
import {makeTodoCreationForm} from "./todoCreation.js";

export function loadUI() {
    const main = document.querySelector(".main");
    const todoForm = makeTodoCreationForm();
    const projectForm = makeProjectCreationForm();
    setUpDefaultProjects();
    
    main.append(todoForm, projectForm);
}


export function togglePopUp(isProjectButton) {
    const selector = isProjectButton ? ".pop-up.project" : ".pop-up.todo";
    const form = document.querySelector(selector);
    form.classList.toggle("show");
}

// Change the appearance of the form. It's pretty ugly rn. 
// Make the project creation form.
// When the project create button is pressed a separate form appears
// Projects can only have titles and contain a list of todos.
// when create is pressed it's added to the list in the sidebar
// and when the project item is clicked each of the todo in it is loaded onto the screen