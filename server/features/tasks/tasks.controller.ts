import { TaskDto } from './task.dto';
import { createTaskService, deleteTaskService, getAllTasksService, getTaskService, updateTaskService } from './tasks.service'
import { controller } from '../../services/decorators';

export const TasksController = controller({
  async getAllTasks(req, res) {
    const tasks = await getAllTasksService()
    res.send(tasks)
  },  
  async getTask(req, res) {
    const id = +req.params.id
    const task = await getTaskService(id)
    res.send(task)
  },  
  async createTask(req, res) {
    const newTask: TaskDto = req.body
    const taskFromDb = await createTaskService(newTask)
    res.send(taskFromDb)
  },  
  async updateTask(req, res) {
    const updatedTask: TaskDto = req.body
    const id = +req.params.id
    await updateTaskService(id, updatedTask)
    res.send({ success: true })
  },  
  async deleteTask (req, res) {
    const id = +req.params.id
    const result = await deleteTaskService(id)
    res.send(result)
  }
})



// export async function getAllTasks(req: Request, res: Response) {
//   const tasks = await getAllTasksService()
//   res.send(tasks)
// }

// export async function getTask(req: Request, res: Response) {
//   const id = +req.params.id
//   const task = await getTaskService(id)
//   res.send(task)
// }

// export async function createTask(req: Request, res: Response) {
//   const newTask: TaskDto = req.body
//   const taskFromDb = await createTaskService(newTask)
//   res.send(taskFromDb)
// }

// export async function updateTask(req: Request, res: Response) {
//   const updatedTask: TaskDto = req.body
//   const id = +req.params.id
//   await updateTaskService(id, updatedTask)
//   res.send({ success: true })
// }

// export const deleteTask = decoratedController(async function (req: Request, res: Response) {
//   const id = +req.params.id
//   const result = await deleteTaskService(id)
//   res.send(result)
// })