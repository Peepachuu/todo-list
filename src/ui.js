function toggletemCreationForm() {
    const itemForm = document.querySelector(".item form");
    itemForm.classList.toggle("show");
}

export function createNewItemForm() {
    const form = document.createElement("form");
    const heading = document.createElement("h3");
    heading.textContent = "Create a new...";

    const options = document.createElement("ul");
    const todoOption = createOption("To Do");
    const projectOption = createOption("Project");
    
    const content = document.createElement("section");

    options.append(todoOption, projectOption);
    form.append(heading, options, content);
    form.classList.add("item");

    return form;
}

function createOption(name) {
    option = document.createElement("li");
    button = document.createElement("button");
    button.textContent = name;

    option.appendChild(button);
    return option;
}

function createToDo() {
    
}

function createProject() {

}