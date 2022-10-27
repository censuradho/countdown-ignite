import { CheckedState } from "@radix-ui/react-checkbox";

import { ButtonIcon, Typography } from "@/src/components";
import { Checkbox } from "@/src/components";
import { useTodoContext } from "@/src/context/todo";

import { memo } from "react";

import * as Styles from './styles'
import { TodoProps } from "./types";

export const Todo = memo((props: TodoProps) => {
  const { setTodos } = useTodoContext()
  
  const { label, active, uuid } = props

  const handleChecked = (checked: CheckedState) => {
    const isActive = checked  !== true
    
    
    setTodos(prevState => {
      return prevState.map(todo => 
        todo.uuid === uuid 
          ? ({
            ...todo,
            active: isActive,
          }) : todo
      )
    })
  }

  const handleRemoveTodo = () => {
    setTodos(prevState => prevState.filter(todo => todo.uuid !== uuid))
  }
  
  return (
    <Styles.Container>
      <Checkbox 
        checked={!active}
        id={uuid}
        defaultChecked={!active}
        onCheckedChange={handleChecked} 
      />
      <Styles.Label htmlFor={uuid} active={active}>{label}</Styles.Label>
      <ButtonIcon
        onClick={handleRemoveTodo}
        icon={{ 
          name: 'trash',
          color: 'gray100'
        }} 
      />
    </Styles.Container>
  )
})