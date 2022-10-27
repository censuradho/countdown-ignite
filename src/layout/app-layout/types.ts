export interface Todo {
  label: string
  active?: boolean
}

export type TodoFormData = Pick<Todo, 'label'>