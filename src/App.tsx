import { useEffect } from 'react'

import { globalStyle } from '@/stitches.config'
import { Button, Header, Input } from '@/src/components'

import * as Styles from './app.styles'

function App() {

  useEffect(() => {
		globalStyle()
  }, [])

  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.Form>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button icon={{ name: 'plus' }}>Criar</Button>
        </Styles.Form>
      </Styles.Container>
    </>
  )
}

export default App
