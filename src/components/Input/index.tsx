import React from 'react'
import { useTranslation } from 'react-i18next'

import { IInputComponentProps } from '@types'

import * as S from './styles'

const InputComponent: React.FC<IInputComponentProps> = ({
  label,
  placeholder,
  errorMessage,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Input
        mode="flat"
        label={t(label)}
        placeholder={t(placeholder)}
        {...props}
      />
      {errorMessage && <S.ErrorMessage>{t(errorMessage)}</S.ErrorMessage>}
    </S.Container>
  )
}

export default InputComponent
