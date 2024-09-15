import React, { useState } from 'react'

import { ITaskContentAddProps } from '@components/BottomSheet/types'
import { useData } from '@context'
import { ITask } from '@types'

import * as S from './styles'

const AddTaskContent: React.FC<ITaskContentAddProps> = ({ onClose }) => {
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
    <S.Container>
      <S.Title variant="titleSmall">Add Task</S.Title>
      <S.Input
        label="Title"
        placeholder="Digite aqui"
        error={false}
        onChangeText={setTitle}
      />
      <S.Input
        label="Descrição"
        placeholder="Digite aqui"
        value={description}
        onChangeText={setDescription}
      />
      <S.Button onPress={handleAddTask}>Add</S.Button>
    </S.Container>
  )
}

export default AddTaskContent
