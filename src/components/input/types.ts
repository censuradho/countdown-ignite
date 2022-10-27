import { InputHTMLAttributes } from "react";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  'name'
  | 'onChange'
  | 'onBlur'
  | 'onFocus'
  | 'value'
  | 'defaultValue'
  | 'placeholder'
>

export interface InputProps extends RootInputProps {}