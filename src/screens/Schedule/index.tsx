import { useBottomSheet } from '@components/BottomSheet/context'
import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Task } from '@types'

import { ScheduleProvider, useSchedule } from './context'
import styles from './styles'

const ScheduledTasksScreen: React.FC = () => {
  const { currentTasks } = useSchedule()
  const { openBottomSheet } = useBottomSheet()

  const handleAddTask = () => {
    openBottomSheet('add')
  }

  const handleEditTask = (task: Task) => {
    openBottomSheet('edit', task)
  }

  const handleCompleteTask = (task: Task) => {
    openBottomSheet('complete', task)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scheduled Tasks</Text>

      <Button title="Add Task" onPress={handleAddTask} />

      <FlatList
        data={currentTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskTitle}>{item.description}</Text>
            <Button title="Edit Task" onPress={() => handleEditTask(item)} />
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
