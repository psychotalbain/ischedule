import { FlatList, FlatListProps, View } from 'react-native'
import styled from 'styled-components'

import { TextComponent } from '@components'
import { ITask } from '@types'

export const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`

export const Title = styled(TextComponent)`
  margin-vertical: ${({ theme }) => theme.spacing.md}px;
`

export const List = styled(
  FlatList as React.ComponentType<FlatListProps<ITask>>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 }
})``
