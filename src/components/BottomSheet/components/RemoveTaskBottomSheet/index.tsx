import { useData } from '@context/DataContext'
import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

type RemoveTaskContentProps = {
  taskId: string
  onClose: () => void
}

const RemoveTaskContent: React.FC<RemoveTaskContentProps> = ({
  taskId,
  onClose
}) => {
  const { removeTask } = useData()

  const handleRemoveTask = () => {
    removeTask(taskId)
    onClose()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remove Task</Text>
      <Text>Are you sure you want to remove this task?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Remove" onPress={handleRemoveTask} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </View>
  )
}

export default RemoveTaskContent
