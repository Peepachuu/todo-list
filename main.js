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
/* harmony export */   "displayTodosFromProject": () => (/* binding */ displayTodosFromProject),
/* harmony export */   "makeProjectCreationForm": () => (/* binding */ makeProjectCreationForm)
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

        // Make this project the only active project
        const projects = document.querySelectorAll(".projects .list span");
        projects.forEach(element => {
            element.classList.remove("active");
        });
        projectTitle.classList.toggle("active");
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
/* harmony export */   "insertTodoInStorage": () => (/* binding */ insertTodoInStorage),
/* harmony export */   "projectAlreadyExists": () => (/* binding */ projectAlreadyExists),
/* harmony export */   "projectsStorage": () => (/* binding */ projectsStorage)
/* harmony export */ });
let projectsStorage = [];

function projectAlreadyExists(name) {
    return projectsStorage.some(project => project.title == name);
}

function insertTodoInStorage(todoToInsert) {
    const projectToInsertInto = document.querySelector(".projects .list .active");
    const position = projectsStorage.findIndex(project => project.title == projectToInsertInto.textContent);
    
    projectsStorage[position].todos.push(todoToInsert);
}

function findIndexOfProject(projectToFind) {
    let index = 0;
    projectsStorage.forEach((project) => {
        console.log(project.title, projectToFind);
        if (projectToFind == project.title) {
            return index;
        }
        ++index;
    });
    return "couldn't find";
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
const todo = function (title, description="", dueDate="none", priority="low", notes="", checklist="") {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
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
        resetPopUp();
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

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    const title = document.createElement("p");
    title.textContent = todoToDisplay.title;
    const detailsButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    detailsButton.textContent = "Details";
    deleteButton.textContent = "Del";

    todo.classList.add("todo");
    todo.append(status, title, detailsButton, deleteButton);
    const list = document.querySelector(".main .list");
    list.appendChild(todo);
}

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
        inputFields.forEach(element => {
            element.value = "";
        });
}

