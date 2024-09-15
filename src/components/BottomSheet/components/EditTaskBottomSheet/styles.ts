import { View } from 'react-native'
import styled from 'styled-components'

import ButtonComponent from '@components/Button'
import InputComponent from '@components/Input'
import TextComponent from '@components/Text'

export const Container = styled(View)`
  flex-grow: 1;
  min-height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`

export const Title = styled(TextComponent)`
  margin-vertical: ${({ theme }) => theme.spacing.lg}px;
`

export const Input = styled(InputComponent)``

export const Button = styled(ButtonComponent)`
  position: fixed;
`
