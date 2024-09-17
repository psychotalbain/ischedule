import React from 'react'
import Toast, { ToastConfigParams } from 'react-native-toast-message'

import * as S from './styles'

const renderSuccessToast = (props: ToastConfigParams<any>) => {
  return <S.SuccessToast {...props} />
}

const renderErrorToast = (props: ToastConfigParams<any>) => {
  return <S.StyledErrorToast {...props} />
}

const NotificationComponent: React.FC = () => {
  const toastConfig = {
    success: renderSuccessToast,
    error: renderErrorToast
  }

  return <Toast config={toastConfig} />
}

export default NotificationComponent
