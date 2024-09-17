import Assets from '@assets'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import { ELangCode } from './languageUtils'

const resources = {
  en: {
    translation: Assets.Language.en
  },
  ptBR: {
    translation: Assets.Language.ptBR
  }
}

const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales()

  if (locales && locales.length > 0) {
    const languageCode = locales[0].languageCode
    return languageCode === 'pt' ? ELangCode.ptBR : ELangCode.en
  }
  return ELangCode.en
}

const initializeI18Next = () => {
  const deviceLanguage = getDeviceLanguage()

  i18n.use(initReactI18next).init({
    debug: false,
    resources,
    lng: deviceLanguage,
    fallbackLng: ELangCode.ptBR,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false
    }
  })
}

export default { initializeI18Next }
