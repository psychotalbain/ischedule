import React, { useMemo } from 'react'

import { ICardProps } from '@types'

import * as S from './styles'

const CardComponent: React.FC<Omit<ICardProps, 'children'>> = ({
  title,
  description,
  creation,
  variant,
  onEdit,
  onComplete,
  onDelete
}) => {
  const renderStatusBadge = useMemo(() => {
    return <S.StatusBadge variant={variant} icon="calendar-check" />
  }, [variant])

  return (
    <S.Card>
      <S.Card.Title
        title={title}
        subtitle={creation}
        left={() => renderStatusBadge}
      />
      <S.Card.Content>
        <S.Paragraph>{description}</S.Paragraph>
      </S.Card.Content>

      <S.Card.Actions>
        {onEdit && <S.Button onPress={onEdit}>Edit</S.Button>}
        {onComplete && <S.Button onPress={onComplete}>Complete</S.Button>}
        {onDelete && <S.Button onPress={onDelete}>Remove</S.Button>}
      </S.Card.Actions>
    </S.Card>
  )
}

export default CardComponent
