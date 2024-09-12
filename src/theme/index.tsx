import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme
} from '@react-navigation/native'
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react'
import { useColorScheme } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import { ITheme, IThemeContext } from '@types'

import Themes from './custom'

const ThemeContext = createContext<IThemeContext>({
  toggleTheme: () => {},
  isDarkTheme: false,
  theme: Themes.light as unknown as ITheme
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const systemTheme = useColorScheme()
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark')

  useEffect(() => {
    setIsDarkTheme(systemTheme === 'dark')
  }, [systemTheme])

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prevTheme => !prevTheme)
  }, [])

  const currentTheme = isDarkTheme ? Themes.dark : Themes.light

  const combinedTheme: ITheme = {
    ...currentTheme,
    colors: {
      ...currentTheme.colors,
      ...(isDarkTheme
        ? NavigationDarkTheme.colors
        : NavigationLightTheme.colors)
    },
    dark: isDarkTheme
  }

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, isDarkTheme, theme: combinedTheme }}>
      <PaperProvider theme={combinedTheme}>
        <StyledThemeProvider theme={combinedTheme}>
          {children}
        </StyledThemeProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
