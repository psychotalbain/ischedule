import { useData } from '@context/DataContext'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'

import { IReactFCWithChildren, IScheduleContext, ITask } from '@types'

const ScheduleContext = createContext<IScheduleContext | undefined>(undefined)

export const ScheduleProvider: IReactFCWithChildren = ({ children }) => {
  const { tasks, addTask, editTask, removeTask } = useData()
  const [listTask, setListTask] = useState<ITask[]>([])

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
