import * as React from 'react'

import { IIconProps } from '@types'

import * as S from './styles'

const IconComponent: React.FC<IIconProps> = ({ color, size, source }) => {
  return <S.Icon color={color} size={size} source={source} />
}

export default IconComponent
