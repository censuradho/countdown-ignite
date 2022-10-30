import { styled } from '@/stitches.config'

export const Container = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '1.5rem'
  },

  '@table-min': {
    padding: '3.5rem'
  }
})

export const HistoryList = styled('div', {
  width: '100%',
  flex: 1,
  overflowX: 'auto',

  table: {
    width: '100%',
    borderCollapse: 'collapse',

    th: {
      backgroundColor: '$background',
      padding: '1rem',
      textAlign: 'left',
      fontSize: '0.875rem',
      lineHeight: '1.6',

      '&:first-child': {
        borderTopLeftRadius: '$sm',
        paddingLeft: '1.5rem'
      },
      '&:last-child': {
        borderTopRightRadius: '$sm',
        paddingRight: '1.5rem'
      }
    },

    td: {
      backgroundColor: '$background',
      padding: '1rem',
      fontSize: '0.875rem',
      lineHeight: '1.6',
      whiteSpace: 'nowrap',

      '&:first-child': {
        width: '50%',
        paddingLeft: '1.5rem'
      },
      '&:last-child': {
        paddingRight: '1.5rem',
        display: 'flex',
        gap: '0.5rem'
      }
    }
  }
})

export const Status = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '&::before': {
    content: '',
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%'
  },

  variants: {
    value: {
      finished: {
        '&::before': {
          background: '$green'
        }
      },
      danger: {
        '&::before': {
          background: '$danger'
        }
      },
      error: {
        '&::before': {
          background: '$red'
        }
      }
    }
  }
})
