import { styled } from '@/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  outline: 'none',

  '&:disabled': {
    background: '$primaryDark',
    opacity: 0.7
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      primary: {
        background: '$primary',
        '> *': {
          color: 'white'
        },
        padding: '1rem',
        borderRadius: '$sm',
        height: '3.375rem',

        'svg path': {
          fill: 'White'
        },
        '&:hover, &:focus': {
          background: '$primaryDark',
          'svg path': {
            fill: 'white'
          }
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {
  position: 'absolute',

  svg: {
    width: '36px'
  }
})
