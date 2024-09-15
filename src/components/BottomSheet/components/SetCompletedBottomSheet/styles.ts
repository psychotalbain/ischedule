import { View } from 'react-native'
import styled from 'styled-components'

import ButtonComponent from '@components/Button'
import InputComponent from '@components/Input'
import TextComponent from '@components/Text'

export const Container = styled(View)`
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`

export const Title = styled(TextComponent)`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`

export const Description = styled(TextComponent)`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`

export const Input = styled(InputComponent)``

export const ContainerButtons = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`
export const Button = styled(ButtonComponent)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`
