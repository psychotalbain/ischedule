import { BottomNavigator } from '@navigation'
import ThemeProvider from '@theme'
import { i18n } from '@utils'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { BottomSheetProvider } from '@components/BottomSheet/context/index'
import BottomSheetComponent from '@components/BottomSheet/index'
import { DataProvider } from '@context'

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
            <BottomSheetProvider>
              <BottomSheetComponent>
                <BottomNavigator />
              </BottomSheetComponent>
            </BottomSheetProvider>
          </DataProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
