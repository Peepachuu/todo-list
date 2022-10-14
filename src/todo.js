const todo = function (title, description, dueDate, priority, notes, checklist) {


    return {
        get title() {
            return title;
        },

        get descripttion() {
            return description;
        },

        get dueDate() {
            return dueDate;
        },

        get priority() {
            return priority;
        },

        get notes() {
            return notes;
        },

        get checklist() {
            return checklist;
        }
    };
};

const firstTodo = todo("random", 1, 2, 3, 4, 5);
console.log(firstTodo.notes);