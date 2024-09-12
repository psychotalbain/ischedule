import { BottomSheetProvider } from '@components/BottomSheet/context/index'
import BottomSheetComponent from '@components/BottomSheet/index'
import { DataProvider } from '@context'
import { BottomNavigator } from '@navigation'
import ThemeProvider from '@theme'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import styles from './styles'

const App: React.FC = () => {
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
