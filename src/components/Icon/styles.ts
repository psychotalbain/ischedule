import { Icon as PaperIcon, MD3Colors } from 'react-native-paper'
import styled from 'styled-components/native'

import { IIconProps } from '@types'

export const Icon = styled(PaperIcon).attrs<IIconProps>(props => ({
  color: props.color || MD3Colors.error50, // Valor padrão caso não receba color
  size: props.size || 24 // Valor padrão para size
}))<IIconProps>``
