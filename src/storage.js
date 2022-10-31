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