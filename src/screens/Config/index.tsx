import React from 'react'
import { useTranslation } from 'react-i18next'

import * as C from '@components'

import { ConfigProvider, useConfig } from './context'
import * as S from './styles'

const ConfigScreen: React.FC = () => {
  const { t } = useTranslation()

  const { handleTheme, handleLanguage } = useConfig()

  return (
    <C.SafeAreaView>
      <S.Container>
        <S.Title variant="titleMedium">
          {t('screen.config.description')}
        </S.Title>

        <S.Button
          icon="google-translate"
          onPress={handleLanguage}
          mode="contained">
          {t('screen.config.language')}
        </S.Button>

        <S.Button icon="theme-light-dark" onPress={handleTheme} mode="outlined">
          {t('screen.config.toggle')}
        </S.Button>
      </S.Container>
    </C.SafeAreaView>
  )
}

const ConfigComponent: React.FC = props => {
  return (
    <ConfigProvider {...props}>
      <ConfigScreen />
    </ConfigProvider>
  )
}

export default ConfigComponent
