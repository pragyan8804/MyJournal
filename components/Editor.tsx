"use client";

import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef, useState } from 'react';

export default function Editor({ userId }: { userId: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS>();

  const initializeEditor = async () => {
    const EditorJs = (await import('@editorjs/editorjs')).default;
    const Header = (await import('@editorjs/header')).default;
    const List = (await import('@editorjs/list')).default;
    const Table = (await import('@editorjs/table')).default;

    if (!ref.current) {
      const editor = new EditorJs({
        holder: 'editorjs',
        placeholder: 'Type here to write your story...',
        tools: {
          header: Header,
          list: List,
          table: Table,
        },
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  const save = async () => {
    if (ref.current) {
      ref.current.save().then(async (outputData) => {
        console.log("Article data: ", outputData);

        // Prepare data to send to the backend
        const dataToSend = {
          userId: userId,
          title: "Your Journal Title", // You might want to dynamically set the title
          content: outputData, // The content from Editor.js
        };

        try {
          // Send a POST request to save the data
          const response = await fetch('/api/saveJournal', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
          });

          if (response.ok) {
            const result = await response.json();
            console.log("Saved journal:", result);
            alert("Journal saved successfully!");
          } else {
            console.error("Failed to save the journal");
            alert("Failed to save the journal.");
          }
        } catch (error) {
          console.error("Error saving journal:", error);
        }
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
