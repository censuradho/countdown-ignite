import { Box, Icon, Typography } from '@/src/components'
import { useTodoContext } from '@/src/context/todo'
import * as Styles from './styles'
import { TodoListProps } from './types'

export function TodoList (props: TodoListProps) {
  const { todos } = props

  const todosFinished = todos?.filter(todo => !todo.active).length

  const total = todos.length

  function renderEmptyList () {
    if (todos.length > 1) return null


  }

  function renderContent () {
    if (todos.length > 1) return (
      <Box flexDirection="column" justifyContent="center" alignItems="center" gap={1}>
        <Icon name="clipboard" />
        <Box flexDirection="column" alignItems="center" gap={0.5}>
          <Typography heading bold color="gray300">Você ainda não tem tarefas cadastradas</Typography>
          <Typography color="gray300">Crie tarefas e organize seus itens a fazer</Typography>
        </Box>
      </Box>
    )

    return null
  }

  return (
    <Styles.Container>
      <Box justifyContent="space-between">
        <Box gap={0.5}>
          <Typography color="blue" heading bold>Tarefas criadas</Typography>
          <Styles.Count>{total}</Styles.Count>
        </Box>
        <Box gap={0.5}>
          <Typography color="purpleDark" heading bold>Concluídas</Typography>
          <Styles.Count>{todosFinished}</Styles.Count>
        </Box>
      </Box>
      {renderContent()}
    </Styles.Container>
  )
}