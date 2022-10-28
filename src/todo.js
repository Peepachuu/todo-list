export const todo = function (title, description="", dueDate="none", isImportant=false, notes="", checklist="") {
    return {
        title,
        description,
        dueDate,
        isImportant,
        notes,
        checklist
    };
};
