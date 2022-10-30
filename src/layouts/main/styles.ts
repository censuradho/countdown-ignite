import { styled } from '@/stitches.config'

export const Container = styled('main', {
  width: '100%',
  maxWidth: '90%',
  minHeight: 'calc(100vh - 10rem)',
  margin: '5rem auto',
  background: '$foreground',
  borderRadius: '$sm',
  padding: '2.5rem',
  marginBottom: '4.5rem',

  '@desktop-min': {
    maxWidth: '74rem'
  }
})
