import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex resize-none min-h-60 w-full rounded-lg shadow-code bg-gray-500 scrollbar text-gray-100 px-3 py-2  text-sm transition-all duration-150 ring-offset-background placeholder:text-gray-300 outline-none focus:border-purple-dark focus:ring-2 placeholder:select-none focus:ring-purple-dark disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
