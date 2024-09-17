import React from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

const NoContent: React.FC = () => {
  const { t } = useTranslation()
  return (
    <S.Container>
      <S.Title variant="titleLarge">{t('load')}</S.Title>
    </S.Container>
  )
}

export default NoContent
