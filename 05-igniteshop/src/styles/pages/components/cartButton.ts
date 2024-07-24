import { styled } from '@/styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  borderRadius: 8,

  position: 'relative',
  padding: '.5rem',

  cursor: 'pointer',
  transition: '.1s ease-in-out',

  svg: {
    fontSize: 24,
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  span: {
    position: 'absolute',
    top: -5,
    right: -5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '1rem',
    height: '1rem',

    fontSize: '.75rem',
    color: '$gray100',

    backgroundColor: '$green500',
    borderRadius: '50%',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green500',
        color: '$gray100',
      },
      ghost: {
        background: 'none',
        color: '#fff',

        '&:not(:disabled):hover': {
          color: '$gray300',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'ghost',
  },
})
