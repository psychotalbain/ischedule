import { Button as PaperButton } from 'react-native-paper'
import styled from 'styled-components'

export const Button = styled(PaperButton).attrs(({ mode }) => ({
  mode: mode || 'contained'
}))`
  border-radius: ${({ theme }) => theme.roundness}px;
  background-color: ${({ mode, theme }) =>
    mode === 'contained' ? theme.colors?.primary : 'transparent'};
  color: ${({ theme }) => theme.colors?.primary};
`
