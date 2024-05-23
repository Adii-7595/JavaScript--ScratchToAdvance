let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req == "quit") {
        console.log("Quitting app");
        break;
    }

    if (req == "list") {
        console.log("-------------------");
        if (todo.length == 0) {
            console.log("No tasks in the list");
        } else {
            for (let task = 0; task < todo.length; task++) {
                console.log(task, todo[task]);
            }
        }
        console.log("-------------------");
    } else if (req == "add") {
        let task = prompt("Please enter the task you want to add");
        if (task) {
            todo.push(task);
            console.log("Task added");
        } else {
            console.log("Task cannot be empty");
        }
    } else if (req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");

    } else {
        console.log("Unknown request. Please enter add, list, or quit");
    }

    req = prompt("Please enter your request");
}

