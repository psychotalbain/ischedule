import { IBottomSheetContext } from '@components/BottomSheet/types.d'
import React, { createContext, useCallback, useContext, useState } from 'react'

import { IReactFCWithChildren } from '@types'

const BottomSheetContext = createContext<IBottomSheetContext | undefined>(
  undefined
)

export const BottomSheetProvider: IReactFCWithChildren = ({ children }) => {
  const [bottomSheetType, setBottomSheetType] = useState<
    'add' | 'edit' | 'remove' | 'complete' | null
  >(null)
  const [bottomSheetData, setBottomSheetData] = useState<any>(null)

  const openBottomSheet = (
    type: 'add' | 'edit' | 'remove' | 'complete',
    data?: any
  ) => {
    setBottomSheetType(type)
    setBottomSheetData(data)
    console.log('aqui, 1')
  }

  const closeBottomSheet = useCallback(() => {
    setBottomSheetType(null)
    setBottomSheetData(null)
    console.log('aqui, 0')
  }, [])

  return (
    <BottomSheetContext.Provider
      value={{
        bottomSheetType,
        bottomSheetData,
        openBottomSheet,
        closeBottomSheet
      }}>
      {children}
    </BottomSheetContext.Provider>
  )
}

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext)
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider')
  }
  return context
}
