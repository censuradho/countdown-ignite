import { useEffect } from 'react'
import { AppLayoutProps } from "./types";
import { globalStyle } from '@/stitches.config'
import { Button, Header, Input } from '@/src/components'

import * as Styles from './styles'

export function AppLayout (props: AppLayoutProps) {
  const { children } = props

  
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



