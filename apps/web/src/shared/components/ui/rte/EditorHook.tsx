"use client";
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const extensions = [StarterKit]

export const useEditorHooks = () => {
    const editor = useEditor({
        extensions,
        immediatelyRender: true,
        shouldRerenderOnTransaction: false,
        editorProps: {
          attributes: {
            spellcheck: 'false',
          },
        },
      })
      // this is where we get the contents
      // console.log( editor?.getJSON() )
    return {
        editor
    }
}
