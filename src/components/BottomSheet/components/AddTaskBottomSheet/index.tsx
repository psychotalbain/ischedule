import { useData } from '@context/DataContext'
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { ITask } from '@types'

import styles from './styles'

type AddTaskContentProps = {
  onClose: () => void
}

const AddTaskContent: React.FC<AddTaskContentProps> = ({ onClose }) => {
  const { tasks, addTask } = useData()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAddTask = () => {
    const maxId = tasks.reduce(
      (max, task) => Math.max(max, parseInt(task.id, 10)),
      0
    )
    const newId = (maxId + 1).toString()
    const newTask: ITask = {
      id: `${newId}`,
      title: title,
      description: description,
      date: new Date().toISOString(),
      completed: false
    }
    addTask(newTask)
    onClose()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
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
        <Button title="Add" onPress={handleAddTask} />
      </View>
    </View>
  )
}

export default AddTaskContent
