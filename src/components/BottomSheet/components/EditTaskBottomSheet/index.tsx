import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { ITaskContentEditProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'
import { ITask } from '@types'

import styles from './styles'

const EditTaskContent: React.FC<ITaskContentEditProps> = ({
  task,
  onClose
}) => {
  const { editTask } = useData()
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  useEffect(() => {
    setTitle(task.title)
    setDescription(task.description)
  }, [task])

  const handleEditTask = () => {
    const updatedTask: ITask = {
      ...task,
      title,
      description
    }
    editTask(updatedTask)
    onClose()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleEditTask} />
      </View>
    </View>
  )
}

export default EditTaskContent
