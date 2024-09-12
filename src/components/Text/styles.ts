import { Text } from 'react-native-paper'
import styled from 'styled-components'

import { ITextComponentProps } from '@types'

export const TextComponent = styled(Text).attrs<ITextComponentProps>(
  ({ variant }) => ({
    variant: variant || 'bodyMedium'
  })
)<ITextComponentProps>`
  color: ${({ theme }) => {
    return theme.colors?.primary
  }};

  font-size: ${({ variant, theme }) => {
    switch (variant) {
      case 'displayLarge':
      case 'titleLarge':
      case 'headlineLarge':
        return `${theme.fontSize.xl}px`

      case 'displayMedium':
      case 'titleMedium':
      case 'headlineMedium':
      case 'bodyLarge':
        return `${theme.fontSize.lg}px`

      case 'displaySmall':
      case 'titleSmall':
      case 'headlineSmall':
      case 'bodyMedium':
      case 'labelLarge':
        return `${theme.fontSize.md}px`

      case 'labelMedium':
      case 'bodySmall':
        return `${theme.fontSize.sm}px`

      case 'labelSmall':
        return `${theme.fontSize.xs}px`

      default:
        return `${theme.fontSize.md}px`
    }
  }};

  font-weight: ${({ variant, theme }) => {
    switch (variant) {
      case 'displayLarge':
      case 'displayMedium':
      case 'displaySmall':
      case 'headlineLarge':
      case 'headlineMedium':
      case 'headlineSmall':
        return theme.fontWeight.bold
      case 'titleLarge':
      case 'titleMedium':
      case 'titleSmall':
        return theme.fontWeight.medium
      case 'labelLarge':
      case 'labelMedium':
      case 'labelSmall':
        return theme.fontWeight.light
      default:
        return theme.fontWeight.regular
    }
  }};
`

export default TextComponent
