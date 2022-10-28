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
const todo = function (title, description="", dueDate="none", isImportant=false, notes="", checklist="") {
    return {
        title,
        description,
        dueDate,
        isImportant,
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
    todo.classList.add("todo");

    const important = document.createElement("input");
    important.setAttribute("type", "checkbox");
    important.addEventListener("change", () => {
        todoToDisplay.isImportant = important.checked;
        console.log(important.checked);
    });

    todo.append(status, title, detailsButton, important, deleteButton);
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
// Make it so that the user can add due dates
// Make it so that the user can choose whether a task is important

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENyZWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb3NcbiAgICB9O1xufTsiLCJpbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7cHJvamVjdHNTdG9yYWdlLCBwcm9qZWN0QWxyZWFkeUV4aXN0c30gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgYWRkVG9kb1RvRGlzcGxheSB9IGZyb20gXCIuL3RvZG9DcmVhdGlvbi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVByb2plY3RDcmVhdGlvbkZvcm0oKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXBcIiwgXCJwcm9qZWN0XCIpOyBcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGl0bGUgaGVyZVwiO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdEFscmVhZHlFeGlzdHModGl0bGVJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBBbHJlYWR5IEV4aXN0c1wiKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0c1N0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNTdG9yYWdlKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgICAgIGFkZFByb2plY3RUb0Rpc3BsYXkobmV3UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGNyZWF0ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcblxuICAgIHBvcFVwLmFwcGVuZCh0aXRsZUlucHV0LCBidXR0b25Db250YWluZXIpO1xuICAgIHJldHVybiBwb3BVcDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRGlzcGxheShwcm9qZWN0VG9EaXNwbGF5KSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRvRGlzcGxheS50aXRsZTtcblxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5VG9kb3NGcm9tUHJvamVjdChwcm9qZWN0VG9EaXNwbGF5KTtcblxuICAgICAgICAvLyBNYWtlIHRoaXMgcHJvamVjdCB0aGUgb25seSBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHMgLmxpc3Qgc3BhblwiKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUVkaXRGb3JtKCk7XG4gICAgfSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKHByb2plY3RUaXRsZSwgZWRpdEJ1dHRvbik7XG4gICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciAucHJvamVjdHMgLmxpc3RcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kb3NGcm9tUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiAubGlzdFwiKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGFkZFRvZG9Ub0Rpc3BsYXkodG9kbyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKCkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xufVxuXG5mdW5jdGlvbiByZXNldFBvcFVwKHBvcFVwKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBwb3BVcC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG59XG4vLyBHZXQgdGhlIGZvcm0gZnVuY3Rpb25hbGl0eSBoZXJlXG4vLyBDcmVhdGluZyBhIGZvcm0gYWRkcyBpdCB0byB0aGUgc3RvcmFnZVxuLy8gTWFrZSBhIHdheSB0byBhc3NvY2lhdGUgdGhlIHByb2plY3QgaW4gdGhlIFVJIHRvIHRoZSBwcm9qZWN0IGluIHRoZSBzdG9yYWdlXG4vLyBUaGlzIHdpbGwgaGVscCBpbiBhZGRpbmcgdG9kb3MgdG8gcmVzcGVjdGl2ZSBwcm9qZWN0cy4gIiwiZXhwb3J0IGxldCBwcm9qZWN0c1N0b3JhZ2UgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RBbHJlYWR5RXhpc3RzKG5hbWUpIHtcbiAgICByZXR1cm4gcHJvamVjdHNTdG9yYWdlLnNvbWUocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0VG9kb0luU3RvcmFnZSh0b2RvVG9JbnNlcnQpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9JbnNlcnRJbnRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cyAubGlzdCAuYWN0aXZlXCIpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdHNTdG9yYWdlLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gcHJvamVjdFRvSW5zZXJ0SW50by50ZXh0Q29udGVudCk7XG4gICAgXG4gICAgcHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXS50b2Rvcy5wdXNoKHRvZG9Ub0luc2VydCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mUHJvamVjdChwcm9qZWN0VG9GaW5kKSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBwcm9qZWN0c1N0b3JhZ2UuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRpdGxlLCBwcm9qZWN0VG9GaW5kKTtcbiAgICAgICAgaWYgKHByb2plY3RUb0ZpbmQgPT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgICsraW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIFwiY291bGRuJ3QgZmluZFwiO1xufSIsImV4cG9ydCBjb25zdCB0b2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbj1cIlwiLCBkdWVEYXRlPVwibm9uZVwiLCBpc0ltcG9ydGFudD1mYWxzZSwgbm90ZXM9XCJcIiwgY2hlY2tsaXN0PVwiXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIGlzSW1wb3J0YW50LFxuICAgICAgICBub3RlcyxcbiAgICAgICAgY2hlY2tsaXN0XG4gICAgfTtcbn07XG4iLCJpbXBvcnQge2luc2VydFRvZG9JblN0b3JhZ2V9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7dG9kb30gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRvZG9DcmVhdGlvbkZvcm0oKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXBcIiwgXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGl0bGVJbnB1dC5pZCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzY3JpcHRpb25JbnB1dC5pZCk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpXG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b2RvKHRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICBpbnNlcnRUb2RvSW5TdG9yYWdlKG5ld1RvRG8pO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICAgICAgYWRkVG9kb1RvRGlzcGxheShuZXdUb0RvKTtcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBkZXNjcmlwdGlvbkNvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wVXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvVG9EaXNwbGF5KHRvZG9Ub0Rpc3BsYXkpIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvVG9EaXNwbGF5LnRpdGxlO1xuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxcIjtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvVG9EaXNwbGF5LmlzSW1wb3J0YW50ID0gaW1wb3J0YW50LmNoZWNrZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGltcG9ydGFudC5jaGVja2VkKTtcbiAgICB9KTtcblxuICAgIHRvZG8uYXBwZW5kKHN0YXR1cywgdGl0bGUsIGRldGFpbHNCdXR0b24sIGltcG9ydGFudCwgZGVsZXRlQnV0dG9uKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5saXN0XCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAocG9wVXApIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbn1cbi8vIEFkZCBtb3JlIGZ1bmN0aW9uYWxpdHkgdG8gdG9kbyBjcmVhdGlvbi5cbi8vIE1ha2UgaXQgc28gdGhhdCB0aGUgdXNlciBjYW4gYWRkIGR1ZSBkYXRlc1xuLy8gTWFrZSBpdCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBjaG9vc2Ugd2hldGhlciBhIHRhc2sgaXMgaW1wb3J0YW50IiwiaW1wb3J0IHttYWtlUHJvamVjdENyZWF0aW9uRm9ybX0gZnJvbSBcIi4vcHJvamVjdENyZWF0aW9uLmpzXCI7XG5pbXBvcnQge21ha2VUb2RvQ3JlYXRpb25Gb3JtfSBmcm9tIFwiLi90b2RvQ3JlYXRpb24uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gbWFrZVRvZG9DcmVhdGlvbkZvcm0oKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IG1ha2VQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XG5cbiAgICBtYWluLmFwcGVuZCh0b2RvRm9ybSwgcHJvamVjdEZvcm0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQb3BVcChpc1Byb2plY3RCdXR0b24pIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGlzUHJvamVjdEJ1dHRvbiA/IFwiLnBvcC11cC5wcm9qZWN0XCIgOiBcIi5wb3AtdXAudG9kb1wiO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xufVxuXG4vLyBDaGFuZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0uIEl0J3MgcHJldHR5IHVnbHkgcm4uIFxuLy8gTWFrZSB0aGUgcHJvamVjdCBjcmVhdGlvbiBmb3JtLlxuLy8gV2hlbiB0aGUgcHJvamVjdCBjcmVhdGUgYnV0dG9uIGlzIHByZXNzZWQgYSBzZXBhcmF0ZSBmb3JtIGFwcGVhcnNcbi8vIFByb2plY3RzIGNhbiBvbmx5IGhhdmUgdGl0bGVzIGFuZCBjb250YWluIGEgbGlzdCBvZiB0b2Rvcy5cbi8vIHdoZW4gY3JlYXRlIGlzIHByZXNzZWQgaXQncyBhZGRlZCB0byB0aGUgbGlzdCBpbiB0aGUgc2lkZWJhclxuLy8gYW5kIHdoZW4gdGhlIHByb2plY3QgaXRlbSBpcyBjbGlja2VkIGVhY2ggb2YgdGhlIHRvZG8gaW4gaXQgaXMgbG9hZGVkIG9udG8gdGhlIHNjcmVlbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkVUksIHRvZ2dsZVBvcFVwfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBzaWRlYmFyID0gY3JlYXRlU2lkZWJhcigpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluQ29udGVudCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNpZGViYXIsIG1haW4pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250YWluZXIpO1xuICAgIGxvYWRVSSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIFxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lU2VjdGlvbigpO1xuICAgIGNvbnN0IHByb2plY3RzID0gY3JlYXRlUHJvamVjdFNlY3Rpb24oKTtcblxuICAgIHNpZGViYXIuYXBwZW5kKGhvbWUsIHByb2plY3RzKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJBbGwgVGFza3NcIik7XG4gICAgY29uc3QgdGFza3NGb3JUb2RheSA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiVG9kYXlcIik7XG4gICAgY29uc3QgdGFza3NGb3JXZWVrID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJUaGlzIFdlZWtcIik7XG4gICAgY29uc3QgaW1wb3J0YW50VGFza3MgPSBjcmVhdGVTaWRlYmFySXRlbShcIkltcG9ydGFudFwiKTtcblxuICAgIGxpc3QuYXBwZW5kKGFsbFRhc2tzLCB0YXNrc0ZvclRvZGF5LCB0YXNrc0ZvcldlZWssIGltcG9ydGFudFRhc2tzKTtcbiAgICBob21lLmFwcGVuZChoZWFkaW5nLCBsaXN0KTtcbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgIGNvbnN0IHRvZG9BZGRCdXR0b24gPSBjcmVhdGVBZGRCdXR0b24oZmFsc2UpO1xuICAgIGNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBjcmVhdGVBZGRCdXR0b24odHJ1ZSk7XG4gICAgcHJvamVjdHMuYXBwZW5kKGhlYWRpbmcsIGxpc3QsIHRvZG9BZGRCdXR0b24sIHByb2plY3RBZGRCdXR0b24pO1xuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkQnV0dG9uKGlzUHJvamVjdEJ1dHRvbikge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gaXNQcm9qZWN0QnV0dG9uID8gXCJDcmVhdGUgUHJvamVjdFwiIDogXCJDcmVhdGUgVG9Eb1wiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQb3BVcChpc1Byb2plY3RCdXR0b24pO1xuICAgIH0pO1xuICAgIHJldHVybiBhZGRCdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICAvLyBBbHNvIGdvdHRhIGFwcGVuZCB0aGUgbGlzdCBvZiB0b2RvcyBmb3IgdGhlIGRheS5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9