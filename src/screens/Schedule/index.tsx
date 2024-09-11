import { useBottomSheetContext } from '@components/BottomSheet/context'
import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Task } from '@types'

import { ScheduleProvider, useSchedule } from './context'
import styles from './styles'

const ScheduledTasksScreen: React.FC = () => {
  const { currentTasks, tasks, addTask, editTask } = useSchedule()
  const { openBottomSheet } = useBottomSheetContext()

  const handleAddTask = () => {
    const maxId = tasks.reduce(
      (max, task) => Math.max(max, parseInt(task.id, 10)),
      0
    )
    const newId = (maxId + 1).toString()
    const newTask: Task = {
      id: `${newId}`,
      title: `New Task ${newId}`,
      description: 'Description for the new task',
      date: new Date().toISOString(),
      completed: false
    }
    addTask(newTask)
    openBottomSheet('ADD_TASK')
  }

  const handleEditTask = (task: Task) => {
    openBottomSheet('EDIT_TASK', task.id)
  }

  const handleCompleteTask = (task: Task) => {
    const updatedTask = { ...task, completed: true }
    editTask(updatedTask)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Tasks</Text>

      <Button title="Add Task" onPress={handleAddTask} />

      <FlatList
        data={currentTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Button
              title="Complete Task"
              onPress={() => handleCompleteTask(item)}
            />
          </View>
        )}
      />
    </View>
  )
}

const ScheduledTasksProvider: React.FC = props => {
  return (
    <ScheduleProvider {...props}>
      <ScheduledTasksScreen />
    </ScheduleProvider>
  )
}

export default ScheduledTasksProvider
