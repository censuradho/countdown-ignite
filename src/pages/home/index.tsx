import { CountDown, Form } from './components'
import * as Styles from './styles'

export function Home () {
  return (
    <Styles.Container>
      <Form>
        <CountDown />
      </Form>
    </Styles.Container>
  )
}
