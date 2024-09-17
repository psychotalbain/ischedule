import React from 'react'
import { useTranslation } from 'react-i18next'

import { ITaskContentRemoveProps } from '@components/BottomSheet/types'
import { useData } from '@context/DataContext'

import * as S from './styles'

const RemoveTaskContent: React.FC<ITaskContentRemoveProps> = ({
  taskId,
  onClose
}) => {
  const { t } = useTranslation()
  const { removeTask } = useData()

  const handleRemoveTask = () => {
    removeTask(taskId)
    onClose()
  }

  return (
    <S.Container>
      <S.Title variant="titleSmall">{t('bottomSheet.remove.title')}</S.Title>
      <S.Description variant="labelMedium">
        {t('bottomSheet.remove.description')}
      </S.Description>
      <S.ContainerButtons>
        <S.Button onPress={handleRemoveTask}>{t('buttons.remove')}</S.Button>
        <S.Button mode="outlined" onPress={onClose}>
          {t('buttons.cancel')}
        </S.Button>
      </S.ContainerButtons>
    </S.Container>
  )
}

export default RemoveTaskContent
