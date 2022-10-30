import { styled } from '@/stitches.config'
import { NavLink } from 'react-router-dom'

export const Container = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2rem'
})

export const Link = styled(NavLink, {
  borderBottom: '3px solid transparent',
  paddingBottom: '0.5rem',

  '&:hover': {
    borderColor: '$primary'
  },
  '&.active': {
    path: {
      fill: '$primary'
    }
  }
})
