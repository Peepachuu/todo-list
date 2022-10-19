export const todo = function (title, description="", dueDate="none", priority="low", notes="", checklist="") {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
    };
};
