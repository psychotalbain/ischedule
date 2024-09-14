import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet'
import React, { useRef, useMemo, useEffect, useCallback } from 'react'
import { View, Text } from 'react-native'

import { useBottomSheet } from '@components'
import AddTaskContent from '@components/BottomSheet/components/AddTaskBottomSheet'
import EditTaskContent from '@components/BottomSheet/components/EditTaskBottomSheet'
import RemoveTaskContent from '@components/BottomSheet/components/RemoveTaskBottomSheet'
import CompleteTaskContent from '@components/BottomSheet/components/SetCompletedBottomSheet'
import { IReactFCWithChildren } from '@types'

const BottomSheetComponent: IReactFCWithChildren = ({ children }) => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null)
  const { bottomSheetType, bottomSheetData, closeBottomSheet } =
    useBottomSheet()

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])

  const renderContent = useMemo(() => {
    switch (bottomSheetType) {
      case 'add':
        return <AddTaskContent onClose={handleClose} />
      case 'edit':
        return <EditTaskContent task={bottomSheetData} onClose={handleClose} />
      case 'remove':
        return (
          <RemoveTaskContent taskId={bottomSheetData} onClose={handleClose} />
        )
      case 'complete':
        return (
          <CompleteTaskContent task={bottomSheetData} onClose={handleClose} />
        )
      default:
        return (
          <View>
            <Text>No content available</Text>
          </View>
        )
    }
  }, [bottomSheetType, bottomSheetData])

  useEffect(() => {
    if (bottomSheetType) {
      bottomSheetRef.current?.open()
    }
  }, [bottomSheetType, bottomSheetData])

  return (
    <>
      {children}
      <BottomSheet ref={bottomSheetRef} onClose={closeBottomSheet}>
        {renderContent}
      </BottomSheet>
    </>
  )
}

export default BottomSheetComponent
