import * as Styles from './styles'
import { TypographyProps } from './types'

export function Typography (props: TypographyProps) {
  const { children, ...otherProps } = props

  return (
    <Styles.Typography {...otherProps}>
      {children}
    </Styles.Typography>
  )
}