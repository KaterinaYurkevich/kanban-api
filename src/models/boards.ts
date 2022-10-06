import { Task } from './task';

export type Board = {
    id: number,
    attributes: {
      createdAt: string
      publishedAt: string
      title: string
      updateAt: string
      route: string
      tasks: {
        data: Task[]
      }
    },
    status?: boolean,
  }