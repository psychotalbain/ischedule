import Assets from '@assets'
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper'

import baseTheme from '@theme/base'

const lightTheme = {
  ...MD3LightTheme,
  ...baseTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...Assets.Themes.light.colors
  }
}

const darkTheme = {
  ...MD3DarkTheme,
  ...baseTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...Assets.Themes.dark.colors
  }
}

const Themes = {
  light: lightTheme,
  dark: darkTheme
}

export default Themes
