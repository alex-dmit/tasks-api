import { httpError } from '../../services/http-error';
import { TaskDto } from './task.dto';
import TasksModel from './tasks.model';

export async function getAllTasksService() {
  const tasks = await TasksModel.findAll()
  return tasks
}

export async function createTaskService(newTask: TaskDto) {
  const taskFromDb = await TasksModel.create(newTask)
  return taskFromDb
}

export async function updateTaskService(id: number, updatedTask: TaskDto) {
  return TasksModel.update(updatedTask, {
    where: { id }
  })
}

export async function getTaskService(id: number) {
  const task = await TasksModel.findByPk(id)
  return task
}

export async function deleteTaskService(id: number) {
  let result;
  // try {
    result = await TasksModel.destroy({ where: { id } })
  // } catch (error) {
  //   const err = error as Error
  //   throw httpError(400, err.message)
  // }
  if (result === 1) {
    return { success: true }
  } else {
    throw httpError(404, 'Nothing to delete')
  }
}