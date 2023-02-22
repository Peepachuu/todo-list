export const todo = function (title, description="", dueDate="none", isImportant=false, parentProject=null, isCompleted=false) {
    return {
        title,
        description,
        dueDate,
        isImportant,
        parentProject,
        isCompleted
    };
};
