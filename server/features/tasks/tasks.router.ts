import { createTaskValidator } from './tasks.validator';
// ES module
import express from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from './tasks.controller';
import TasksModel from "./tasks.model";
import { idValidator } from './tasks.validator';

const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks

tasksRouter.get('/', getAllTasks)

// tasksRouter.get('/', async (req, res) => {
//   res.send(await TasksModel.findAll())
// })

tasksRouter.get('/:id', idValidator, getTask)

tasksRouter.post('/', createTaskValidator, createTask)

tasksRouter.patch('/:id', idValidator, createTaskValidator, updateTask)

tasksRouter.delete('/:id', idValidator, deleteTask)

export default tasksRouter
