import { TextProps as PaperTextProps } from 'react-native-paper'
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types'

export interface ITextComponentProps extends PaperTextProps {
  variant?: VariantProp<T>
  children: React.ReactNode
  style?: StyleProp
}
