export type ITask = {
  id: string
  title: string
  description: string
  date: string
  completed: boolean
}

export type IScheduleData = {
  tasks: ITask[]
}

export interface IScheduleDataContext extends IScheduleData {
  addTask: (task: ITask) => void
  editTask: (task: ITask) => void
  removeTask: (taskId: string) => void
}

export interface IScheduleContext extends IScheduleData {
  currentTasks: ITask[]
  handleAddTask: () => void
  handleEditTask: (task: ITask) => void
  handleCompleteTask: (task: ITask) => void
  handleTheme: () => void
}
