import { useTheme } from '@theme'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { useBottomSheet } from '@components'
import { useData } from '@context/DataContext'
import { IReactFCWithChildren, IScheduleContext, ITask } from '@types'

const ScheduleContext = createContext<IScheduleContext | undefined>(undefined)

export const ScheduleProvider: IReactFCWithChildren = ({ children }) => {
  const { openBottomSheet } = useBottomSheet()
  const { toggleTheme } = useTheme()
  const { tasks } = useData()
  const [listTask, setListTask] = useState<ITask[]>([])

  useEffect(() => {
    setListTask(tasks.filter(task => !task.completed))
  }, [tasks])

  const handleAddTask = useCallback(() => {
    openBottomSheet('add')
  }, [])

  const handleEditTask = useCallback((task: ITask) => {
    openBottomSheet('edit', task)
  }, [])

  const handleCompleteTask = useCallback((task: ITask) => {
    openBottomSheet('complete', task)
  }, [])

  const handleTheme = useCallback(() => {
    toggleTheme()
  }, [])

  return (
    <ScheduleContext.Provider
      value={{
        tasks,
        currentTasks: listTask,
        handleTheme,
        handleAddTask,
        handleEditTask,
        handleCompleteTask
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
