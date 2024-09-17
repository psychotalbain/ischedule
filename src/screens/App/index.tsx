import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import * as C from '@components'
import { DataProvider } from '@context'
import { BottomNavigator } from '@navigation'
import ThemeProvider from '@theme'
import { i18n } from '@utils'

import styles from './styles'

const App: React.FC = () => {
  const init = async () => {
    i18n.initializeI18Next()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <GestureHandlerRootView style={styles.container}>
          <DataProvider>
            <C.BottomSheetProvider>
              <C.BottomSheetComponent>
                <BottomNavigator />
                <C.ToastComponent />
              </C.BottomSheetComponent>
            </C.BottomSheetProvider>
          </DataProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
