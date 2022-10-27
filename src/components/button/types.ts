import { VariantProps } from "@stitches/react";
import { Icon } from "@/src/components";
import { ComponentProps, ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
  | "onFocus"
  | "id"
  | "type"
  | "disabled"
>


export interface ButtonProps extends
  VariantProps<typeof Button>,
  RootButtonProps {
  children: ReactNode
  icon?: ComponentProps<typeof Icon>
}