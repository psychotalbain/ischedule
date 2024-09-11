export type ScheduledTasksContextType = {
  tasks: Task[]
  markTaskAsCompleted: (taskId: string) => void
  removeTask: (taskId: string) => void
}
