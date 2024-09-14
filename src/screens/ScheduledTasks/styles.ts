import { View } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`
