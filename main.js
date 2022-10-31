/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
const project = function(title) {
    let todos = [];

    return {
        title,
        todos
    };
};

/***/ }),

/***/ "./src/projectCreation.js":
/*!********************************!*\
  !*** ./src/projectCreation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProjectCreationForm": () => (/* binding */ makeProjectCreationForm),
/* harmony export */   "setUpDefaultProjects": () => (/* binding */ setUpDefaultProjects)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _todoCreation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreation.js */ "./src/todoCreation.js");




function makeProjectCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "project"); 

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title here";

    const createButton = document.createElement("button");
    createButton.classList.add("create");
    createButton.textContent = "Create";
    createButton.addEventListener("click", () => {
        if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.projectAlreadyExists)(titleInput.value)) {
            alert("Project Already Exists");
            return ;
        }
        popUp.classList.toggle("show");
        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(titleInput.value);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__.projectsStorage.push(newProject);
        console.log(_storage_js__WEBPACK_IMPORTED_MODULE_1__.projectsStorage);
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
        (0,_todoCreation_js__WEBPACK_IMPORTED_MODULE_2__.addTodoToDisplay)(todo);
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

function setUpDefaultProjects() {
    const defaultProjects = document.querySelectorAll(".home span");
    defaultProjects.forEach(element => {
        const defaultProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(element.textContent);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__.defaultProjectsStorage.push(defaultProject);
        element.addEventListener("click", () => {
            setProjectAsActive(element);
            showTodosForDefaultProject((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.findImportantTodos)());
        });
    });
}

function showTodosForDefaultProject(todosToShow) {
    const list = document.querySelector(".main .list");
    list.textContent = "";
    todosToShow.forEach(element => {
        (0,_todoCreation_js__WEBPACK_IMPORTED_MODULE_2__.addTodoToDisplay)(element);
    })
}
// Get the form functionality here
// Creating a form adds it to the storage
// Make a way to associate the project in the UI to the project in the storage
// This will help in adding todos to respective projects. 

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProjectsStorage": () => (/* binding */ defaultProjectsStorage),
/* harmony export */   "deleteTodoFromStorage": () => (/* binding */ deleteTodoFromStorage),
/* harmony export */   "findImportantTodos": () => (/* binding */ findImportantTodos),
/* harmony export */   "insertTodoInStorage": () => (/* binding */ insertTodoInStorage),
/* harmony export */   "projectAlreadyExists": () => (/* binding */ projectAlreadyExists),
/* harmony export */   "projectsStorage": () => (/* binding */ projectsStorage)
/* harmony export */ });
let projectsStorage = [];
let defaultProjectsStorage = [];

function projectAlreadyExists(name) {
    return projectsStorage.some(project => project.title == name);
}

function insertTodoInStorage(todoToInsert) {
    const projectToInsertInto = document.querySelector(".projects .list .active");
    const position = projectsStorage.findIndex(project => project.title == projectToInsertInto.textContent);
    
    projectsStorage[position].todos.push(todoToInsert);
    todoToInsert.parentProject = projectsStorage[position];
}

function deleteTodoFromStorage(todoToDelete) {
    const position = projectsStorage.findIndex(project => project == todoToDelete.parentProject);
    projectsStorage[position].todos.splice(projectsStorage[position].todos.findIndex(todo => todo == todoToDelete), 1);
}

function findImportantTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            if (todo.isImportant)
                tasks.push(todo);
        });
    });
    return tasks;
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
const todo = function (title, description="", dueDate="none", isImportant=false, parentProject=null) {
    return {
        title,
        description,
        dueDate,
        isImportant,
        parentProject,
    };
};


/***/ }),

/***/ "./src/todoCreation.js":
/*!*****************************!*\
  !*** ./src/todoCreation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoToDisplay": () => (/* binding */ addTodoToDisplay),
/* harmony export */   "makeTodoCreationForm": () => (/* binding */ makeTodoCreationForm)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



function makeTodoCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "todo");

    const titleContainer = document.createElement("div");
    const titleInput = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleInput.id = "title";
    titleInput.setAttribute("name", "title");
    titleLabel.setAttribute("for", titleInput.id);
    titleContainer.append(titleLabel, titleInput);

    const descriptionContainer = document.createElement("div");
    const descriptionInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionInput.id = "description";
    descriptionLabel.setAttribute("for", descriptionInput.id);
    descriptionInput.setAttribute("name", "description");
    descriptionContainer.append(descriptionLabel, descriptionInput);

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    createButton.classList.add("create");
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show")
        const newToDo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)(titleInput.value);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.insertTodoInStorage)(newToDo);
        resetPopUp(popUp);
        addTodoToDisplay(newToDo);
    });

    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel");
    cancelButton.addEventListener('click', () => {
        popUp.classList.toggle("show");
        resetPopUp(popUp);
    })

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");
    buttonContainer.append(createButton, cancelButton);

    popUp.append(titleContainer, descriptionContainer, buttonContainer);
    return popUp;
}

function addTodoToDisplay(todoToDisplay) {
    const todo = document.createElement("div");
    const list = document.querySelector(".main .list");

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.addEventListener("change", () => {
        todo.classList.toggle("completed");
    });
    const title = document.createElement("p");
    title.textContent = todoToDisplay.title;
    const detailsButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    detailsButton.textContent = "Details";
    deleteButton.textContent = "Del";

    deleteButton.addEventListener("click", () => {
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoFromStorage)(todoToDisplay);
        list.removeChild(todo);
    });
    todo.classList.add("todo");

    const important = document.createElement("input");
    important.checked = todoToDisplay.isImportant;
    important.setAttribute("type", "checkbox");
    important.addEventListener("change", () => {
        todoToDisplay.isImportant = important.checked;
        console.log(important.checked);
    });

    todo.append(status, title, detailsButton, important, deleteButton);

    list.appendChild(todo);
}

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
        inputFields.forEach(element => {
            element.value = "";
        });
}
// Add more functionality to todo creation.
// Make it so that the user can add due dates
// Make the default projects work i.e. all tasks and important.
// Make it so that the user can delete todos.
// Make it so that the user can edit todos.
// Add functionality for editing project name. 

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUI": () => (/* binding */ loadUI),
/* harmony export */   "togglePopUp": () => (/* binding */ togglePopUp)
/* harmony export */ });
/* harmony import */ var _projectCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCreation.js */ "./src/projectCreation.js");
/* harmony import */ var _todoCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreation.js */ "./src/todoCreation.js");



function loadUI() {
    const main = document.querySelector(".main");
    const todoForm = (0,_todoCreation_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoCreationForm)();
    const projectForm = (0,_projectCreation_js__WEBPACK_IMPORTED_MODULE_0__.makeProjectCreationForm)();
    (0,_projectCreation_js__WEBPACK_IMPORTED_MODULE_0__.setUpDefaultProjects)();
    
    main.append(todoForm, projectForm);
}


function togglePopUp(isProjectButton) {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");


function loadPage() {
    const header = createHeader();
    const sidebar = createSidebar();
    const main = createMainContent();
    const container = document.createElement("div");

    container.classList.add("container");
    container.append(sidebar, main);
    const content = document.querySelector(".content");
    content.append(header, container);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.loadUI)();
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
    const allTasks = createSidebarItem("Inbox");
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
    const todoAddButton = createAddButton(false);
    const projectAddButton = createAddButton(true);
    projects.append(heading, list, todoAddButton, projectAddButton);
    return projects;
}

function createAddButton(isProjectButton) {
    const addButton = document.createElement("button");
    addButton.textContent = isProjectButton ? "Create Project" : "Create ToDo";
    addButton.classList.add("add");
    addButton.addEventListener("click", () => {
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.togglePopUp)(isProjectButton);
    });
    return addButton;
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

    // Also gotta append the list of todos for the day.
    container.appendChild(heading);
    main.appendChild(container);
    main.classList.add("main");
    return main;
}

loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBTTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENyZWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb3NcbiAgICB9O1xufTsiLCJpbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7cHJvamVjdHNTdG9yYWdlLCBkZWZhdWx0UHJvamVjdHNTdG9yYWdlLCBwcm9qZWN0QWxyZWFkeUV4aXN0cywgZmluZEltcG9ydGFudFRvZG9zfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBhZGRUb2RvVG9EaXNwbGF5IH0gZnJvbSBcIi4vdG9kb0NyZWF0aW9uLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHJvamVjdENyZWF0aW9uRm9ybSgpIHtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wVXAuY2xhc3NMaXN0LmFkZChcInBvcC11cFwiLCBcInByb2plY3RcIik7IFxuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0aXRsZSBoZXJlXCI7XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0QWxyZWFkeUV4aXN0cyh0aXRsZUlucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9qZWN0IEFscmVhZHkgRXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RzU3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1N0b3JhZ2UpO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICAgICAgYWRkUHJvamVjdFRvRGlzcGxheShuZXdQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHJlc2V0UG9wVXAocG9wVXApO1xuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlSW5wdXQsIGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHBvcFVwO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9EaXNwbGF5KHByb2plY3RUb0Rpc3BsYXkpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VG9EaXNwbGF5LnRpdGxlO1xuXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21Qcm9qZWN0KHByb2plY3RUb0Rpc3BsYXkpO1xuICAgICAgICBzZXRQcm9qZWN0QXNBY3RpdmUocHJvamVjdFRpdGxlKTtcbiAgICB9KTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVFZGl0Rm9ybSgpO1xuICAgIH0pO1xuICAgIGxpc3RJdGVtLmFwcGVuZChwcm9qZWN0VGl0bGUsIGVkaXRCdXR0b24pO1xuICAgIFxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgLnByb2plY3RzIC5saXN0XCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3NGcm9tUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiAubGlzdFwiKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGFkZFRvZG9Ub0Rpc3BsYXkodG9kbyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKCkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xufVxuXG5mdW5jdGlvbiByZXNldFBvcFVwKHBvcFVwKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBwb3BVcC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RBc0FjdGl2ZShwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXIgc3BhblwiKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXBEZWZhdWx0UHJvamVjdHMoKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lIHNwYW5cIik7XG4gICAgZGVmYXVsdFByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgICAgZGVmYXVsdFByb2plY3RzU3RvcmFnZS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvamVjdEFzQWN0aXZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgc2hvd1RvZG9zRm9yRGVmYXVsdFByb2plY3QoZmluZEltcG9ydGFudFRvZG9zKCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1RvZG9zRm9yRGVmYXVsdFByb2plY3QodG9kb3NUb1Nob3cpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5saXN0XCIpO1xuICAgIGxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRvZG9zVG9TaG93LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGFkZFRvZG9Ub0Rpc3BsYXkoZWxlbWVudCk7XG4gICAgfSlcbn1cbi8vIEdldCB0aGUgZm9ybSBmdW5jdGlvbmFsaXR5IGhlcmVcbi8vIENyZWF0aW5nIGEgZm9ybSBhZGRzIGl0IHRvIHRoZSBzdG9yYWdlXG4vLyBNYWtlIGEgd2F5IHRvIGFzc29jaWF0ZSB0aGUgcHJvamVjdCBpbiB0aGUgVUkgdG8gdGhlIHByb2plY3QgaW4gdGhlIHN0b3JhZ2Vcbi8vIFRoaXMgd2lsbCBoZWxwIGluIGFkZGluZyB0b2RvcyB0byByZXNwZWN0aXZlIHByb2plY3RzLiAiLCJleHBvcnQgbGV0IHByb2plY3RzU3RvcmFnZSA9IFtdO1xuZXhwb3J0IGxldCBkZWZhdWx0UHJvamVjdHNTdG9yYWdlID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0QWxyZWFkeUV4aXN0cyhuYW1lKSB7XG4gICAgcmV0dXJuIHByb2plY3RzU3RvcmFnZS5zb21lKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydFRvZG9JblN0b3JhZ2UodG9kb1RvSW5zZXJ0KSB7XG4gICAgY29uc3QgcHJvamVjdFRvSW5zZXJ0SW50byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMgLmxpc3QgLmFjdGl2ZVwiKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHByb2plY3RzU3RvcmFnZS5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IHByb2plY3RUb0luc2VydEludG8udGV4dENvbnRlbnQpO1xuICAgIFxuICAgIHByb2plY3RzU3RvcmFnZVtwb3NpdGlvbl0udG9kb3MucHVzaCh0b2RvVG9JbnNlcnQpO1xuICAgIHRvZG9Ub0luc2VydC5wYXJlbnRQcm9qZWN0ID0gcHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9Gcm9tU3RvcmFnZSh0b2RvVG9EZWxldGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHByb2plY3RzU3RvcmFnZS5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0ID09IHRvZG9Ub0RlbGV0ZS5wYXJlbnRQcm9qZWN0KTtcbiAgICBwcm9qZWN0c1N0b3JhZ2VbcG9zaXRpb25dLnRvZG9zLnNwbGljZShwcm9qZWN0c1N0b3JhZ2VbcG9zaXRpb25dLnRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8gPT0gdG9kb1RvRGVsZXRlKSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW1wb3J0YW50VG9kb3MoKSB7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgcHJvamVjdHNTdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLmlzSW1wb3J0YW50KVxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godG9kbyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXNrcztcbn0iLCJleHBvcnQgY29uc3QgdG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb249XCJcIiwgZHVlRGF0ZT1cIm5vbmVcIiwgaXNJbXBvcnRhbnQ9ZmFsc2UsIHBhcmVudFByb2plY3Q9bnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgaXNJbXBvcnRhbnQsXG4gICAgICAgIHBhcmVudFByb2plY3QsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQge2luc2VydFRvZG9JblN0b3JhZ2UsIGRlbGV0ZVRvZG9Gcm9tU3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHt0b2RvfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9kb0NyZWF0aW9uRm9ybSgpIHtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wVXAuY2xhc3NMaXN0LmFkZChcInBvcC11cFwiLCBcInRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0aXRsZUlucHV0LmlkKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbklucHV0LmlkKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IHRvZG8odGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGluc2VydFRvZG9JblN0b3JhZ2UobmV3VG9Ebyk7XG4gICAgICAgIHJlc2V0UG9wVXAocG9wVXApO1xuICAgICAgICBhZGRUb2RvVG9EaXNwbGF5KG5ld1RvRG8pO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICBwb3BVcC5hcHBlbmQodGl0bGVDb250YWluZXIsIGRlc2NyaXB0aW9uQ29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuICAgIHJldHVybiBwb3BVcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9Ub0Rpc3BsYXkodG9kb1RvRGlzcGxheSkge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLmxpc3RcIik7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb1RvRGlzcGxheS50aXRsZTtcbiAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVG9kb0Zyb21TdG9yYWdlKHRvZG9Ub0Rpc3BsYXkpO1xuICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKHRvZG8pO1xuICAgIH0pO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW1wb3J0YW50LmNoZWNrZWQgPSB0b2RvVG9EaXNwbGF5LmlzSW1wb3J0YW50O1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvVG9EaXNwbGF5LmlzSW1wb3J0YW50ID0gaW1wb3J0YW50LmNoZWNrZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGltcG9ydGFudC5jaGVja2VkKTtcbiAgICB9KTtcblxuICAgIHRvZG8uYXBwZW5kKHN0YXR1cywgdGl0bGUsIGRldGFpbHNCdXR0b24sIGltcG9ydGFudCwgZGVsZXRlQnV0dG9uKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAocG9wVXApIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbn1cbi8vIEFkZCBtb3JlIGZ1bmN0aW9uYWxpdHkgdG8gdG9kbyBjcmVhdGlvbi5cbi8vIE1ha2UgaXQgc28gdGhhdCB0aGUgdXNlciBjYW4gYWRkIGR1ZSBkYXRlc1xuLy8gTWFrZSB0aGUgZGVmYXVsdCBwcm9qZWN0cyB3b3JrIGkuZS4gYWxsIHRhc2tzIGFuZCBpbXBvcnRhbnQuXG4vLyBNYWtlIGl0IHNvIHRoYXQgdGhlIHVzZXIgY2FuIGRlbGV0ZSB0b2Rvcy5cbi8vIE1ha2UgaXQgc28gdGhhdCB0aGUgdXNlciBjYW4gZWRpdCB0b2Rvcy5cbi8vIEFkZCBmdW5jdGlvbmFsaXR5IGZvciBlZGl0aW5nIHByb2plY3QgbmFtZS4gIiwiaW1wb3J0IHttYWtlUHJvamVjdENyZWF0aW9uRm9ybSwgc2V0VXBEZWZhdWx0UHJvamVjdHN9IGZyb20gXCIuL3Byb2plY3RDcmVhdGlvbi5qc1wiO1xuaW1wb3J0IHttYWtlVG9kb0NyZWF0aW9uRm9ybX0gZnJvbSBcIi4vdG9kb0NyZWF0aW9uLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IG1ha2VUb2RvQ3JlYXRpb25Gb3JtKCk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBtYWtlUHJvamVjdENyZWF0aW9uRm9ybSgpO1xuICAgIHNldFVwRGVmYXVsdFByb2plY3RzKCk7XG4gICAgXG4gICAgbWFpbi5hcHBlbmQodG9kb0Zvcm0sIHByb2plY3RGb3JtKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUG9wVXAoaXNQcm9qZWN0QnV0dG9uKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBpc1Byb2plY3RCdXR0b24gPyBcIi5wb3AtdXAucHJvamVjdFwiIDogXCIucG9wLXVwLnRvZG9cIjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbn1cblxuLy8gQ2hhbmdlIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLiBJdCdzIHByZXR0eSB1Z2x5IHJuLiBcbi8vIE1ha2UgdGhlIHByb2plY3QgY3JlYXRpb24gZm9ybS5cbi8vIFdoZW4gdGhlIHByb2plY3QgY3JlYXRlIGJ1dHRvbiBpcyBwcmVzc2VkIGEgc2VwYXJhdGUgZm9ybSBhcHBlYXJzXG4vLyBQcm9qZWN0cyBjYW4gb25seSBoYXZlIHRpdGxlcyBhbmQgY29udGFpbiBhIGxpc3Qgb2YgdG9kb3MuXG4vLyB3aGVuIGNyZWF0ZSBpcyBwcmVzc2VkIGl0J3MgYWRkZWQgdG8gdGhlIGxpc3QgaW4gdGhlIHNpZGViYXJcbi8vIGFuZCB3aGVuIHRoZSBwcm9qZWN0IGl0ZW0gaXMgY2xpY2tlZCBlYWNoIG9mIHRoZSB0b2RvIGluIGl0IGlzIGxvYWRlZCBvbnRvIHRoZSBzY3JlZW4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bG9hZFVJLCB0b2dnbGVQb3BVcH0gZnJvbSBcIi4vdWkuanNcIjtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGNyZWF0ZVNpZGViYXIoKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbkNvbnRlbnQoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChzaWRlYmFyLCBtYWluKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlciwgY29udGFpbmVyKTtcbiAgICBsb2FkVUkoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb0RvXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICBjb25zdCBob21lID0gY3JlYXRlSG9tZVNlY3Rpb24oKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RTZWN0aW9uKCk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZChob21lLCBwcm9qZWN0cyk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJJbmJveFwiKTtcbiAgICBjb25zdCB0YXNrc0ZvclRvZGF5ID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJUb2RheVwiKTtcbiAgICBjb25zdCB0YXNrc0ZvcldlZWsgPSBjcmVhdGVTaWRlYmFySXRlbShcIlRoaXMgV2Vla1wiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRUYXNrcyA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiSW1wb3J0YW50XCIpO1xuXG4gICAgbGlzdC5hcHBlbmQoYWxsVGFza3MsIHRhc2tzRm9yVG9kYXksIHRhc2tzRm9yV2VlaywgaW1wb3J0YW50VGFza3MpO1xuICAgIGhvbWUuYXBwZW5kKGhlYWRpbmcsIGxpc3QpO1xuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgdG9kb0FkZEJ1dHRvbiA9IGNyZWF0ZUFkZEJ1dHRvbihmYWxzZSk7XG4gICAgY29uc3QgcHJvamVjdEFkZEJ1dHRvbiA9IGNyZWF0ZUFkZEJ1dHRvbih0cnVlKTtcbiAgICBwcm9qZWN0cy5hcHBlbmQoaGVhZGluZywgbGlzdCwgdG9kb0FkZEJ1dHRvbiwgcHJvamVjdEFkZEJ1dHRvbik7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24oaXNQcm9qZWN0QnV0dG9uKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBpc1Byb2plY3RCdXR0b24gPyBcIkNyZWF0ZSBQcm9qZWN0XCIgOiBcIkNyZWF0ZSBUb0RvXCI7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVBvcFVwKGlzUHJvamVjdEJ1dHRvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFkZEJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckl0ZW0obmFtZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgIC8vIEFsc28gZ290dGEgYXBwZW5kIHRoZSBsaXN0IG9mIHRvZG9zIGZvciB0aGUgZGF5LlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=