import { VariantProps } from '@stitches/react'
import { ReactNode } from "react";

import { Typography } from './styles'

export interface TypographyProps extends

VariantProps<typeof Typography> {
  children: ReactNode
}