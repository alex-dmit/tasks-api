import { TaskDto } from './task.dto';
import { Request, Response } from 'express'
import TasksModel from './tasks.model'
import { createTaskService, getAllTasksService, getTaskService } from './tasks.service'

export async function getAllTasks(req: Request, res: Response) {
  const tasks = await getAllTasksService()
  res.send(tasks)
}

export async function getTask(req: Request, res: Response) {
  const id = +req.params.id
  const task = await getTaskService(id)
  res.send(task)
}

export async function createTask(req: Request, res: Response) {
  const newTask: TaskDto = req.body
  const taskFromDb = await createTaskService(newTask)
  res.send(taskFromDb)
}