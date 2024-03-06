const express = require('express');
const router = express.Router();

class Task {
    constructor(id, title, description, isDone, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

function findTask(id){
    let numId = Number(id);
    for (let i = 0; i < tasks.length; i++) {
        if (Number(tasks[i].id) === numId) {
            return tasks[i];
        }
    }
    return null;
}

function deleteTask(id){
    let numId = Number(id);
    for (let i = 0; i < tasks.length; i++) {
        if (Number(tasks[i].id) === numId) {
            tasks.splice(i, 1);
            return;
        }
    }
}

function addTask(id,title, description, isDone, startDate, endDate) {
    let task = new Task(id, title, description, isDone, startDate, endDate);
    tasks.push(task);
}
let tasks = [];

tasks.push(new Task(1, "Task 1", "Do homeworks", false, "2020-01-01", "2020-01-02"));



router.post("/create", (req, res) => {
    addTask(req.body.id,req.body.title, req.body.description, req.body.isDone, req.body.startDate, req.body.endDate);
    res.send(tasks);

    
});

router.get("/getTasks", (req, res) => {
        res.send(tasks);

});

router.put("/update/:id", (req, res) => {
    var task = findTask(req.params.id);
    if (task !== null) {
        task.title = req.body.title;
        task.description = req.body.description;
        task.isDone = req.body.isDone;
        task.startDate = req.body.startDate;
        task.endDate = req.body.endDate;
        res.send(task);
    } else {
        res.send("Task not found");
    }


});

router.delete("/delete/:id", (req, res) => {
    var task = findTask(req.params.id);
    if (task !== null) {
        deleteTask(req.params.id);
        res.send(tasks);
    } else {
        res.send("Task not found");
    }
});


module.exports = router;