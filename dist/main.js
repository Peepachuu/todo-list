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

    const titleContainer = createInputField("text", "Title");
    const descriptionContainer = createInputField("text", "Description");
    const datePickerContainer = createInputField("date", "Date");

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    createButton.classList.add("create");
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show")
        const newToDo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)(titleContainer.querySelector("input").value);
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

    popUp.append(titleContainer, descriptionContainer, datePickerContainer, buttonContainer);
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

function createInputField(type, name) {
    const inputContainer = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.textContent = name;
    input.id = name;
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    label.setAttribute("for", input.id);
    inputContainer.append(label, input);

    return inputContainer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHFDO0FBQzBFO0FBQzFEOztBQUU5QztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFPO0FBQ2xDLFFBQVEsNkRBQW9CO0FBQzVCLG9CQUFvQix3REFBZTtBQUNuQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBZ0I7QUFDeEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsK0JBQStCLG9EQUFPO0FBQ3RDLFFBQVEsb0VBQTJCO0FBQ25DO0FBQ0E7QUFDQSx1Q0FBdUMsK0RBQWtCO0FBQ3pELFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFnQjtBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pITztBQUNBOztBQUVBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndFO0FBQ3pDOztBQUV4QjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUk7QUFDNUIsUUFBUSxnRUFBbUI7QUFDM0I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0VBQXFCO0FBQzdCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHbUY7QUFDNUI7O0FBRWhEO0FBQ1A7QUFDQSxxQkFBcUIsc0VBQW9CO0FBQ3pDLHdCQUF3Qiw0RUFBdUI7QUFDL0MsSUFBSSx5RUFBb0I7QUFDeEI7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFNO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0b2Rvc1xuICAgIH07XG59OyIsImltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c1N0b3JhZ2UsIGRlZmF1bHRQcm9qZWN0c1N0b3JhZ2UsIHByb2plY3RBbHJlYWR5RXhpc3RzLCBmaW5kSW1wb3J0YW50VG9kb3N9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGFkZFRvZG9Ub0Rpc3BsYXkgfSBmcm9tIFwiLi90b2RvQ3JlYXRpb24uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQcm9qZWN0Q3JlYXRpb25Gb3JtKCkge1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwXCIsIFwicHJvamVjdFwiKTsgXG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRpdGxlIGhlcmVcIjtcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVcIik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RBbHJlYWR5RXhpc3RzKHRpdGxlSW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICBhbGVydChcIlByb2plY3QgQWxyZWFkeSBFeGlzdHNcIik7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdHNTdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzU3RvcmFnZSk7XG4gICAgICAgIHJlc2V0UG9wVXAocG9wVXApO1xuICAgICAgICBhZGRQcm9qZWN0VG9EaXNwbGF5KG5ld1Byb2plY3QpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICBwb3BVcC5hcHBlbmQodGl0bGVJbnB1dCwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wVXA7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0Rpc3BsYXkocHJvamVjdFRvRGlzcGxheSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUb0Rpc3BsYXkudGl0bGU7XG5cbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVRvZG9zRnJvbVByb2plY3QocHJvamVjdFRvRGlzcGxheSk7XG4gICAgICAgIHNldFByb2plY3RBc0FjdGl2ZShwcm9qZWN0VGl0bGUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUVkaXRGb3JtKCk7XG4gICAgfSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKHByb2plY3RUaXRsZSwgZWRpdEJ1dHRvbik7XG4gICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciAucHJvamVjdHMgLmxpc3RcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2Rvc0Zyb21Qcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5saXN0XCIpO1xuICAgIGxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgYWRkVG9kb1RvRGlzcGxheSh0b2RvKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdEZvcm0oKSB7XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAocG9wVXApIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBpbnB1dEZpZWxkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdEFzQWN0aXZlKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhciBzcGFuXCIpO1xuICAgIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcERlZmF1bHRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWUgc3BhblwiKTtcbiAgICBkZWZhdWx0UHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdHNTdG9yYWdlLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRQcm9qZWN0QXNBY3RpdmUoZWxlbWVudCk7XG4gICAgICAgICAgICBzaG93VG9kb3NGb3JEZWZhdWx0UHJvamVjdChmaW5kSW1wb3J0YW50VG9kb3MoKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VG9kb3NGb3JEZWZhdWx0UHJvamVjdCh0b2Rvc1RvU2hvdykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLmxpc3RcIik7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdG9kb3NUb1Nob3cuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgYWRkVG9kb1RvRGlzcGxheShlbGVtZW50KTtcbiAgICB9KVxufVxuLy8gR2V0IHRoZSBmb3JtIGZ1bmN0aW9uYWxpdHkgaGVyZVxuLy8gQ3JlYXRpbmcgYSBmb3JtIGFkZHMgaXQgdG8gdGhlIHN0b3JhZ2Vcbi8vIE1ha2UgYSB3YXkgdG8gYXNzb2NpYXRlIHRoZSBwcm9qZWN0IGluIHRoZSBVSSB0byB0aGUgcHJvamVjdCBpbiB0aGUgc3RvcmFnZVxuLy8gVGhpcyB3aWxsIGhlbHAgaW4gYWRkaW5nIHRvZG9zIHRvIHJlc3BlY3RpdmUgcHJvamVjdHMuICIsImV4cG9ydCBsZXQgcHJvamVjdHNTdG9yYWdlID0gW107XG5leHBvcnQgbGV0IGRlZmF1bHRQcm9qZWN0c1N0b3JhZ2UgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RBbHJlYWR5RXhpc3RzKG5hbWUpIHtcbiAgICByZXR1cm4gcHJvamVjdHNTdG9yYWdlLnNvbWUocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0VG9kb0luU3RvcmFnZSh0b2RvVG9JbnNlcnQpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9JbnNlcnRJbnRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cyAubGlzdCAuYWN0aXZlXCIpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdHNTdG9yYWdlLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gcHJvamVjdFRvSW5zZXJ0SW50by50ZXh0Q29udGVudCk7XG4gICAgXG4gICAgcHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXS50b2Rvcy5wdXNoKHRvZG9Ub0luc2VydCk7XG4gICAgdG9kb1RvSW5zZXJ0LnBhcmVudFByb2plY3QgPSBwcm9qZWN0c1N0b3JhZ2VbcG9zaXRpb25dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kb0Zyb21TdG9yYWdlKHRvZG9Ub0RlbGV0ZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdHNTdG9yYWdlLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QgPT0gdG9kb1RvRGVsZXRlLnBhcmVudFByb2plY3QpO1xuICAgIHByb2plY3RzU3RvcmFnZVtwb3NpdGlvbl0udG9kb3Muc3BsaWNlKHByb2plY3RzU3RvcmFnZVtwb3NpdGlvbl0udG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kbyA9PSB0b2RvVG9EZWxldGUpLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbXBvcnRhbnRUb2RvcygpIHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBwcm9qZWN0c1N0b3JhZ2UuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaXNJbXBvcnRhbnQpXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaCh0b2RvKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhc2tzO1xufSIsImV4cG9ydCBjb25zdCB0b2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbj1cIlwiLCBkdWVEYXRlPVwibm9uZVwiLCBpc0ltcG9ydGFudD1mYWxzZSwgcGFyZW50UHJvamVjdD1udWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBpc0ltcG9ydGFudCxcbiAgICAgICAgcGFyZW50UHJvamVjdCxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7aW5zZXJ0VG9kb0luU3RvcmFnZSwgZGVsZXRlVG9kb0Zyb21TdG9yYWdlfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQge3RvZG99IGZyb20gXCIuL3RvZG8uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUb2RvQ3JlYXRpb25Gb3JtKCkge1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwXCIsIFwidG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlSW5wdXRGaWVsZChcInRleHRcIiwgXCJUaXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUlucHV0RmllbGQoXCJ0ZXh0XCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZGF0ZVBpY2tlckNvbnRhaW5lciA9IGNyZWF0ZUlucHV0RmllbGQoXCJkYXRlXCIsIFwiRGF0ZVwiKTtcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVcIik7XG4gICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKVxuICAgICAgICBjb25zdCBuZXdUb0RvID0gdG9kbyh0aXRsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUpO1xuICAgICAgICBpbnNlcnRUb2RvSW5TdG9yYWdlKG5ld1RvRG8pO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICAgICAgYWRkVG9kb1RvRGlzcGxheShuZXdUb0RvKTtcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBkZXNjcmlwdGlvbkNvbnRhaW5lciwgZGF0ZVBpY2tlckNvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wVXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvVG9EaXNwbGF5KHRvZG9Ub0Rpc3BsYXkpIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5saXN0XCIpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9Ub0Rpc3BsYXkudGl0bGU7XG4gICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGRldGFpbHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRvZG9Gcm9tU3RvcmFnZSh0b2RvVG9EaXNwbGF5KTtcbiAgICAgICAgbGlzdC5yZW1vdmVDaGlsZCh0b2RvKTtcbiAgICB9KTtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGltcG9ydGFudC5jaGVja2VkID0gdG9kb1RvRGlzcGxheS5pc0ltcG9ydGFudDtcbiAgICBpbXBvcnRhbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgdG9kb1RvRGlzcGxheS5pc0ltcG9ydGFudCA9IGltcG9ydGFudC5jaGVja2VkO1xuICAgICAgICBjb25zb2xlLmxvZyhpbXBvcnRhbnQuY2hlY2tlZCk7XG4gICAgfSk7XG5cbiAgICB0b2RvLmFwcGVuZChzdGF0dXMsIHRpdGxlLCBkZXRhaWxzQnV0dG9uLCBpbXBvcnRhbnQsIGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKHRvZG8pO1xufVxuXG5mdW5jdGlvbiByZXNldFBvcFVwKHBvcFVwKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBwb3BVcC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RmllbGRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0RmllbGQodHlwZSwgbmFtZSkge1xuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgaW5wdXQuaWQgPSBuYW1lO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuaWQpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xufVxuLy8gQWRkIG1vcmUgZnVuY3Rpb25hbGl0eSB0byB0b2RvIGNyZWF0aW9uLlxuLy8gTWFrZSBpdCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBhZGQgZHVlIGRhdGVzXG4vLyBNYWtlIHRoZSBkZWZhdWx0IHByb2plY3RzIHdvcmsgaS5lLiBhbGwgdGFza3MgYW5kIGltcG9ydGFudC5cbi8vIE1ha2UgaXQgc28gdGhhdCB0aGUgdXNlciBjYW4gZGVsZXRlIHRvZG9zLlxuLy8gTWFrZSBpdCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBlZGl0IHRvZG9zLlxuLy8gQWRkIGZ1bmN0aW9uYWxpdHkgZm9yIGVkaXRpbmcgcHJvamVjdCBuYW1lLiAiLCJpbXBvcnQge21ha2VQcm9qZWN0Q3JlYXRpb25Gb3JtLCBzZXRVcERlZmF1bHRQcm9qZWN0c30gZnJvbSBcIi4vcHJvamVjdENyZWF0aW9uLmpzXCI7XG5pbXBvcnQge21ha2VUb2RvQ3JlYXRpb25Gb3JtfSBmcm9tIFwiLi90b2RvQ3JlYXRpb24uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gbWFrZVRvZG9DcmVhdGlvbkZvcm0oKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IG1ha2VQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XG4gICAgc2V0VXBEZWZhdWx0UHJvamVjdHMoKTtcbiAgICBcbiAgICBtYWluLmFwcGVuZCh0b2RvRm9ybSwgcHJvamVjdEZvcm0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQb3BVcChpc1Byb2plY3RCdXR0b24pIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGlzUHJvamVjdEJ1dHRvbiA/IFwiLnBvcC11cC5wcm9qZWN0XCIgOiBcIi5wb3AtdXAudG9kb1wiO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xufVxuXG4vLyBDaGFuZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0uIEl0J3MgcHJldHR5IHVnbHkgcm4uIFxuLy8gTWFrZSB0aGUgcHJvamVjdCBjcmVhdGlvbiBmb3JtLlxuLy8gV2hlbiB0aGUgcHJvamVjdCBjcmVhdGUgYnV0dG9uIGlzIHByZXNzZWQgYSBzZXBhcmF0ZSBmb3JtIGFwcGVhcnNcbi8vIFByb2plY3RzIGNhbiBvbmx5IGhhdmUgdGl0bGVzIGFuZCBjb250YWluIGEgbGlzdCBvZiB0b2Rvcy5cbi8vIHdoZW4gY3JlYXRlIGlzIHByZXNzZWQgaXQncyBhZGRlZCB0byB0aGUgbGlzdCBpbiB0aGUgc2lkZWJhclxuLy8gYW5kIHdoZW4gdGhlIHByb2plY3QgaXRlbSBpcyBjbGlja2VkIGVhY2ggb2YgdGhlIHRvZG8gaW4gaXQgaXMgbG9hZGVkIG9udG8gdGhlIHNjcmVlbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkVUksIHRvZ2dsZVBvcFVwfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBzaWRlYmFyID0gY3JlYXRlU2lkZWJhcigpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluQ29udGVudCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNpZGViYXIsIG1haW4pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250YWluZXIpO1xuICAgIGxvYWRVSSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIFxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lU2VjdGlvbigpO1xuICAgIGNvbnN0IHByb2plY3RzID0gY3JlYXRlUHJvamVjdFNlY3Rpb24oKTtcblxuICAgIHNpZGViYXIuYXBwZW5kKGhvbWUsIHByb2plY3RzKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgYWxsVGFza3MgPSBjcmVhdGVTaWRlYmFySXRlbShcIkluYm94XCIpO1xuICAgIGNvbnN0IHRhc2tzRm9yVG9kYXkgPSBjcmVhdGVTaWRlYmFySXRlbShcIlRvZGF5XCIpO1xuICAgIGNvbnN0IHRhc2tzRm9yV2VlayA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiVGhpcyBXZWVrXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudFRhc2tzID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJJbXBvcnRhbnRcIik7XG5cbiAgICBsaXN0LmFwcGVuZChhbGxUYXNrcywgdGFza3NGb3JUb2RheSwgdGFza3NGb3JXZWVrLCBpbXBvcnRhbnRUYXNrcyk7XG4gICAgaG9tZS5hcHBlbmQoaGVhZGluZywgbGlzdCk7XG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBjb25zdCB0b2RvQWRkQnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKGZhbHNlKTtcbiAgICBjb25zdCBwcm9qZWN0QWRkQnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKHRydWUpO1xuICAgIHByb2plY3RzLmFwcGVuZChoZWFkaW5nLCBsaXN0LCB0b2RvQWRkQnV0dG9uLCBwcm9qZWN0QWRkQnV0dG9uKTtcbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbihpc1Byb2plY3RCdXR0b24pIHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IGlzUHJvamVjdEJ1dHRvbiA/IFwiQ3JlYXRlIFByb2plY3RcIiA6IFwiQ3JlYXRlIFRvRG9cIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUG9wVXAoaXNQcm9qZWN0QnV0dG9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWRkQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFySXRlbShuYW1lKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gICAgLy8gQWxzbyBnb3R0YSBhcHBlbmQgdGhlIGxpc3Qgb2YgdG9kb3MgZm9yIHRoZSBkYXkuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==