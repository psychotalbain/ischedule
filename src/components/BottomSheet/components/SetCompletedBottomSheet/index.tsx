import { ITaskContentCompleteProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'
import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

const CompleteTaskContent: React.FC<ITaskContentCompleteProps> = ({
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
