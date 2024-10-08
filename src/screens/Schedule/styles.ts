import { FlatList, FlatListProps, View } from 'react-native'
import styled from 'styled-components'
import { styled as styledNative } from 'styled-components/native'

import { TextComponent, ButtonComponent } from '@components'
import { ITask } from '@types'

export const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`

export const Title = styled(TextComponent)`
  margin-vertical: ${({ theme }) => theme.spacing.md}px;
`

export const Button = styled(ButtonComponent)`
  margin-vertical: ${({ theme }) => theme.spacing.xs}px;
`

export const TaskItem = styledNative.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.border};
`

export const TaskTitle = styled(TextComponent)`
  margin-vertical: ${({ theme }) => theme.spacing.xs}px;
`

export const List = styled(
  FlatList as React.ComponentType<FlatListProps<ITask>>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 }
})``
