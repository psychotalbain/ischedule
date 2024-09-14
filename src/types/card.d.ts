import { ButtonProps } from 'react-native-paper'

type IVariant = 'scheduled' | 'complete'

export interface ICardProps extends ButtonProps {
  title: string
  description: string
  creation: string
  variant: IVariant
  onEdit?: () => void
  onComplete?: () => void
  onDelete?: () => void
}

export interface IAvatarProps {
  variant: IVariant
  icon: string
}
