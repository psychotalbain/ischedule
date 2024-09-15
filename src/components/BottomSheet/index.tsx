import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet'
import React, { useRef, useMemo, useEffect, useCallback } from 'react'

import { IReactFCWithChildren } from '@types'

import AddTaskContent from './components/AddTaskBottomSheet'
import EditTaskContent from './components/EditTaskBottomSheet'
import NoContent from './components/NoContent'
import RemoveTaskContent from './components/RemoveTaskBottomSheet'
import CompleteTaskContent from './components/SetCompletedBottomSheet'
import { useBottomSheet } from './context'

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
        return <NoContent />
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
      <BottomSheet
        animationType="spring"
        ref={bottomSheetRef}
        onClose={closeBottomSheet}>
        {renderContent}
      </BottomSheet>
    </>
  )
}

export default BottomSheetComponent
