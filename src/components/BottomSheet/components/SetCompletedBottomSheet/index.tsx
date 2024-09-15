import React from 'react'

import { ITaskContentCompleteProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'

import * as S from './styles'

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
    <S.Container>
      <S.Title>Complete Task</S.Title>
      <S.Description>
        Are you sure you want to mark this task as completed?
      </S.Description>
      <S.ContainerButtons>
        <S.Button onPress={handleCompleteTask}>Complete</S.Button>
        <S.Button mode="outlined" onPress={onClose}>
          Cancel
        </S.Button>
      </S.ContainerButtons>
    </S.Container>
  )
}

export default CompleteTaskContent
