import { ExternalLink } from 'lucide-react'

export const markdownComponents = {
  h1: ({ ...props }) => (
    <h1
      className="text-3xl font-bold pb-4 border-b border-[#30363db3] mb-4"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="text-2xl font-bold pb-4 border-b border-[#30363db3] mb-4"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="text-xl font-bold pb-4 border-b border-[#30363db3] mb-4"
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 px-4 text-gray-300 mb-4"
      {...props}
    />
  ),
  ul: ({ ...props }) => <ul className="list-disc my-2" {...props} />,
  li: ({ ...props }) => <li className="ml-4 mt-1 first:mt-0" {...props} />,
  ol: ({ ...props }) => (
    <ol className="list-decimal list-outside my-2" {...props} />
  ),
  pre: ({ ...props }) => (
    <pre
      className="pre-block !px-1.5 my-2 text-[85%] bg-[#6e768166] rounded-md"
      {...props}
    />
  ),
  code: ({ ...props }) => (
    <code
      className="py-px px-1 m-0 text-[85%] bg-[#6e768166] rounded-md inline"
      {...props}
    />
  ),

  p: ({ ...props }) => <p className="mb-4 px-1" {...props} />,
  br: () => <span className="block mb-1" />,
  a: ({ ...props }) => (
    <a
      className="inline-flex items-center gap-1 mx-0.5 text-blue-light font-medium underline underline-offset-2 hover:text-blue-dark"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
      <ExternalLink className="size-3 text-gray-200 font-bold" />
    </a>
  ),
}
