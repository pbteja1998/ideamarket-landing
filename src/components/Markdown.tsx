import A from './A'
import MarkdownOriginal, { MarkdownToJSX } from 'markdown-to-jsx'
import React from 'react'

export default function Markdown(props: {
  [key: string]: any
  children: string
  options?: MarkdownToJSX.Options
}) {
  return (
    <MarkdownOriginal
      {...props}
      options={{
        ...(props?.options ?? {}),
        wrapper: React.Fragment,
        overrides: {
          ...(props?.options?.overrides ?? {}),
          a: {
            component: A,
          },
        },
      }}
    />
  )
}
