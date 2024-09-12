import { BottomSheetProvider } from '@components/BottomSheet/context/index'
import BottomSheetComponent from '@components/BottomSheet/index'
import { DataProvider } from '@context'
import { BottomNavigator } from '@navigation'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <DataProvider>
          <BottomSheetProvider>
            <BottomSheetComponent>
              <BottomNavigator />
            </BottomSheetComponent>
          </BottomSheetProvider>
        </DataProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