// Add more functionality to todo creation.
// Improve the look of things. 

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
    item.textContent = name;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHFDO0FBQzhCO0FBQ2Q7O0FBRTlDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQU87QUFDbEMsUUFBUSw2REFBb0I7QUFDNUIsb0JBQW9CLHdEQUFlO0FBQ25DO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBZ0I7QUFDeEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRk87O0FBRUE7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaUQ7QUFDbEI7O0FBRXhCO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBSTtBQUM1QixRQUFRLGdFQUFtQjtBQUMzQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGNkQ7QUFDTjs7QUFFaEQ7QUFDUDtBQUNBLHFCQUFxQixzRUFBb0I7QUFDekMsd0JBQXdCLDRFQUF1Qjs7QUFFL0M7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBTTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENyZWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb3NcbiAgICB9O1xufTsiLCJpbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7cHJvamVjdHNTdG9yYWdlLCBwcm9qZWN0QWxyZWFkeUV4aXN0c30gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgYWRkVG9kb1RvRGlzcGxheSB9IGZyb20gXCIuL3RvZG9DcmVhdGlvbi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVByb2plY3RDcmVhdGlvbkZvcm0oKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXBcIiwgXCJwcm9qZWN0XCIpOyBcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGl0bGUgaGVyZVwiO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdEFscmVhZHlFeGlzdHModGl0bGVJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBBbHJlYWR5IEV4aXN0c1wiKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0c1N0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNTdG9yYWdlKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgICAgIGFkZFByb2plY3RUb0Rpc3BsYXkobmV3UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGNyZWF0ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcblxuICAgIHBvcFVwLmFwcGVuZCh0aXRsZUlucHV0LCBidXR0b25Db250YWluZXIpO1xuICAgIHJldHVybiBwb3BVcDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRGlzcGxheShwcm9qZWN0VG9EaXNwbGF5KSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRvRGlzcGxheS50aXRsZTtcblxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5VG9kb3NGcm9tUHJvamVjdChwcm9qZWN0VG9EaXNwbGF5KTtcblxuICAgICAgICAvLyBNYWtlIHRoaXMgcHJvamVjdCB0aGUgb25seSBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHMgLmxpc3Qgc3BhblwiKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUVkaXRGb3JtKCk7XG4gICAgfSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKHByb2plY3RUaXRsZSwgZWRpdEJ1dHRvbik7XG4gICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciAucHJvamVjdHMgLmxpc3RcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kb3NGcm9tUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiAubGlzdFwiKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGFkZFRvZG9Ub0Rpc3BsYXkodG9kbyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKCkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xufVxuXG5mdW5jdGlvbiByZXNldFBvcFVwKHBvcFVwKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBwb3BVcC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG59XG4vLyBHZXQgdGhlIGZvcm0gZnVuY3Rpb25hbGl0eSBoZXJlXG4vLyBDcmVhdGluZyBhIGZvcm0gYWRkcyBpdCB0byB0aGUgc3RvcmFnZVxuLy8gTWFrZSBhIHdheSB0byBhc3NvY2lhdGUgdGhlIHByb2plY3QgaW4gdGhlIFVJIHRvIHRoZSBwcm9qZWN0IGluIHRoZSBzdG9yYWdlXG4vLyBUaGlzIHdpbGwgaGVscCBpbiBhZGRpbmcgdG9kb3MgdG8gcmVzcGVjdGl2ZSBwcm9qZWN0cy4gIiwiZXhwb3J0IGxldCBwcm9qZWN0c1N0b3JhZ2UgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RBbHJlYWR5RXhpc3RzKG5hbWUpIHtcbiAgICByZXR1cm4gcHJvamVjdHNTdG9yYWdlLnNvbWUocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0VG9kb0luU3RvcmFnZSh0b2RvVG9JbnNlcnQpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9JbnNlcnRJbnRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cyAubGlzdCAuYWN0aXZlXCIpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdHNTdG9yYWdlLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gcHJvamVjdFRvSW5zZXJ0SW50by50ZXh0Q29udGVudCk7XG4gICAgXG4gICAgcHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXS50b2Rvcy5wdXNoKHRvZG9Ub0luc2VydCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mUHJvamVjdChwcm9qZWN0VG9GaW5kKSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBwcm9qZWN0c1N0b3JhZ2UuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRpdGxlLCBwcm9qZWN0VG9GaW5kKTtcbiAgICAgICAgaWYgKHByb2plY3RUb0ZpbmQgPT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgICsraW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIFwiY291bGRuJ3QgZmluZFwiO1xufSIsImV4cG9ydCBjb25zdCB0b2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbj1cIlwiLCBkdWVEYXRlPVwibm9uZVwiLCBwcmlvcml0eT1cImxvd1wiLCBub3Rlcz1cIlwiLCBjaGVja2xpc3Q9XCJcIikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5vdGVzLFxuICAgICAgICBjaGVja2xpc3RcbiAgICB9O1xufTtcbiIsImltcG9ydCB7aW5zZXJ0VG9kb0luU3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHt0b2RvfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9kb0NyZWF0aW9uRm9ybSgpIHtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wVXAuY2xhc3NMaXN0LmFkZChcInBvcC11cFwiLCBcInRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0aXRsZUlucHV0LmlkKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkZXNjcmlwdGlvbklucHV0LmlkKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IHRvZG8odGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGluc2VydFRvZG9JblN0b3JhZ2UobmV3VG9Ebyk7XG4gICAgICAgIHJlc2V0UG9wVXAoKTtcbiAgICAgICAgYWRkVG9kb1RvRGlzcGxheShuZXdUb0RvKTtcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBkZXNjcmlwdGlvbkNvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wVXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvVG9EaXNwbGF5KHRvZG9Ub0Rpc3BsYXkpIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvVG9EaXNwbGF5LnRpdGxlO1xuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxcIjtcblxuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgdG9kby5hcHBlbmQoc3RhdHVzLCB0aXRsZSwgZGV0YWlsc0J1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5saXN0XCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAocG9wVXApIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbn1cblxuLy8gQWRkIG1vcmUgZnVuY3Rpb25hbGl0eSB0byB0b2RvIGNyZWF0aW9uLlxuLy8gSW1wcm92ZSB0aGUgbG9vayBvZiB0aGluZ3MuICIsImltcG9ydCB7bWFrZVByb2plY3RDcmVhdGlvbkZvcm19IGZyb20gXCIuL3Byb2plY3RDcmVhdGlvbi5qc1wiO1xuaW1wb3J0IHttYWtlVG9kb0NyZWF0aW9uRm9ybX0gZnJvbSBcIi4vdG9kb0NyZWF0aW9uLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IG1ha2VUb2RvQ3JlYXRpb25Gb3JtKCk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBtYWtlUHJvamVjdENyZWF0aW9uRm9ybSgpO1xuXG4gICAgbWFpbi5hcHBlbmQodG9kb0Zvcm0sIHByb2plY3RGb3JtKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUG9wVXAoaXNQcm9qZWN0QnV0dG9uKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBpc1Byb2plY3RCdXR0b24gPyBcIi5wb3AtdXAucHJvamVjdFwiIDogXCIucG9wLXVwLnRvZG9cIjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbn1cblxuLy8gQ2hhbmdlIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLiBJdCdzIHByZXR0eSB1Z2x5IHJuLiBcbi8vIE1ha2UgdGhlIHByb2plY3QgY3JlYXRpb24gZm9ybS5cbi8vIFdoZW4gdGhlIHByb2plY3QgY3JlYXRlIGJ1dHRvbiBpcyBwcmVzc2VkIGEgc2VwYXJhdGUgZm9ybSBhcHBlYXJzXG4vLyBQcm9qZWN0cyBjYW4gb25seSBoYXZlIHRpdGxlcyBhbmQgY29udGFpbiBhIGxpc3Qgb2YgdG9kb3MuXG4vLyB3aGVuIGNyZWF0ZSBpcyBwcmVzc2VkIGl0J3MgYWRkZWQgdG8gdGhlIGxpc3QgaW4gdGhlIHNpZGViYXJcbi8vIGFuZCB3aGVuIHRoZSBwcm9qZWN0IGl0ZW0gaXMgY2xpY2tlZCBlYWNoIG9mIHRoZSB0b2RvIGluIGl0IGlzIGxvYWRlZCBvbnRvIHRoZSBzY3JlZW4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bG9hZFVJLCB0b2dnbGVQb3BVcH0gZnJvbSBcIi4vdWkuanNcIjtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGNyZWF0ZVNpZGViYXIoKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbkNvbnRlbnQoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChzaWRlYmFyLCBtYWluKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlciwgY29udGFpbmVyKTtcbiAgICBsb2FkVUkoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb0RvXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICBjb25zdCBob21lID0gY3JlYXRlSG9tZVNlY3Rpb24oKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RTZWN0aW9uKCk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZChob21lLCBwcm9qZWN0cyk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiQWxsIFRhc2tzXCIpO1xuICAgIGNvbnN0IHRhc2tzRm9yVG9kYXkgPSBjcmVhdGVTaWRlYmFySXRlbShcIlRvZGF5XCIpO1xuICAgIGNvbnN0IHRhc2tzRm9yV2VlayA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiVGhpcyBXZWVrXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudFRhc2tzID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJJbXBvcnRhbnRcIik7XG5cbiAgICBsaXN0LmFwcGVuZChhbGxUYXNrcywgdGFza3NGb3JUb2RheSwgdGFza3NGb3JXZWVrLCBpbXBvcnRhbnRUYXNrcyk7XG4gICAgaG9tZS5hcHBlbmQoaGVhZGluZywgbGlzdCk7XG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBjb25zdCB0b2RvQWRkQnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKGZhbHNlKTtcbiAgICBjb25zdCBwcm9qZWN0QWRkQnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKHRydWUpO1xuICAgIHByb2plY3RzLmFwcGVuZChoZWFkaW5nLCBsaXN0LCB0b2RvQWRkQnV0dG9uLCBwcm9qZWN0QWRkQnV0dG9uKTtcbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbihpc1Byb2plY3RCdXR0b24pIHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IGlzUHJvamVjdEJ1dHRvbiA/IFwiQ3JlYXRlIFByb2plY3RcIiA6IFwiQ3JlYXRlIFRvRG9cIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUG9wVXAoaXNQcm9qZWN0QnV0dG9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWRkQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFySXRlbShuYW1lKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpdGVtLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gICAgLy8gQWxzbyBnb3R0YSBhcHBlbmQgdGhlIGxpc3Qgb2YgdG9kb3MgZm9yIHRoZSBkYXkuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==