import { ITask } from '@types'

export type ScheduledTasksContextType = {
  tasks: ITask[]
  markTaskAsCompleted: (taskId: string) => void
  removeTask: (taskId: string) => void
}
