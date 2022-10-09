function loadPage() {
    const header = createHeader();
    const sidebar = createSidebar();
    const main = createMainContent();
    const container = document.createElement("div");

    const content = document.querySelector(".content");
    container.append(sidebar, main);
    content.append(header, container);
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
    return sidebar;
}

function createSidebarItem() {

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