const express = require("express");
const TasksModel = require("./tasks.model");

const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks
tasksRouter.get('/', async (req, res) => {
    const tasks = await TasksModel.findAll()
    res.send(tasks)
})

tasksRouter.post('/', async (req, res) => {
    const newTask = req.body
    const taskFromDb = await TasksModel.create(newTask)
    res.send(taskFromDb)
})

module.exports = tasksRouter