import { icons } from "@/src/constants/icons";
import { theme } from '@/stitches.config'

type Colors = keyof typeof theme['colors']

export type IconNames = keyof typeof icons

export interface IconProps {
  name: keyof typeof icons
  color?: Colors
  customColor?: string,
  /**in rem*/
  size?: number
}