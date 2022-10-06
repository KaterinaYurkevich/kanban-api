export type Task = {
    id: number,
    attributes: {
      title: string
      description: string,
      status: string,
      route?: string,
    }
}
  
  