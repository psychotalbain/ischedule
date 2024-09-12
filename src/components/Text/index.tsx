import React from 'react'

import { ITextComponentProps } from '@types'

import * as S from './styles'

const TextComponent: React.FC<ITextComponentProps> = ({
  variant,
  children,
  style,
  ...props
}) => {
  return (
    <S.TextComponent variant={variant} style={style} {...props}>
      {children}
    </S.TextComponent>
  )
}

export default TextComponent
