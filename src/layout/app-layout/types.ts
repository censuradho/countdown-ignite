export interface Todo {
  label: string
  active?: boolean
  uuid: string
}

export type TodoFormData = Pick<Todo, 'label'>