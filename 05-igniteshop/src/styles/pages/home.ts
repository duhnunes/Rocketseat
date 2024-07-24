import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> div': {
    width: '100%',
    height: '100%',

    a: {
      width: '100%',
      height: '100%',
      display: 'block',
    },

    img: {
      objectFit: 'cover',
      width: '100%',
      transform: 'translateY(-50%)',
      position: 'relative',
      top: '50%',
    },
  },

  header: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',

    backgroundColor: 'rgba(0 0 0 / .2)',
    borderRadius: 6,
    opacity: 0,

    transition: '.15s ease-in-out',

    button: {
      color: '$gray300',
    },

    '&:hover': {
      backgroundColor: 'rgba(0 0 0 / .5)',
      opacity: 1,

      '& button': {
        color: '$gray500',
      },
    },
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0 0 0 / 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSite: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },

    header: {
      opacity: 1,
    },
  },
})
