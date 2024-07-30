import { Check } from 'lucide-react'
import React from 'react'
import { tv } from 'tailwind-variants'

const checkbox = tv({
  base: 'peer relative size-4 cursor-pointer appearance-none rounded-full border border-blue-light transition-all checked:border-purple-dark checked:bg-purple-dark hover:border-blue-dark checked:hover:border-purple-light checked:hover:bg-purple-light focus:outline-none focus:border-purple-dark focus:ring-purple-dark focus:ring-1 leading-[0]',
})

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChecked: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, onChecked, onChange, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <span className="sr-only">Checkbox</span>
        <input
          type="checkbox"
          className={checkbox()}
          {...props}
          ref={ref}
          data-id={id}
          checked={onChecked}
          onChange={onChange}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-gray-100 opacity-0 transition-opacity peer-checked:opacity-100">
          <Check strokeWidth={3} className="size-3" />
        </span>
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
