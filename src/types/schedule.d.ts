export type ITask = {
  id: string
  title: string
  description: string
  date: string
  completed: boolean
}

export type IScheduleData = {
  tasks: ITask[]
  addTask: (task: ITask) => void
  editTask: (task: ITask) => void
  removeTask: (taskId: string) => void
}

export interface IScheduleContext extends IScheduleData {
  currentTasks: ITask[]
}
