import React from 'react'

import { ITaskContentRemoveProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'

import * as S from './styles'

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
    <S.Container>
      <S.Title>Remove Task</S.Title>
      <S.Description variant="labelMedium">
        Are you sure you want to remove this task?
      </S.Description>
      <S.ContainerButtons>
        <S.Button onPress={handleRemoveTask}>Remove</S.Button>
        <S.Button mode="outlined" onPress={onClose}>
          Cancel
        </S.Button>
      </S.ContainerButtons>
    </S.Container>
  )
}

export default RemoveTaskContent
