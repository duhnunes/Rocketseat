import React from 'react'
import { tv } from 'tailwind-variants'

const input = tv({
  base: 'min-w-[638px] rounded-lg bg-gray-500 p-4 text-gray-100 placeholder-gray-300 outline-none transition-all duration-150 placeholder:italic block w-full shadow-input focus:outline-none focus:border-purple-dark focus:ring-purple-dark focus:ring-1 placeholder:select-none',
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <label className="relative block">
      <span className="sr-only">Add new Todo</span>
      <input type="text" className={input({})} ref={ref} {...props} />
    </label>
  )
})

Input.displayName = 'Input'

export { Input }
