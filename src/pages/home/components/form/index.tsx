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
          placeholder="Dê um nome para o seu projeto"
          id="task"
          list="task-suggestion"
          fullWidth
        />
        <Styles.DataList id="task-suggestion">
          <option value="projeto 1" />
        </Styles.DataList>
        <Styles.Label htmlFor="minutesAmount">durante</Styles.Label>
        <Styles.MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          max={60}
          min={0}
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
