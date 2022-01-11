import { TaskDto } from './task.dto';
import { Request, Response } from 'express'
import { createTaskService, deleteTaskService, getAllTasksService, getTaskService, updateTaskService } from './tasks.service'
import { HttpError } from '../../services/http-error';

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

export async function updateTask(req: Request, res: Response) {
  const updatedTask: TaskDto = req.body
  const id = +req.params.id
  await updateTaskService(id, updatedTask)
  res.send({ success: true })
}

export async function deleteTask(req: Request, res: Response) {
  const id = +req.params.id
  try {
    const result = await deleteTaskService(id)
    res.send(result)
  } catch (error) {
    const err = error as HttpError
    res.status(err.statusCode).send(err.message)
  }
}