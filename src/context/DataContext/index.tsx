import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'

import { IReactFCWithChildren, IScheduleData, ITask } from '@types'

const STORAGE_KEY = '@data_tasks'

const DataContext = createContext<IScheduleData | undefined>(undefined)

export const DataProvider: IReactFCWithChildren = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(STORAGE_KEY)
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks))
        }
      } catch (error) {
        console.error('Failed to load tasks:', error)
      }
    }

    loadTasks()
  }, [])

  const saveTasks = useCallback(async (newTasks: ITask[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks))
    } catch (error) {
      console.error('Failed to save tasks:', error)
    }
  }, [])

  const addTask = useCallback(
    (task: ITask) => {
      setTasks(prevTasks => {
        if (prevTasks.some(t => t.id === task.id)) {
          console.warn('Task with this ID already exists:', task.id)
          return prevTasks
        }

        const updatedTasks = [...prevTasks, task]
        saveTasks(updatedTasks)
        return updatedTasks
      })
    },
    [saveTasks]
  )

  const editTask = useCallback(
    (task: ITask) => {
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.map(t => (t.id === task.id ? task : t))
        saveTasks(updatedTasks)
        return updatedTasks
      })
    },
    [saveTasks]
  )

  const removeTask = useCallback(
    (taskId: string) => {
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter(t => t.id !== taskId)
        saveTasks(updatedTasks)
        return updatedTasks
      })
    },
    [saveTasks]
  )

  return (
    <DataContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
