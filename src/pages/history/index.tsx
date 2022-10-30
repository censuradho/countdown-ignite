import * as Styles from './styles'

export function History () {
  return (
    <Styles.Container>
      <h1>Meu histórico</h1>
      <Styles.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>à 2 dias</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>à 2 dias</td>
              <td>Concluído</td>
            </tr>            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>à 2 dias</td>
              <td>Concluído</td>
            </tr>            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>à 2 dias</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </Styles.HistoryList>
    </Styles.Container>
  )
}
