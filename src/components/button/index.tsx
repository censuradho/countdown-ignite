import { memo } from "react";

import { Icon, Typography } from "@/src/components";

import * as Styles from "./styles";

import { ButtonProps } from "./types";

function BaseButton(props: ButtonProps) {
  const {
    children,
    icon,
    type = 'button',
    ...otherProps
  } = props;


  return (
    <Styles.Button
      {...otherProps}
    >
      <Typography bold>
        {children}
      </Typography>
      {icon && <Icon {...icon} />}
    </Styles.Button>
    )
}

export const Button = memo(BaseButton);