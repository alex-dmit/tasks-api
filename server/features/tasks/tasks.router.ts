import { createTaskValidator } from './tasks.validator';
// ES module
import express from "express";
import { TasksController } from './tasks.controller';
import TasksModel from "./tasks.model";
import { idValidator } from './tasks.validator';

const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks

tasksRouter.get('/', TasksController.getAllTasks)

// tasksRouter.get('/', async (req, res) => {
//   res.send(await TasksModel.findAll())
// })

tasksRouter.get('/:id', idValidator, TasksController.getTask)

tasksRouter.post('/', createTaskValidator, TasksController.createTask)

tasksRouter.patch('/:id', idValidator, createTaskValidator, TasksController.updateTask)

tasksRouter.delete('/:id', idValidator, TasksController.deleteTask)

export default tasksRouter
