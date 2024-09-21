import { useEffect, useState } from 'react'
import { useEditor, useEditorState } from '@tiptap/react'
import type { AnyExtension, Editor } from '@tiptap/core'
import Paragraph from '@tiptap/extension-paragraph'

import { ExtensionKit } from '@/extensions/extension-kit'
import { initialContent } from '@/lib/data/initialContent'

// Custom extension to add default font and size to paragraphs
const DefaultStyleExtension = Paragraph.extend({
  addGlobalAttributes() {
    return [
      {
        types: ['paragraph'],
        attributes: {
          fontFamily: {
            default: 'Caveat',
            parseHTML: element => element.style.fontFamily || 'Caveat',
            renderHTML: attributes => {
              return {
                style: `font-family: ${attributes.fontFamily}`,
              }
            },
          },
          fontSize: {
            default: '24px',
            parseHTML: element => element.style.fontSize || '24px',
            renderHTML: attributes => {
              return {
                style: `font-size: ${attributes.fontSize}`,
              }
            },
          },
        },
      },
    ]
  },
})

declare global {
  interface Window {
    editor: Editor | null
  }
}

export const useBlockEditor = () => {
  const editor = useEditor(
    {
      editable: true,
      immediatelyRender: true,
      // shouldRerenderOnTransaction: false,
      autofocus: true,
      // onCreate: ctx => {
      //   if (ctx.editor.isEmpty) {
      //     ctx.editor.commands.setContent(initialContent)
      //     ctx.editor.commands.focus('start', { scrollIntoView: true })
      //   }

      //   // Set default styles for the initial paragraph
      //   ctx.editor.commands.setFontFamily('Caveat')
      //   ctx.editor.commands.setFontSize('24px')
      // },
      extensions: [
        DefaultStyleExtension,
        ...ExtensionKit({}),
      ],
      editorProps: {
        attributes: {
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off',
          class: 'min-h-full',
        },
      },
    },
  )

  window.editor = editor

  return { editor }
}