import { isToday, isThisWeek } from "date-fns";

export let projectsStorage = [];
export let defaultProjectsStorage = [];

export function projectExists(name) {
    return projectsStorage.some(project => project.title == name);
}

export function insertTodoInStorage(todoToInsert) {
    const projectToInsertInto = document.querySelector(".projects .list .active");
    const projectTitle = projectToInsertInto.querySelector("span").textContent;
    const position = projectsStorage.findIndex(project => project.title == projectTitle);
    
    projectsStorage[position].todos.push(todoToInsert);
    todoToInsert.parentProject = projectsStorage[position].title;
    saveDataInLocalStorage();
}

export function insertProjectInStorage(projectToInsert) {
    projectsStorage.push(projectToInsert);
    saveDataInLocalStorage();
}

export function deleteTodoFromStorage(todoToDelete) {
    const position = projectsStorage.findIndex(project => project.title == todoToDelete.parentProject);
    projectsStorage[position].todos.splice(projectsStorage[position].todos.findIndex(todo => todo == todoToDelete), 1);
    saveDataInLocalStorage();
}

export function deleteProjectFromStorage(projectToDelete) {
    const position = projectsStorage.findIndex(project => project == projectToDelete);
    projectsStorage.splice(position, 1);
    saveDataInLocalStorage();
}

export function findImportantTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            if (todo.isImportant && !todo.isCompleted)
                tasks.push(todo);
        });
    });
    return tasks;
}

export function findTodosForToday() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            let format = todo.dueDate.split("-");
            format = format.map(x => Number(x));
            if (isToday(new Date(format[0], format[1] - 1, format[2])) && !todo.isCompleted)
                tasks.push(todo);
        })
    })
    return tasks;
}

export function findTodoForThisWeek() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            let format = todo.dueDate.split("-");
            format = format.map(x => Number(x));
            if (isThisWeek(new Date(format[0], format[1] - 1, format[2])) && !todo.isCompleted)
                tasks.push(todo);
        })
    })
    return tasks;
}

export function findCompletedTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            if (todo.isCompleted)
                tasks.push(todo);
        })
    })
    return tasks;
}

export function findAllTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            if (!todo.isCompleted)
                tasks.push(todo);
        });
    });
    return tasks;
}

export function saveDataInLocalStorage() {
    localStorage.setItem("projectsStorage", JSON.stringify(projectsStorage));
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

export function getStoredData() {
    if (!storageAvailable("localStorage"))
        return ;
    projectsStorage = JSON.parse(localStorage.getItem("projectsStorage")) || [];
}