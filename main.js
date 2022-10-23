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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");




function loadUI() {
    const main = document.querySelector(".main");
    const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)("This is a todo");
    displayToDo(newTodo);
    const form = createTodoPopUp();

    main.appendChild(form);
}


function togglePopUp(isProjectButton) {
    const selector = isProjectButton ? ".pop-up project" : ".pop-up todo";
    const form = document.querySelector(selector);
    form.classList.toggle("show");
}

function createProjectPopUp() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up project");

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title here";

    const createButton = document.createElement("button");
    createButton.addEventListener("click", () => {
        popUp.classList.toggle("show");
        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(titleInput.value);
        displayProject(newProject);
    });

    const cancelButton = document.createElement("button");
    cancelButton.addEventListener("click", (e) => {
        popUp.classList.toggle("show");
        resetPopUp(e);
    });
    popUp.append(titleInput, createButton, cancelButton);
}

function createTodoPopUp() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up todo");

    const titleInput = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleInput.id = "title";
    titleInput.setAttribute("name", "title");
    titleLabel.setAttribute("for", titleInput.id);

    const descriptionInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionInput.id = "description";
    descriptionLabel.setAttribute("for", descriptionInput.id);
    descriptionInput.setAttribute("name", "description");

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show");
        const newToDo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)(titleInput.value);
        displayToDo(newToDo);
    });

    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', (e) => {
        popUp.classList.toggle("show");
        resetPopUp(e);
    })
    popUp.append(titleLabel, titleInput, descriptionLabel, descriptionInput, createButton, cancelButton);
    return popUp;
}

function resetPopUp(e) {
    const inputFields = e.target.parentNode.querySelectorAll("input");
    inputFields.forEach(element => {
        element.value = "";
    });
}

function displayProject() {

}

