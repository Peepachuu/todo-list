import {loadUI} from "./ui.js";
import {createProjectAddButton} from "./projectCreation.js";

function loadPage() {
    const header = createHeader();
    const sidebar = createSidebar();
    const main = createMainContent();
    const container = document.createElement("div");

    container.classList.add("container");
    container.append(sidebar, main);
    const content = document.querySelector(".content");
    content.append(header, container);
    loadUI();
}

function createHeader() {
    const header = document.createElement("header");
    const heading = document.createElement("h1");
    
    heading.textContent = "ToDo";
    header.appendChild(heading);
    return header;
}

function createSidebar() {
    const sidebar = document.createElement("section");
    sidebar.classList.add("sidebar");

    const home = createHomeSection();
    const projects = createProjectSection();

    sidebar.append(home, projects);
    return sidebar;
}

function createHomeSection() {
    const home = document.createElement("section");
    home.classList.add("home");

    const heading = document.createElement("h2");
    heading.textContent = "Home";
    const list = document.createElement("ul");
    list.classList.add("list");
    const allTasks = createSidebarItem("All Tasks");
    const tasksForToday = createSidebarItem("Today");
    const tasksForWeek = createSidebarItem("This Week");
    const importantTasks = createSidebarItem("Important");

    list.append(allTasks, tasksForToday, tasksForWeek, importantTasks);
    home.append(heading, list);
    return home;
}

function createProjectSection() {
    const projects = document.createElement("section");
    projects.classList.add("projects");

    const heading = document.createElement("h2");
    heading.textContent = "Projects";
    const list = document.createElement("ul");
    list.classList.add("list");
    const projectAddButton = createProjectAddButton();
    projects.append(heading, list, projectAddButton);
    return projects;
}

function createSidebarItem(name) {
    const item = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = name;

    item.appendChild(span);
    return item;
}

function createMainContent() {
    const main = document.createElement("section");

    const container = document.createElement("section");
    container.classList.add("list");
    const heading = document.createElement("h2");
    heading.textContent = "Today";
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    // Also gotta append the list of todos for the day.
    container.appendChild(heading);
    main.append(container, buttonContainer);
    main.classList.add("main");
    return main;
}

loadPage();