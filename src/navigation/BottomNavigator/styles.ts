import { StyleSheet, ViewStyle } from 'react-native'

import { ITheme } from '@types'

const styles = (theme: ITheme) =>
  StyleSheet.create({
    TabBar: {
      height: 60,
      // width: '60%',
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      alignSelf: 'center',
      left: '20%',
      right: '20%',
      bottom: 30,
      borderRadius: 40,
      borderTopWidth: 0,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5
    } as ViewStyle,
    TabBarItem: {
      height: 60,
      paddingVertical: 10,
      width: 40
    } as ViewStyle
  })

export default styles
