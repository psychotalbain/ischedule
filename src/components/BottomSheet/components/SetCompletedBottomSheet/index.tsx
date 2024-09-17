import React from 'react'
import { useTranslation } from 'react-i18next'

import { ITaskContentCompleteProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'

import * as S from './styles'

const CompleteTaskContent: React.FC<ITaskContentCompleteProps> = ({
  task,
  onClose
}) => {
  const { t } = useTranslation()
  const { editTask } = useData()

  const handleCompleteTask = () => {
    const updatedTask = { ...task, completed: true }
    editTask(updatedTask)
    onClose()
  }

  return (
    <S.Container>
      <S.Title variant="titleSmall">{t('bottomSheet.complete.title')}</S.Title>
      <S.Description variant="labelMedium">
        {t('bottomSheet.complete.description')}
      </S.Description>
      <S.ContainerButtons>
        <S.Button onPress={handleCompleteTask}>
          {t('buttons.complete')}
        </S.Button>
        <S.Button mode="outlined" onPress={onClose}>
          {t('buttons.cancel')}
        </S.Button>
      </S.ContainerButtons>
    </S.Container>
  )
}

export default CompleteTaskContent
