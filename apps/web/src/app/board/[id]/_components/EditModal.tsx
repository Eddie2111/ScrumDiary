"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/shared/components/ui/dialog'
import { Label } from '@/shared/components/ui/label'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { Button } from '@/shared/components/ui/button'
import { TTodo } from './todos';


interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  selectedTodo: TTodo | null
  onSubmit: (updatedTodo: TTodo) => void
}

export const EditModal = ({ isOpen, onClose, selectedTodo, onSubmit }: EditModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedTodo) onSubmit(selectedTodo)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-title" className="text-right">Title</Label>
              <Input
                id="edit-title"
                value={selectedTodo?.title || ''}
                onChange={(e) => selectedTodo && (selectedTodo.title = e.target.value)}
                className="col-span-3 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-status" className="text-right">Status</Label>
              <select
                id="edit-status"
                value={selectedTodo?.status || ''}
                onChange={(e) => selectedTodo && (selectedTodo.status = e.target.value as TTodo['status'])}
                className="col-span-3 bg-gray-700 border-gray-600 text-white rounded-md"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-description" className="text-right">Description</Label>
              <Textarea
                id="edit-description"
                value={selectedTodo?.description || ''}
                onChange={(e) => selectedTodo && (selectedTodo.description = e.target.value)}
                className="col-span-3 bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
