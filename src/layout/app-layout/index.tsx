import { useEffect } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'

import { globalStyle } from '@/stitches.config'
import { Button, Header, Input } from '@/src/components'

import * as Styles from './styles'
import { useLocalStorage } from '@/src/hooks/useLocalStorage'
import { Todo, TodoFormData } from './types'
import { todoSchemaValidation } from './validations';

export function AppLayout () {
  const [todos, setTodos] = useLocalStorage<Todo[]>('@censuradho:todos', [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: yupResolver(todoSchemaValidation),
  });

  const onSubmit = (todo: TodoFormData) => {
    setTodos(prevState => ([
      ...prevState,
      todo
    ]))
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
      </Styles.Container>
    </>
  )
} 



