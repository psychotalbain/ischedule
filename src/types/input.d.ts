import { TextInputProps } from 'react-native-paper'

export interface IInputComponentProps extends TextInputProps {
  label: string
  placeholder: string
  errorMessage?: string
}
