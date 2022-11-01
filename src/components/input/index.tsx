import { Typography } from '../typography'
import * as Styles from './styles'

import type { InputProps } from './types'

export function Input (props: InputProps) {
  const { errorMessage, register, ...otherProps } = props

  const hasError = !!errorMessage

  const renderErrorMessage = () => {
    if (!hasError) return null

    return (
      <Typography color="red">{errorMessage}</Typography>

    )
  }

  return (
    <Styles.Container>
      <Styles.Input
        hasError={hasError}
        {...otherProps}
        {...register}
      />
      {renderErrorMessage()}
    </Styles.Container>
  )
}
