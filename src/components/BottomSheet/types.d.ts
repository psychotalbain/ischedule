export type IBottomSheetContext = {
  bottomSheetType: 'add' | 'edit' | 'remove' | 'complete' | null
  bottomSheetData: any
  openBottomSheet: (
    type: 'add' | 'edit' | 'remove' | 'complete',
    data?: any
  ) => void
  closeBottomSheet: () => void
}
