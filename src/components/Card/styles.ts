import ButtonComponent from '@components/Button'
import {
  Avatar,
  Card as CardPaper,
  Paragraph as ParagraphPaper
} from 'react-native-paper'
import styled from 'styled-components'

import { IAvatarProps } from '@types'

export const Card = styled(CardPaper).attrs(() => ({
  mode: 'contained'
}))`
  margin-vertical: ${({ theme }) => theme.spacing.xs}px;
  border-radius: ${({ theme }) => theme.roundness}px;
`

export const Paragraph = styled(ParagraphPaper)``

export const StatusBadge = styled(Avatar.Icon).attrs<IAvatarProps>(
  ({ variant, theme }) => ({
    icon:
      variant === 'scheduled'
        ? 'calendar-clock'
        : 'checkbox-marked-circle-plus-outline',
    backgroundColor:
      variant === 'scheduled' ? theme.colors.primary : theme.colors.secondary,
    color:
      variant === 'scheduled'
        ? theme.colors.onPrimary
        : theme.colors.onSecondary,
    size: 40
  })
)<IAvatarProps>`
  border-radius: ${({ theme }) => theme.roundness}px;
`

export const Button = styled(ButtonComponent)``
