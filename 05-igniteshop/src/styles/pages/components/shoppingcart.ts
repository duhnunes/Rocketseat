import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0 0 0 / .75)',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
})

export const ButtonClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  color: '$gray300',
})

export const Header = styled(Dialog.Title, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '4.5rem 0 2rem',
  marginBottom: '.5rem',
  textAlign: 'center',
  fontSize: '$lg',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  width: '30rem',
  paddingLeft: '3rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px solid rgba(0 0 0 / .8)',

  display: 'flex',
  flexDirection: 'column',

  footer: {
    padding: '0 3rem 3rem 0',

    a: {
      textDecoration: 'none',
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.5rem',

      backgroundColor: '$green500',
      width: '100%',
      padding: '1.25rem',

      color: '$white',
      fontSize: '$md',
      fontWeight: 'bold',
      textAlign: 'center',

      border: 0,
      borderRadius: 8,
      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },
    },
  },
})

export const TotalItemsCart = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 115px',
  gap: '.4375rem',

  width: '100%',
  paddingTop: '1rem',
  marginBottom: '3.4375rem',

  span: {
    textAlign: 'end',
  },
})

export const ShoppingCartItemsContainer = styled('section', {
  flex: '1 1 0%',

  display: 'flex',
  flexDirection: 'column',

  overflow: 'auto',
  overflowX: 'hidden',

  scrollbarColor: '$gray900',
  scrollbarWidth: 'thin',
})

export const ShoppingCartCard = styled('article', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  padding: '1.5rem 0',

  '> img': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 6,
    objectFit: 'cover',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    color: '$green500',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',

    '&:not(:disabled):hover': {
      color: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',

    p: {
      color: '$gray300',
      fontSize: '$md',
    },

    strong: {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: 700,
    },
  },

  '> p': {
    fontSize: '$lg',
  },
})
