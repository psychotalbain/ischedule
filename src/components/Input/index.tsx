import React from 'react'

import { IInputComponentProps } from '@types'

import * as S from './styles'

const InputComponent: React.FC<IInputComponentProps> = ({
  label,
  errorMessage,
  ...props
}) => {
  return (
    <S.Container>
      <S.Input mode="flat" {...props} label={label} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}

export default InputComponent
