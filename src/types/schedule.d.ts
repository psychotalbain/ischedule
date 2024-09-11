export type Task = {
  id: string
  title: string
  description: string
  date: string
  completed: boolean
}

export type ScheduleContextType = {
  tasks: Task[]
  currentTasks: Task[]
  addTask: (task: Task) => void
  editTask: (task: Task) => void
  removeTask: (taskId: string) => void
}
