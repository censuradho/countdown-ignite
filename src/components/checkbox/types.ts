import { ComponentProps } from 'react'
import { Root } from './styles'

export type CheckboxProps = Pick<ComponentProps<typeof Root>, 
  'name'
  | 'defaultChecked'
  | 'checked'
  | 'onCheckedChange'
  | 'disabled'
  | 'required'
  | 'name'
  | 'value'
  | 'id'
>