import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'

import { useBottomSheet } from '@components'
import { useData } from '@context/DataContext'
import { IReactFCWithChildren, IScheduleCompleteContext, ITask } from '@types'

const ScheduleContext = createContext<IScheduleCompleteContext | undefined>(
  undefined
)

export const ScheduleProvider: IReactFCWithChildren = ({ children }) => {
  const { openBottomSheet } = useBottomSheet()
  const { tasks } = useData()

  const [listTask, setListTask] = useState<ITask[]>([])

  useEffect(() => {
    setListTask(tasks.filter(task => task.completed))
  }, [tasks])

  const handleRemoveTask = useCallback((task: ITask) => {
    openBottomSheet('remove', task.id)
  }, [])

  return (
    <ScheduleContext.Provider
      value={{
        tasks,
        currentTasks: listTask,
        handleRemoveTask
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
