import { styled } from "@/stitches.config";

export const Container = styled('li', {
  padding: '1rem',
  borderRadius: '$sm',
  backgroundColor: '$gray500',
  display: 'flex',
  alignItems: 'center'
})

export const Label = styled('span', {
  fontSize: '$sm',
  color: '$gray300',
  textDecoration: 'line-through',
  display: 'inline-block',
  width: '100%',
  padding: '0 1rem',

  variants: {
    active: {
      true: {
        color: '$gray100',
        textDecoration: 'unset',
      }
    }
  }
})