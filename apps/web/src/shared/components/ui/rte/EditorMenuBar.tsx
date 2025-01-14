"use client";
import type { Editor } from "@tiptap/react";
import { Bold, Italic, Strikethrough, Code, UnfoldHorizontal, List, ListOrdered, MessageSquareQuote, Terminal, Undo, Redo} from 'lucide-react';
import { LoadingSpinner } from "../loadingSpinner";

const EditorMenuBar = ({ editor }: { editor: Editor | null}) => {
  const baseButtonStyle = "px-2 py-1 rounded-md shadow-md hover:bg-purple-200 active:bg-blue-500 hover:text-black rounded-lg transition-colors duration-200"
  const activeButtonStyle = `bg-purple-700 text-white ${baseButtonStyle}`;
  const inactiveButtonStyle = `bg-slate-300 text-black ${baseButtonStyle}`;
    if (!editor) {
      return <LoadingSpinner/>
    }
  
    return (
      <div className="flex flex-row">
        <div className="gap-2 flex">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? activeButtonStyle : inactiveButtonStyle}
          >
            <Bold/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? activeButtonStyle : inactiveButtonStyle}
          >
            <Italic/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? activeButtonStyle : inactiveButtonStyle}
          >
            <Strikethrough/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive('code') ? activeButtonStyle : inactiveButtonStyle}
          >
            <Code/>
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? activeButtonStyle : inactiveButtonStyle}
          >
            Paragraph
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? activeButtonStyle : inactiveButtonStyle}
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? activeButtonStyle : inactiveButtonStyle}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? activeButtonStyle : inactiveButtonStyle}
          >
            H3
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? activeButtonStyle : inactiveButtonStyle}
          >
            H4
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={editor.isActive('heading', { level: 5 }) ? activeButtonStyle : inactiveButtonStyle}
          >
            H5
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={editor.isActive('heading', { level: 6 }) ? activeButtonStyle : inactiveButtonStyle}
          >
            H6
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? activeButtonStyle : inactiveButtonStyle}
          >
            <List/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? activeButtonStyle : inactiveButtonStyle}
          >
            <ListOrdered/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? activeButtonStyle : inactiveButtonStyle}
          >
            <Terminal />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? activeButtonStyle : inactiveButtonStyle}
          >
            <MessageSquareQuote />
          </button>
          <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className={activeButtonStyle}>
            <UnfoldHorizontal />
          </button>
          <button onClick={() => editor.chain().focus().setHardBreak().run()} className={activeButtonStyle}>
            Hard break
          </button>
          <button onClick={() => editor.chain().focus().undo().run()} className={activeButtonStyle}>
            <Undo/>
          </button>
          <button onClick={() => editor.chain().focus().redo().run()} className={activeButtonStyle}>
            <Redo/>
          </button>
        </div>
      </div>
    )
  }

export default EditorMenuBar;