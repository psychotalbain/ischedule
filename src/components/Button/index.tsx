import * as React from 'react'
import { ButtonProps } from 'react-native-paper'

import * as S from './styles'

interface ButtonComponentProps extends ButtonProps {
  icon?: string
}

const ButtonComponent: React.FC<ButtonComponentProps> = React.forwardRef(
  ({ icon, mode = 'contained', onPress, children, ...rest }, ref) => {
    return (
      <S.Button ref={ref} icon={icon} mode={mode} onPress={onPress} {...rest}>
        {children}
      </S.Button>
    )
  }
)

ButtonComponent.displayName = 'ButtonComponent'

export default ButtonComponent
