import Toast from 'react-native-toast-message'

const useToast = () => {
  const showSuccess = (title: string, description: string) => {
    Toast.show({
      type: 'success',
      text1: title,
      text2: description,
      visibilityTime: 1000
    })
  }

  const showError = (title: string, description: string) => {
    Toast.show({
      type: 'error',
      text1: title,
      text2: description
    })
  }

  const showInfo = (title: string, description: string) => {
    Toast.show({
      type: 'info',
      text1: title,
      text2: description
    })
  }

  return {
    showSuccess,
    showError,
    showInfo
  }
}

export default useToast
