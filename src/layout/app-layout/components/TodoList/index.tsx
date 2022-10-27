import { Box, Icon, Typography } from '@/src/components'
import { Todo } from '../Todo'
import * as Styles from './styles'
import { TodoListProps } from './types'

export function TodoList (props: TodoListProps) {
  const { todos } = props

  const todosFinished = todos?.filter(todo => !todo.active).length

  const total = todos.length

  
  const renderTodos = todos.map(todo => (
    <Todo key={todo.uuid} {...todo} />
  ))

  function renderContent () {
    if (todos.length === 0) return (
      <Box flexDirection="column" justifyContent="center" alignItems="center" gap={1}>
        <Icon name="clipboard" />
        <Box flexDirection="column" alignItems="center" gap={0.5}>
          <Typography heading bold color="gray300">Você ainda não tem tarefas cadastradas</Typography>
          <Typography color="gray300">Crie tarefas e organize seus itens a fazer</Typography>
        </Box>
      </Box>
    )

    return (
      <Styles.List>{renderTodos}</Styles.List>
    )
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
          <Styles.Count>{`${todosFinished} de ${total}`}</Styles.Count>
        </Box>
      </Box>
      {renderContent()}
    </Styles.Container>
  )
}