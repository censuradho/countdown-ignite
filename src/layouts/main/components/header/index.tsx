import { Box, Icon } from '@/src/components'
import { paths } from '@/src/constants/routes'
import { Link } from 'react-router-dom'
import * as Styles from './styles'

export function Header () {
  return (
    <Styles.Container>
      <Link to={paths.home}>
        <Icon name="logo" />
      </Link>

      <Box gap={2}>
        <Link to={paths.timer}>
          <Icon name="timer" />
        </Link>
        <Link to={paths.history}>
          <Icon name="scroll" />
        </Link>
      </Box>
    </Styles.Container>
  )
}
