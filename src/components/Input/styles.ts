import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import styled from 'styled-components'

import TextComponent from '@components/Text'
import { IInputComponentProps } from '@types'

export const Container = styled(View)`
  width: 100%;
`

export const Input = styled(TextInput).attrs<IInputComponentProps>(() => ({}))`
  background-color: ${({ theme }) => theme.colors.surface};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`

export const ErrorMessage = styled(TextComponent)`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`
