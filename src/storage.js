import { isToday, isThisWeek } from "date-fns";

export let projectsStorage = [];
export let defaultProjectsStorage = [];

export function projectAlreadyExists(name) {
    return projectsStorage.some(project => project.title == name);
}

export function insertTodoInStorage(todoToInsert) {
    const projectToInsertInto = document.querySelector(".projects .list .active");
    const position = projectsStorage.findIndex(project => project.title == projectToInsertInto.textContent);
    
    projectsStorage[position].todos.push(todoToInsert);
    todoToInsert.parentProject = projectsStorage[position];
}

export function deleteTodoFromStorage(todoToDelete) {
    const position = projectsStorage.findIndex(project => project == todoToDelete.parentProject);
    projectsStorage[position].todos.splice(projectsStorage[position].todos.findIndex(todo => todo == todoToDelete), 1);
}

export function findImportantTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            if (todo.isImportant)
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
            console.log(format, isToday(new Date(2022, 10, 1)));
            if (isToday(new Date(format[0], format[1] - 1, format[2])))
                tasks.push(todo);
        })
    })
    return tasks;
}

function findTodoForThisWeek() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            // if (todo.dueDate)
        })
    })
    return tasks;
}