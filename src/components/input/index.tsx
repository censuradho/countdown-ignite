import * as Styles from './styles'

import type { InputProps } from './types'

export function Input (props: InputProps) {
  const { ...otherProps } = props

  return (
    <Styles.Input {...otherProps} />
  )
}