import { RequestHandler } from 'express';
import { HttpError } from './http-error';
export function decoratedMethod(method: RequestHandler) {
  const decoratedMethod: RequestHandler = async function(req, res, next) {
    try {
      await method(req, res, next)
    } catch (error) {
      const err = error as HttpError
      res.status(err.statusCode).send(err.message)
    }
  }
  return decoratedMethod
}

export interface IController {
  [method: string]: RequestHandler
}

export function controller<T extends IController>(controllerObj: T): T {
  const decoratedController: IController = {}
  Object.getOwnPropertyNames(controllerObj).map(method => controllerObj[method]).forEach(method => {
    decoratedController[method.name] = decoratedMethod(method)
  })
  return decoratedController as T
}