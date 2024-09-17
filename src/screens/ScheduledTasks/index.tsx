import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import * as C from '@components'
import { ITask } from '@types'

import { ScheduleProvider, useSchedule } from './context'
import * as S from './styles'

const ScheduledTasksScreen: React.FC = () => {
  const { t } = useTranslation()

  const { currentTasks, handleRemoveTask } = useSchedule()

  const renderTask = useCallback((item: ITask) => {
    return (
      <C.CardComponent
        title={item.title}
        description={item.description}
        creation={item.date}
        variant="scheduled"
        onDelete={() => handleRemoveTask(item)}
      />
    )
  }, [])

  return (
    <C.SafeAreaView>
      <S.Container>
        <S.Title variant="titleMedium">
          {t('screen.scheduleTasks.description')}
        </S.Title>

        <S.List
          data={currentTasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => renderTask(item)}
        />
      </S.Container>
    </C.SafeAreaView>
  )
}

const ScheduledTasksProvider: React.FC = props => {
  return (
    <ScheduleProvider {...props}>
      <ScheduledTasksScreen />
    </ScheduleProvider>
  )
}

export default ScheduledTasksProvider
