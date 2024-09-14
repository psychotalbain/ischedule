import * as C from '@components'
import { useBottomSheet } from '@components/BottomSheet/context'
import { useTheme } from '@theme'
import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { ITask } from '@types'

import { ScheduleProvider, useSchedule } from './context'
import * as S from './styles' // Importa os estilos

const ScheduledTasksScreen: React.FC = () => {
  const { currentTasks } = useSchedule()
  const { toggleTheme } = useTheme()
  const { openBottomSheet } = useBottomSheet()

  const handleAddTask = () => {
    openBottomSheet('add')
  }

  const handleEditTask = (task: ITask) => {
    openBottomSheet('edit', task)
  }

  const handleCompleteTask = (task: ITask) => {
    openBottomSheet('complete', task)
  }

  const handleTheme = () => {
    toggleTheme()
  }

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
          Toggle Theme
        </S.Button>

        <S.Button icon="pen-plus" onPress={handleAddTask} mode="contained">
          Add Task
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
