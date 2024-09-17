import { BaseToast, ErrorToast } from 'react-native-toast-message'
import styled from 'styled-components'

export const SuccessToast = styled(BaseToast).attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: theme.fontSize.md,
    backgroundColor: theme.colors.primary
  },
  text1Style: {
    fontSize: theme.fontSize.md,
    color: theme.colors.onPrimary,
    fontWeight: 700 // TODO: theme.fontWeight.bold, por algum motivo está reclamando
  },
  text2Style: {
    fontSize: theme.fontSize.md,
    color: theme.colors.primaryContainer
  }
}))``

export const StyledErrorToast = styled(ErrorToast).attrs(({ theme }) => ({
  text1Style: {
    fontSize: theme.fontSize.lg
  },
  text2Style: {
    fontSize: theme.fontSize.md
  }
}))``
