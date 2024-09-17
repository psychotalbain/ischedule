import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'

import * as C from '@components'
import { ITask } from '@types'

import { ScheduleProvider, useSchedule } from './context'
import * as S from './styles'

const ScheduledTasksScreen: React.FC = () => {
  const { t } = useTranslation()

  const {
    currentTasks,
    handleTheme,
    handleAddTask,
    handleEditTask,
    handleCompleteTask
  } = useSchedule()

  const renderTask = useCallback((item: ITask) => {
    return (
      <C.CardComponent
        title={item.title}
        description={item.description}
        creation={item.date}
        variant="scheduled"
        onComplete={() => handleCompleteTask(item)}
        onEdit={() => handleEditTask(item)}
      />
    )
  }, [])

  return (
    <C.SafeAreaView>
      <S.Container>
        <S.Button icon="theme-light-dark" onPress={handleTheme} mode="outlined">
          {t('screen.schedule.toggle')}
        </S.Button>

        <S.Button icon="pen-plus" onPress={handleAddTask} mode="contained">
          {t('screen.schedule.addNew')}
        </S.Button>

        <FlatList
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
