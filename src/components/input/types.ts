import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  'name'
  | 'onChange'
  | 'onBlur'
  | 'onFocus'
  | 'value'
  | 'defaultValue'
  | 'placeholder'
>

export interface InputProps extends RootInputProps {
  errorMessage?: string
  register?: UseFormRegisterReturn
}