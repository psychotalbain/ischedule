import React, { createContext, useCallback, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@theme'
import { IReactFCWithChildren, IConfigContext } from '@types'
import { ELangCode } from '@utils/languages/languageUtils'

const ConfigContext = createContext<IConfigContext | undefined>(undefined)

export const ConfigProvider: IReactFCWithChildren = ({ children }) => {
  const { toggleTheme } = useTheme()
  const { i18n } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const systemLanguage = i18n.language || ELangCode.en
    return systemLanguage as ELangCode
  })

  const handleTheme = useCallback(() => {
    toggleTheme()
  }, [])

  const handleLanguage = useCallback(() => {
    const availableLanguages = Object.values(ELangCode)
    const currentIndex = availableLanguages.indexOf(currentLanguage)
    const nextIndex = (currentIndex + 1) % availableLanguages.length
    const nextLanguage = availableLanguages[nextIndex] as ELangCode

    i18n.changeLanguage(nextLanguage)
    setCurrentLanguage(nextLanguage)
  }, [currentLanguage, i18n])

  return (
    <ConfigContext.Provider
      value={{
        handleTheme,
        handleLanguage
      }}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return context
}
