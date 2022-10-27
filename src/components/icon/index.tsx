import { icons } from "@/src/constants/icons";

import { theme } from "@/stitches.config";

import type { IconProps } from "./types";

export function Icon(props: IconProps) {
  const {
    name, color, customColor, size = 20,
  } = props;


  const Svg = icons[name];

  const fill = ((customColor || theme.colors[color || "gray300"].value)) as string;

  return (
    <Svg style={{ fill }}  />
  );
}