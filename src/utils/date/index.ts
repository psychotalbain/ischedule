import moment from 'moment'

/**
 * Formata uma data de entrada (sem formatação) para o formato especificado.
 *
 * @param date - A data no formato de entrada (sem formatação)
 * @param format - O formato desejado para a saída (ex: 'DD/MM/YYYY HH:mm')
 * @returns A data formatada como string
 */
export const formatDateFromRaw = (
  date: string,
  format: string = 'DD/MM/YYYY HH:mm'
): string => {
  return moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format(format)
}

/**
 * Formata uma data ISO (como 2024-09-17T19:00:51:494Z) para o formato especificado.
 *
 * @param date - A data no formato ISO
 * @param format - O formato desejado para a saída (ex: 'DD/MM/YYYY HH:mm')
 * @returns A data formatada como string
 */
export const formatDateFromISO = (
  isoDate: string,
  format: string = 'DD/MM/YYYY HH:mm'
): string => {
  return moment(isoDate).format(format)
}
