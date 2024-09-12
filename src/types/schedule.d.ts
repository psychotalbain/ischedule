export type Task = {
  id: string
  title: string
  description: string
  date: string
  completed: boolean
}

export type DataContextType = {
  tasks: Task[]
  addTask: (task: Task) => void
  editTask: (task: Task) => void
  removeTask: (taskId: string) => void
}

export interface ScheduleContextType extends DataContextType {
  currentTasks: Task[]
}
