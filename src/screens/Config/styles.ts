import { View } from 'react-native'
import styled from 'styled-components'

import { TextComponent, ButtonComponent } from '@components'

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
