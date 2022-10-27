import { styled } from "@/stitches.config";

export const Container = styled('li', {
  padding: '1rem',
  borderRadius: '$sm',
  backgroundColor: '$gray500',
  display: 'flex',
  alignItems: 'center'
})

export const Form = styled('form', {
  width: '100%',
})

export const Input = styled('input', {
  width: '100%',
  background: 'none',
  outline: 'none',
  border: 'none',
  fontSize: '$sm',
  padding: '0 1rem',

  variants: {
    editing: {
      true: {
        color: '$gray200'
      }
    }
  }
})

export const Label = styled('label', {
  fontSize: '$sm',
  color: '$gray300',
  textDecoration: 'line-through',
  display: 'inline-block',
  width: '100%',
  padding: '0 1rem',
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        color: '$gray100',
        textDecoration: 'unset',
      }
    }
  }
})