function displayToDo(todoToDisplay) {
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

// Change the appearance of the form. It's pretty ugly rn. 
// Make the project creation form.
// When the project create button is pressed a separate form appears
// Projects can only have titles and contain a list of todos.

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

    const sidebarItems = document.createElement("ul");
    const allTasks = createSidebarItem("All Tasks");
    const tasksForToday = createSidebarItem("Today");
    const tasksForWeek = createSidebarItem("This Week");
    const importantTasks = createSidebarItem("Important");
    const projects = createSidebarItem("Projects");
    const todoAddButton = createAddButton(false);
    const projectAddButton = createAddButton(true);

    sidebarItems.append(allTasks, tasksForToday, tasksForWeek, importantTasks, projects, todoAddButton, projectAddButton);
    sidebar.append(sidebarItems);
    return sidebar;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdUM7QUFDTjs7O0FBRzFCO0FBQ1A7QUFDQSxvQkFBb0IsOENBQUk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBTztBQUNsQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFJO0FBQzVCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNqSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQU07QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0b2Rvc1xuICAgIH07XG59O1xuXG4iLCJleHBvcnQgY29uc3QgdG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb249XCJcIiwgZHVlRGF0ZT1cIm5vbmVcIiwgcHJpb3JpdHk9XCJsb3dcIiwgbm90ZXM9XCJcIiwgY2hlY2tsaXN0PVwiXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBub3RlcyxcbiAgICAgICAgY2hlY2tsaXN0XG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVJKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG8oXCJUaGlzIGlzIGEgdG9kb1wiKTtcbiAgICBkaXNwbGF5VG9EbyhuZXdUb2RvKTtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVG9kb1BvcFVwKCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQb3BVcChpc1Byb2plY3RCdXR0b24pIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGlzUHJvamVjdEJ1dHRvbiA/IFwiLnBvcC11cCBwcm9qZWN0XCIgOiBcIi5wb3AtdXAgdG9kb1wiO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0UG9wVXAoKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAgcHJvamVjdFwiKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGl0bGUgaGVyZVwiO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgcmVzZXRQb3BVcChlKTtcbiAgICB9KTtcbiAgICBwb3BVcC5hcHBlbmQodGl0bGVJbnB1dCwgY3JlYXRlQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvUG9wVXAoKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAgdG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGl0bGVJbnB1dC5pZCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGRlc2NyaXB0aW9uSW5wdXQuaWQpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBcbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gdG9kbyh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgZGlzcGxheVRvRG8obmV3VG9Ebyk7XG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICByZXNldFBvcFVwKGUpO1xuICAgIH0pXG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsIGNyZWF0ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcbiAgICByZXR1cm4gcG9wVXA7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAoZSkge1xuICAgIGNvbnN0IGlucHV0RmllbGRzID0gZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvKHRvZG9Ub0Rpc3BsYXkpIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvVG9EaXNwbGF5LnRpdGxlO1xuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxcIjtcblxuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgdG9kby5hcHBlbmQoc3RhdHVzLCB0aXRsZSwgZGV0YWlsc0J1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5saXN0XCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kbyk7XG59XG5cbi8vIENoYW5nZSB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS4gSXQncyBwcmV0dHkgdWdseSBybi4gXG4vLyBNYWtlIHRoZSBwcm9qZWN0IGNyZWF0aW9uIGZvcm0uXG4vLyBXaGVuIHRoZSBwcm9qZWN0IGNyZWF0ZSBidXR0b24gaXMgcHJlc3NlZCBhIHNlcGFyYXRlIGZvcm0gYXBwZWFyc1xuLy8gUHJvamVjdHMgY2FuIG9ubHkgaGF2ZSB0aXRsZXMgYW5kIGNvbnRhaW4gYSBsaXN0IG9mIHRvZG9zLiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkVUksIHRvZ2dsZVBvcFVwfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBzaWRlYmFyID0gY3JlYXRlU2lkZWJhcigpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluQ29udGVudCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNpZGViYXIsIG1haW4pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250YWluZXIpO1xuICAgIGxvYWRVSSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIFxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiQWxsIFRhc2tzXCIpO1xuICAgIGNvbnN0IHRhc2tzRm9yVG9kYXkgPSBjcmVhdGVTaWRlYmFySXRlbShcIlRvZGF5XCIpO1xuICAgIGNvbnN0IHRhc2tzRm9yV2VlayA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiVGhpcyBXZWVrXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudFRhc2tzID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJJbXBvcnRhbnRcIik7XG4gICAgY29uc3QgcHJvamVjdHMgPSBjcmVhdGVTaWRlYmFySXRlbShcIlByb2plY3RzXCIpO1xuICAgIGNvbnN0IHRvZG9BZGRCdXR0b24gPSBjcmVhdGVBZGRCdXR0b24oZmFsc2UpO1xuICAgIGNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBjcmVhdGVBZGRCdXR0b24odHJ1ZSk7XG5cbiAgICBzaWRlYmFySXRlbXMuYXBwZW5kKGFsbFRhc2tzLCB0YXNrc0ZvclRvZGF5LCB0YXNrc0ZvcldlZWssIGltcG9ydGFudFRhc2tzLCBwcm9qZWN0cywgdG9kb0FkZEJ1dHRvbiwgcHJvamVjdEFkZEJ1dHRvbik7XG4gICAgc2lkZWJhci5hcHBlbmQoc2lkZWJhckl0ZW1zKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkQnV0dG9uKGlzUHJvamVjdEJ1dHRvbikge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gaXNQcm9qZWN0QnV0dG9uID8gXCJDcmVhdGUgUHJvamVjdFwiIDogXCJDcmVhdGUgVG9Eb1wiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQb3BVcChpc1Byb2plY3RCdXR0b24pO1xuICAgIH0pO1xuICAgIHJldHVybiBhZGRCdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICAvLyBBbHNvIGdvdHRhIGFwcGVuZCB0aGUgbGlzdCBvZiB0b2RvcyBmb3IgdGhlIGRheS5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9