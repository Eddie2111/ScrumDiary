"use client";
import { FloatingMenu, BubbleMenu, EditorContent } from '@tiptap/react'

import EditorMenuBar from './EditorMenuBar';
import { useEditorHooks } from './EditorHook';


const Tiptap = () => {
  const { editor } = useEditorHooks();
  return (
    <div className="border-2 m-4">
      <EditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
      <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </div>
  )
}

export default Tiptap