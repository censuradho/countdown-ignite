import { styled } from '@/stitches.config'

export const Container = styled('div', {
  fontFamily: 'monospace',
  fontSize: '2.5rem',
  lineHeight: '8rem',
  color: '$gray200',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',

  '@table-min': {
    fontSize: '10rem'
  }
})

export const Number = styled('span', {
  background: '$background',
  padding: '1rem 0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',

  '@table-min': {
    padding: '2rem 1rem',
    minWidth: '9rem'
  }
})

export const Separator = styled('span', {
  color: '$primary',
  padding: '2rem 0',
  width: '4rem',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
