export let projectsStorage = [];
export let defaultProjectsStorage = [];

export function projectAlreadyExists(name) {
    return projectsStorage.some(project => project.title == name);
}

export function insertTodoInStorage(todoToInsert) {
    insertToDefaultProjects(todoToInsert);
    const projectToInsertInto = document.querySelector(".projects .list .active");
    const position = projectsStorage.findIndex(project => project.title == projectToInsertInto.textContent);
    
    projectsStorage[position].todos.push(todoToInsert);
}

function insertToDefaultProjects(todoToInsert) {
    for (const project of defaultProjectsStorage) {
        if (project.title == "Important") {
            if (todoToInsert.isImportant)
                project.todos.push(todoToInsert);
        } else if (project.title == "Today") {
            // Do stuff
        } else if (project.title == "This Week") {
            // Do stuff
        }
    }
}