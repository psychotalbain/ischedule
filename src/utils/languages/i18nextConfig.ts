import Assets from '@assets'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { ELangCode } from './languageUtils'

const resources = {
  en: {
    translation: Assets.Language.en
  },
  ptBR: {
    translation: Assets.Language.ptBR
  }
}

const initializeI18Next = () => {
  i18n.use(initReactI18next).init({
    debug: false,
    resources,
    lng: ELangCode.ptBR,
    fallbackLng: ELangCode.ptBR,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false
    }
  })
}

export default { initializeI18Next }
