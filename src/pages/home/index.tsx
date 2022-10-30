import { useTimerContext } from '@/src/context/timer'
import { useEffect } from 'react'
import { RegisterTimerForm } from './components'

import * as Styles from './styles'

export function Home () {
  const context = useTimerContext()

  useEffect(() => {
    return () => context?.stopCycle?.()
  }, [])

  return (
    <Styles.Container>
      <RegisterTimerForm />
    </Styles.Container>
  )
}
