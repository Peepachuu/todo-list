export let projectsStorage = [];

export function projectAlreadyExists(name) {
    return projectsStorage.some(project => project.title == name);
}

export function insertTodoInStorage(todoToInsert) {
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