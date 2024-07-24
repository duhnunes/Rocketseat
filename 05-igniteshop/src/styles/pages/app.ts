import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    color: '#fff',
    border: 0,
    background: 'none',

    '&:hover': {
      color: '$gray300',
      cursor: 'pointer',

      '> svg': {
        fill: '$gray300',
      },
    },

    svg: {
      fill: '#fff',
      color: '#000',
    },
  },
})
