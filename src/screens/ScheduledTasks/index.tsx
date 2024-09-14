import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import * as C from '@components'
import { ITask } from '@types'

import { ScheduleProvider, useSchedule } from './context'
import * as S from './styles'

const ScheduledTasksScreen: React.FC = () => {
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
