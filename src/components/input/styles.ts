import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%'
})

export const Input = styled('input', {
  width: '100%',
  height: '3.375rem',
  borderRadius: '$sm',
  border: '2px solid $gray700',
  background: '$gray500',
  outline: 'none',
  color: '$gray300',
  padding: '0 1rem',
  fontSize: '$md',

  '&::placeholder': {
    color: '$gray300',
    fontSize: '$md'
  },

  '&:focus': {
    borderColor: '$blue'
  },

  variants: {
    hasError: {
      true: {
        borderColor: '$red',
        color: '$red'
      }
    }
  }
})
