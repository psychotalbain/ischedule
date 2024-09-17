import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ITaskContentAddProps } from '@components/BottomSheet/types'
import { useData } from '@context'
import { ITask } from '@types'

import * as S from './styles'

const AddTaskContent: React.FC<ITaskContentAddProps> = ({ onClose }) => {
  const { t } = useTranslation()
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
      <S.Title variant="titleSmall">{t('bottomSheet.add.title')}</S.Title>
      <S.Input
        label="bottomSheet.add.fields.title.label"
        placeholder="bottomSheet.add.fields.title.placeholder"
        onChangeText={setTitle}
      />
      <S.Input
        label="bottomSheet.add.fields.description.label"
        placeholder="bottomSheet.add.fields.description.placeholder"
        value={description}
        onChangeText={setDescription}
      />
      <S.Button onPress={handleAddTask}>{t('buttons.add')}</S.Button>
    </S.Container>
  )
}

export default AddTaskContent
