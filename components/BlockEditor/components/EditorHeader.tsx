import { Icon } from '@/components/ui/Icon'
import { EditorUser } from '../types'
import { WebSocketStatus } from '@hocuspocus/provider'
import { Toolbar } from '@/components/ui/Toolbar'
import { Editor } from '@tiptap/core'
import { useEditorState } from '@tiptap/react'
import deepEqual from 'fast-deep-equal'
import SearchBar from './SearchBar'
import { ThemeToggler } from '@/components/theme/ThemeToggler'

export type EditorHeaderProps = {
  isSidebarOpen?: boolean
  toggleSidebar?: () => void
  editor: Editor
}

export const EditorHeader = ({ editor, isSidebarOpen, toggleSidebar }: EditorHeaderProps) => {

  return (
    <div className="flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-slate-900 bg-slate-200 border-b border-slate-300 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800">
      <div className="flex flex-row gap-x-1.5 items-center">
        
      </div>
      <div className='flex gap-5'>
        <ThemeToggler />
        <SearchBar />
      </div>
    </div>
  )
}
