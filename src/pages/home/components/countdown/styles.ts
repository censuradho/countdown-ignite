import { styled } from '@/stitches.config'

export const Container = styled('div', {
  fontFamily: 'monospace',
  fontSize: '10rem',
  lineHeight: '8rem',
  color: '$gray200',
  display: 'flex',
  gap: '1rem'
})

export const Number = styled('span', {
  background: '$background',
  padding: '2rem 1rem',
  borderRadius: '8px'
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
