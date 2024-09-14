import 'styled-components'
import { Theme } from '@react-navigation/native'
import { MD3Theme } from 'react-native-paper'
import { NavigationTheme } from 'react-native-paper/lib/typescript/types'

export interface IBaseTheme {
  roundness: number

  /**
   * Define os valores de espaçamento para margens e padding.
   */
  spacing: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }

  /**
   * Define os tamanhos de fonte para diferentes níveis de texto.
   */
  fontSize: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }

  /**
   * Define os pesos de fonte para diferentes níveis de texto.
   */
  fontWeight: {
    regular: number
    medium: number
    bold: number
    light: number
  }
}

export interface ITheme extends MD3Theme, NavigationTheme, IBaseTheme {}

export interface IThemeContext {
  toggleTheme: () => void
  isDarkTheme: boolean
  theme: ITheme
  themeNavigator: Theme
}

declare module 'styled-components' {
  export interface DefaultTheme extends MD3Theme, IBaseTheme {}
}
