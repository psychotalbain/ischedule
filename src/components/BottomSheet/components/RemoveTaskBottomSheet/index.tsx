import React from 'react'
import { View, Text, Button } from 'react-native'

import { ITaskContentRemoveProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'

import styles from './styles'

const RemoveTaskContent: React.FC<ITaskContentRemoveProps> = ({
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
