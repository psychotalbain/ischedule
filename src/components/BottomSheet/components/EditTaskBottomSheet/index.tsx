import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ITaskContentEditProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'
import { ITask } from '@types'

import * as S from './styles'

const EditTaskContent: React.FC<ITaskContentEditProps> = ({
  task,
  onClose
}) => {
  const { t } = useTranslation()
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
      <S.Title variant="titleSmall">{t('bottomSheet.edit.title')}</S.Title>
      <S.Input
        label="bottomSheet.edit.fields.title.label"
        placeholder="bottomSheet.edit.fields.title.placeholder"
        value={title}
        onChangeText={setTitle}
      />
      <S.Input
        label="bottomSheet.edit.fields.description.label"
        placeholder="bottomSheet.edit.fields.description.placeholder"
        value={description}
        onChangeText={setDescription}
      />
      <S.Button onPress={handleEditTask}>{t('buttons.save')}</S.Button>
    </S.Container>
  )
}

export default EditTaskContent
