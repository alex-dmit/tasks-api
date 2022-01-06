// ES module
import express from "express";
import { createTask, getAllTasks, getTask } from './tasks.controller';
import TasksModel from "./tasks.model";

const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks

tasksRouter.get('/', getAllTasks)

tasksRouter.get('/:id', getTask)

tasksRouter.post('/', createTask)

export default tasksRouter
