import { styled } from '@/stitches.config'

export const Form = styled('form', {
  color: '$gray200',
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  width: '100%',

  '@table-min': {
    fontSize: '1.125rem'
  }
})

export const Input = styled('input', {
  background: 'none',
  border: 'none',
  outline: 'none',
  height: '2.5rem',
  borderBottom: '2px solid $gray500',
  fontWeight: 600,
  fontSize: 'inherit',
  color: '$gray200',
  padding: '0 0.5rem',
  maxWidth: '18.75rem',

  '&:focus': {
    borderColor: '$primary'
  },

  '&::-webkit-calendar-picker-indicator': {
    display: 'none !important'
  },

  variants: {
    fullWidth: {
      true: {
        flex: 1
      }
    },
    hasError: {
      true: {
        borderColor: '$red'
      }
    }
  }
})

export const DataList = styled('datalist', {})

export const MinutesAmountInput = styled(Input, {
  width: '4rem'
})

export const Label = styled('label', {

})
