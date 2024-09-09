"use client";

import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef, useState } from 'react';

export default function Editor(){

  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS>();

  const initializeEditor = async () => {

    const EditorJs = (await import('@editorjs/editorjs')).default;
    const Header = (await import('@editorjs/header')).default;
    const List = (await import('@editorjs/list')).default; 
    const Table = (await import('@editorjs/table')).default; 

    if (!ref.current) {

      const editor = new EditorJS({
        holder: 'editorjs',
        placeholder: 'Type here to write your story...',
        tools: {
          header: Header,
          list: List,
          table: Table,
        }
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    }

    if(isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      }; 
    }

  }, [isMounted]);

  const save = () => { 
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log("Article data: ", outputData);
        alert(JSON.stringify(outputData));
    });
   }
  };

  return (
    <div className='min-h-screen'>
      <div id="editorjs" className='mt-10 min-h-100 max-w-full prose' />
      <button onClick={save} className="text-2xl p-2 m-2 bg-slate-500 rounded-lg">Save</button>
    </div>
  );
}