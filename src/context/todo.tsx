import { createContext, ReactNode, useContext, useState } from "react";
import { SetValue, useLocalStorage } from "../hooks/useLocalStorage";
import { Todo } from "../layout/app-layout/types";

interface TodoContextProps {
  setTodos: SetValue<Todo[]>
  todos: Todo[]
}

interface TodoProviderProps {
  children: ReactNode
}

const TodoContext = createContext<TodoContextProps>({
  setTodos: () => {},
  todos: []
})

export function TodoProvider (props: TodoProviderProps) {
  const { children } = props

  const [todos, setTodos] = useLocalStorage<Todo[]>('@censuradho:todos', [])


  return (
    <TodoContext.Provider value={{
      todos, 
      setTodos
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => useContext(TodoContext)