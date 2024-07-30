import React, { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'border-none bg-none inline-flex gap-2 items-center rounded-lg text-sm transition-all duration-150 cursor-pointer focus:outline-none focus:border-purple-dark focus:ring-purple-dark focus:ring-2 shadow-input select-none font-medium',
  variants: {
    variant: {
      primary: 'bg-blue-dark text-gray-100 hover:bg-blue-light',
      outline:
        'hover:outline hover:outline-1 hover:outline-gray-400 outline-none  shadow-none',
      ghost: 'text-gray-300 hover:text-danger hover:bg-gray-400 shadow-none',
      success:
        'bg-green-600 text-gray-100 hover:bg-green-500 hover:text-gray-600',
      danger: 'bg-red-600 hover:bg-red-500',
    },
    size: {
      primary: 'p-4',
      ghost: 'p-1',
      confirm: 'p-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'primary',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, ...props }, ref) => {
    return (
      <button className={button({ variant, size })} {...props} ref={ref}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button }
