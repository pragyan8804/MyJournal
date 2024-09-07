'use client';

import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';

const Editor = () => {
  const editorRef = useRef<EditorJS>();

  useEffect(() => {
    const initializeEditor = async () => {
      if (!editorRef.current) {
        editorRef.current = new EditorJS({
          holder: 'editorjs',
          placeholder: 'Type here to write your story...',
          tools: { 
            header: {
                class: Header,
                shortcut: 'CMD+SHIFT+H',
                inlineToolbar: ['link'], 
                config: {
                    placeholder: 'Enter a header',
                    levels: [1, 2, 3, 4, 5, 6],
                    defaultLevel: 3,
                }
            },
            list: {
                class: List,
                shortcut: 'CMD+SHIFT+L',
                inlineToolbar: true,
                config: {
                    defaultStyle: 'unordered'
                }
         },
            quote: {
                class: Quote,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+O',
                config: {
                    quotePlaceholder: 'Enter a quote',
                    captionPlaceholder: 'Quote\'s author',
                },
            },
        },
        });
      }
    };

    initializeEditor();

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
        const destroyEditor : any = editorRef.current.destroy();
        if (destroyEditor instanceof Promise) {
          destroyEditor.catch((err) => console.error('Error destroying editor:', err));
        }
        editorRef.current = undefined;
      }
    };
  }, []);

  return <div id="editorjs" />;
};

export default Editor;
