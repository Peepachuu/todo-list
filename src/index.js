import {loadUI, togglePopUp} from "./ui.js";

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

    const sidebarItems = document.createElement("ul");
    const allTasks = createSidebarItem("All Tasks");
    const tasksForToday = createSidebarItem("Today");
    const tasksForWeek = createSidebarItem("This Week");
    const importantTasks = createSidebarItem("Important");
    const projects = createSidebarItem("Projects");
    const addButton = createAddButton(false);

    sidebarItems.append(allTasks, tasksForToday, tasksForWeek, importantTasks, projects, addButton);
    sidebar.append(sidebarItems);
    return sidebar;
}

function createAddButton(isProjectButton) {
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.classList.add("add");
    addButton.addEventListener("click", () => {
        togglePopUp(isProjectButton);
    });
    return addButton;
}

function createSidebarItem(name) {
    const item = document.createElement("li");
    item.textContent = name;

    return item;
}

function createMainContent() {
    const main = document.createElement("section");

    const heading = document.createElement("h2");
    heading.textContent = "Today";

    // Also gotta append the list of todos for the day.
    main.append(heading);
    main.classList.add("main");
    return main;
}

loadPage();