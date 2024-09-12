import { useData } from '@context/DataContext'
import React from 'react'
import { View, Text, Button } from 'react-native'

import { Task } from '@types'

import styles from './styles'

type CompleteTaskContentProps = {
  task: Task
  onClose: () => void
}

const CompleteTaskContent: React.FC<CompleteTaskContentProps> = ({
  task,
  onClose
}) => {
  const { editTask } = useData()

  const handleCompleteTask = () => {
    const updatedTask = { ...task, completed: true }
    editTask(updatedTask)
    onClose()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Task</Text>
      <Text>Are you sure you want to mark this task as completed?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Complete" onPress={handleCompleteTask} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </View>
  )
}

export default CompleteTaskContent
