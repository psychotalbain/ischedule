import styled from 'styled-components/native'

import { ISafeAreaViewProps } from '@types'

const SafeAreaView = styled.SafeAreaView<ISafeAreaViewProps>`
  flex: ${props => props.flex || 1};
  background-color: ${({ theme }) => theme.colors?.primary};
`

export default SafeAreaView
