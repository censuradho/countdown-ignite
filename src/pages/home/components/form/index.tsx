import { FormProps } from './types'
import * as Styles from './styles'
import { Box, Button } from '@/src/components'

export function Form (props: FormProps) {
  const { children } = props

  return (
    <Styles.Form>
      <Box
        wrap
        alignItems="center"
        gap={0.5}
      >
        <Styles.Label htmlFor="task">Vou trabalhar em</Styles.Label>
        <Styles.Input
          id="task"
        />

        <Styles.Label htmlFor="minutesAmount">durante</Styles.Label>
        <Styles.Input
          type="number"
          id="minutesAmount"
        />
        <span>minutos.</span>
      </Box>
      {children}
      <Button
        type="submit"
        icon={{
          name: 'play'
        }}
      >Começar</Button>
    </Styles.Form>
  )
}
