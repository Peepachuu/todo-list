export function loadUI() {
    const content = document.querySelector(".content");
    const form = createNewItemForm();

    content.appendChild(form);
}


export function toggleItemCreationForm() {
    const itemForm = document.querySelector(".form-container");
    itemForm.classList.toggle("show");
}

function createNewItemForm() {
    const container = document.createElement("div");
    container.classList.add("form-container");

    const form = document.createElement("form");
    const heading = document.createElement("h3");
    heading.textContent = "Create a new...";

    const options = document.createElement("ul");
    const todoOption = createOption("To Do");
    const projectOption = createOption("Project");
    
    const content = document.createElement("section");

    options.append(todoOption, projectOption);
    form.append(heading, options, content);
    container.appendChild(form);
    form.classList.add("item");

    return container;
}

function createOption(name) {
    const option = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = name;

    option.appendChild(button);
    return option;
}

function createToDo() {
    
}

function createProject() {

}