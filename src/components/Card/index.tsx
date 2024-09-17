import { formatDateFromISO } from '@utils'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const [creationDate, setCreationDate] = useState(creation)
  const renderStatusBadge = useMemo(() => {
    return <S.StatusBadge variant={variant} icon="calendar-check" />
  }, [variant])

  useEffect(() => {
    const formattedDate = formatDateFromISO(creation, 'DD/MM/YYYY HH:mm')
    setCreationDate(formattedDate)
    return () => {}
  }, [creationDate])

  return (
    <S.Card>
      <S.Card.Title
        title={title}
        subtitle={creationDate}
        left={() => renderStatusBadge}
      />
      <S.Card.Content>
        <S.Paragraph>{description}</S.Paragraph>
      </S.Card.Content>

      <S.Card.Actions>
        {onEdit && <S.Button onPress={onEdit}>{t('buttons.edit')}</S.Button>}
        {onComplete && (
          <S.Button onPress={onComplete}>{t('buttons.complete')}</S.Button>
        )}
        {onDelete && (
          <S.Button onPress={onDelete}>{t('buttons.cancel')}</S.Button>
        )}
      </S.Card.Actions>
    </S.Card>
  )
}

export default CardComponent
