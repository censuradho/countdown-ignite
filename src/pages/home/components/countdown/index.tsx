import { useTimerContext } from '@/src/context/timer'
import * as Styles from './styles'

export function CountDown () {
  const { minutes, seconds } = useTimerContext()

  return (
    <Styles.Container>
      <Styles.Number>{minutes?.[0]}</Styles.Number>
      <Styles.Number>{minutes?.[1]}</Styles.Number>
      <Styles.Separator>:</Styles.Separator>
      <Styles.Number>{seconds?.[0]}</Styles.Number>
      <Styles.Number>{seconds?.[1]}</Styles.Number>
    </Styles.Container>
  )
}
