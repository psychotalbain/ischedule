import { DataProvider } from '@context'
import { BottomNavigator } from '@navigation'
import React from 'react'

const App: React.FC = () => {
  return (
    <DataProvider>
      <BottomNavigator />
    </DataProvider>
  )
}

export default App
