import { CheckedState } from "@radix-ui/react-checkbox";

import { ButtonIcon, Typography } from "@/src/components";
import { Checkbox } from "@/src/components";
import { useTodoContext } from "@/src/context/todo";

import { FormEvent, memo, useState } from "react";

import * as Styles from './styles'
import { TodoProps } from "./types";

export const Todo = memo((props: TodoProps) => {
  const { setTodos } = useTodoContext()
  
  const { label, active, uuid } = props

  const [isEditing, setIsEditing] = useState(false)
  const [editLabel, setEditLabel] = useState(label)

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
  
  const handleEdit = () => {
    if (editLabel.length === 0) return handleRemoveTodo()

    setIsEditing(false)
    setTodos(prevState => {
      return prevState.map(todo => 
        
        todo.uuid === uuid
          ? ({
            ...todo,
            label: editLabel
          })  
          : todo
      )
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    handleEdit()
  }

  function renderContent () {
    if (isEditing) return (
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.Input 
          value={editLabel}
          onChange={event => setEditLabel(event.target.value)}
          onBlur={handleEdit}
          defaultValue={label} 
          editing={isEditing}
        />
      </Styles.Form>
    )

    return (
      <Styles.Label 
        active={active}
        onClick={() => setIsEditing(prevState => !prevState)}
      >{label}</Styles.Label>
    )
  }

  return (
    <Styles.Container>
      <Checkbox 
        checked={!active}
        id={uuid}
        defaultChecked={!active}
        onCheckedChange={handleChecked} 
      />
      {renderContent()}
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