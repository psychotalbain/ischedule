import { ITask } from '@types'

export type IBottomSheetContext = {
  bottomSheetType: 'add' | 'edit' | 'remove' | 'complete' | null
  bottomSheetData: any
  openBottomSheet: (
    type: 'add' | 'edit' | 'remove' | 'complete',
    data?: any
  ) => void
  closeBottomSheet: () => void
}

export type ITaskContentAddProps = {
  onClose: () => void
}

export type ITaskContentCompleteProps = {
  task: ITask
  onClose: () => void
}

export type ITaskContentEditProps = {
  task: ITask
  onClose: () => void
}

export type ITaskContentRemoveProps = {
  taskId: string
  onClose: () => void
}
