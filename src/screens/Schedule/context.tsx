import { useData } from '@context/DataContext'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { IReactFCWithChildren, IScheduleContext, ITask } from '@types'

const ScheduleContext = createContext<IScheduleContext | undefined>(undefined)

export const ScheduleProvider: IReactFCWithChildren = ({ children }) => {
  const { tasks, addTask, editTask, removeTask } = useData()
  const [listTask, setListTask] = useState<ITask[]>([])

  useEffect(() => {
    setListTask(tasks.filter(task => !task.completed))
  }, [tasks])

  return (
    <ScheduleContext.Provider
      value={{ tasks, currentTasks: listTask, addTask, editTask, removeTask }}>
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
