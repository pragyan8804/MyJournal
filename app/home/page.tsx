'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { TiptapCollabProvider } from '@hocuspocus/provider'

// import DateToday from '@/components/home-page/DateToday';
import { BlockEditor } from '@/components/BlockEditor';
import { useSearchParams } from 'next/navigation';
import { Doc as YDoc } from 'yjs'
import Shimmer from './loading';

export default function Home({ params }: { params: { room: string } }) {
  const [provider, setProvider] = useState<TiptapCollabProvider | null>(null)
  const [collabToken, setCollabToken] = useState<string | null | undefined>()
  const [aiToken, setAiToken] = useState<string | null | undefined>()
  const searchParams = useSearchParams()

  const hasCollab = parseInt(searchParams?.get('noCollab') as string) !== 1 && collabToken !== null

  const { room } = params

    useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      try {
        const response = await fetch('/api/collaboration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('No collaboration token provided, please set TIPTAP_COLLAB_SECRET in your environment')
        }
        const data = await response.json()

        const { token } = data

        // set state when the data received
        setCollabToken(token)
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message)
        }
        setCollabToken(null)
        return
      }
    }

    dataFetch()
  }, [])

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      try {
        const response = await fetch('/api/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('No AI token provided, please set TIPTAP_AI_SECRET in your environment')
        }
        const data = await response.json()

        const { token } = data

        // set state when the data received
        setAiToken(token)
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message)
        }
        setAiToken(null)
        return
      }
    }

    dataFetch()
  }, [])

  const ydoc = useMemo(() => new YDoc(), [])

  useLayoutEffect(() => {
    if (hasCollab && collabToken) {
      setProvider(
        new TiptapCollabProvider({
          name: `${process.env.NEXT_PUBLIC_COLLAB_DOC_PREFIX}${room}`,
          appId: process.env.NEXT_PUBLIC_TIPTAP_COLLAB_APP_ID ?? '',
          token: collabToken,
          document: ydoc,
        }),
      )
    }
  }, [setProvider, collabToken, ydoc, room, hasCollab])

 if ((hasCollab && !provider) || aiToken === undefined || collabToken === undefined) {
    return <Shimmer />;
  }

  return (
    <div className='bg-slate-200 dark:bg-slate-900'>
      {/* <div className='flex justify-end mr-[20rem]'>
        <DateToday />
      </div> */}
      <div className='mx-auto min-h-screen'>
        <BlockEditor aiToken={aiToken ?? undefined} hasCollab={hasCollab} ydoc={ydoc} provider={provider} />
      </div>
    </div>
  );
}
