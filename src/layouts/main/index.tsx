import { Outlet } from 'react-router-dom'
import { Header } from './components'

import * as Styles from './styles'

export function MainLayout () {
  return (
    <Styles.Container>
      <Header />
      <Outlet />
    </Styles.Container>
  )
}
