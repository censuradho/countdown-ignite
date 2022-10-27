import { createContext, ReactNode, useContext, useState } from "react";

interface TodoContextProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
  todo: Todo[]
}

interface TodoProviderProps {
  children: ReactNode
}

interface Todo {
  active?: boolean
  label: string
}

const TodoContext = createContext<TodoContextProps>({
  setTodo: () => {},
  todo: []
})

export function TodoProvider (props: TodoProviderProps) {
  const { children } = props

  const [todo, setTodo] = useState<Todo[]>([])


  return (
    <TodoContext.Provider value={{
      todo, 
      setTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => useContext(TodoContext)