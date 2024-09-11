import { useData } from '@context/DataContext'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'

import { ReactFCWithChildren, ScheduleContextType, Task } from '@types'

const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined
)

export const ScheduleProvider: ReactFCWithChildren = ({ children }) => {
  const { tasks, addTask, editTask, removeTask } = useData()
  const [listTask, setListTask] = useState<Task[]>([])

  useEffect(() => {
    setListTask(tasks.filter(task => task.completed))
  }, [tasks])

  const removeLocalTask = useCallback(
    (taskId: string) => {
      const updatedList = listTask.filter(task => task.id !== taskId)
      setListTask(updatedList)
      removeTask(taskId)
    },
    [listTask, removeTask]
  )

  return (
    <ScheduleContext.Provider
      value={{
        tasks,
        currentTasks: listTask,
        addTask,
        editTask,
        removeTask: removeLocalTask
      }}>
      {children}
    </ScheduleContext.Provider>
  )
}

export const useSchedule = () => {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error('useSchedule must be used within a ScheduleProvider')
  }
  return context
}
