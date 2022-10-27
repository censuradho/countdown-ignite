import { styled } from "@/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5.25rem',
})

export const Count = styled('div', {
  width: '1.5625rem',
  height: '1.1875rem',
  borderRadius: '9999px',
  backgroundColor: '$gray400',
  color: '$gray200',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})