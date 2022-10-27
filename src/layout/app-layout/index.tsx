import { useEffect } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'

import { globalStyle } from '@/stitches.config'
import { Button, Header, Input } from '@/src/components'

import * as Styles from './styles'
import { useLocalStorage } from '@/src/hooks/useLocalStorage'
import { Todo, TodoFormData } from './types'
import { todoSchemaValidation } from './validations';
import { TodoList } from './components';
import { uuid } from '@/src/lib/uuid';
import { useTodoContext } from '@/src/context/todo';

export function AppLayout () {
  const { setTodos, todos } = useTodoContext()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { 
      errors    },
  } = useForm<TodoFormData>({
    resolver: yupResolver(todoSchemaValidation),
  });

  const onSubmit = (todo: TodoFormData) => {
    const newTodo: Todo = {
      ...todo,
      uuid: uuid(),
      active: true
    }

    setTodos(prevState => ([
      ...prevState,
      newTodo
    ]))

    setValue('label', '')
  }
  
  useEffect(() => {
		globalStyle()
  }, [])


  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            register={register('label')}
            errorMessage={errors.label?.message}
            placeholder="Adicione uma nova tarefa" 
          />
          <Button icon={{ name: 'plus' }}>Criar</Button>
        </Styles.Form>
        <TodoList todos={todos}/>
      </Styles.Container>
    </>
  )
} 



