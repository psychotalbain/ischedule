import React, { useState, useEffect } from 'react'

import { ITaskContentEditProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'
import { ITask } from '@types'

import * as S from './styles'

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
    <S.Container>
      <S.Title>Edit Task</S.Title>
      <S.Input
        label="Title"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <S.Input
        label="Description"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <S.Button onPress={handleEditTask}> Save </S.Button>
    </S.Container>
  )
}

export default EditTaskContent
