const fs = require("fs");
function saveTaskPromise(task) {
    return fs.promises.appendFile("tasks.txt", task + "\n");
}
const task = "Complete Promise-based Node.js task";
saveTaskPromise(task)
    .then(() => {
        console.log("Task saved successfully!");
    })
    .catch((err) => {
        console.error("Failed to save task:", err.message);
    });