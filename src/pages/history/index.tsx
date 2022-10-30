import { Box, ButtonIcon } from '@/src/components'
import { useTimerContext } from '@/src/context/timer'

import { formatDistanceToNow, isAfter } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useState } from 'react'

import * as Styles from './styles'

export function History () {
  const context = useTimerContext()
  const [sort, setSort] = useState(false)

  const cycles = context.cycles.sort((a, b) => {
    if (isAfter(new Date(a.createdAt), new Date(b.createdAt))) return sort ? 1 : -1
    if (isAfter(new Date(b.createdAt), new Date(a.createdAt))) return sort ? -1 : 1
    return 0
  })

  const renderHistoryList = cycles.map(cycle => {
    const startAt = cycle?.finishedAt || cycle?.interruptAt || cycle.createdAt || new Date()
    const distance = formatDistanceToNow(new Date(startAt), {
      addSuffix: true,
      locale: ptBR
    })

    const statusError = cycle.interruptAt && 'error'
    const statusFinished = cycle.finishedAt && 'finished'
    const statusDanger = !cycle?.finishedAt && !cycle.interruptAt && 'danger'

    const labelMap = {
      error: 'Interrompido',
      finished: 'Concluído',
      danger: 'Em andamento'
    }

    const key = (statusError || statusFinished || statusDanger) as keyof typeof labelMap

    return (
      <tr key={cycle.id}>
        <td>{cycle.task}</td>
        <td>{`${cycle.minutesAmount} minutos`}</td>
        <td>{distance}</td>
        <td>
          <Styles.Status value={key} />
          {labelMap[key]}
        </td>
      </tr>

    )
  })

  return (
    <Styles.Container>
      <h1>Meu histórico</h1>
      <Styles.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>
                <Box>
                  <ButtonIcon
                    onClick={() => setSort(state => !state)}
                    icon={{
                      name: !sort ? 'arrowDown' : 'arrowUp'
                    }}
                  />
                  Início
                </Box>
              </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {renderHistoryList}
          </tbody>
        </table>
      </Styles.HistoryList>
    </Styles.Container>
  )
}
