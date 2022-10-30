import { Box, Icon } from '@/src/components'
import { paths } from '@/src/constants/routes'

import * as Styles from './styles'

export function Header () {
  return (
    <Styles.Container>
      <Styles.Link to={paths.home}>
        <Icon name="logo" />
      </Styles.Link>

      <Box gap={2}>
        <Styles.Link to={paths.timer}>
          <Icon name="timer" />
        </Styles.Link>
        <Styles.Link to={paths.history}>
          <Icon name="scroll" />
        </Styles.Link>
      </Box>
    </Styles.Container>
  )
}
