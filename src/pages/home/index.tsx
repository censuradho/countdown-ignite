import { CountDown, Form } from './components'
import * as Styles from './styles'

export function Home () {
  return (
    <Styles.Container>
      <h1>Home</h1>
      <Form>
        <CountDown />
      </Form>
    </Styles.Container>
  )
}
