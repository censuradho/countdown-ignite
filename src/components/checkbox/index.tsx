import { memo } from "react";
import { Icon } from "../icon";

import * as Styles from './styles'
import { CheckboxProps } from "./types";

export const Checkbox = memo((props: CheckboxProps) => {

  return (
    <Styles.Root {...props}>
      <Styles.Indicator>
        <Icon name="correct" color="white" />
      </Styles.Indicator>
    </Styles.Root>
  )
})