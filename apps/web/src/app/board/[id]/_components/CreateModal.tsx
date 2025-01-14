"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/shared/components/ui/dialog'
import { Label } from '@/shared/components/ui/label'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { Button } from '@/shared/components/ui/button'
import { TTodo } from './todos';


interface CreateModalProps {
  isOpen: boolean
  onClose: () => void
  newTodo: Omit<TTodo, 'id' | 'creationDate'>
  setNewTodo: (todo: Omit<TTodo, 'id' | 'creationDate'>) => void
  onSubmit: () => void
}

export const CreateModal = ({ isOpen, onClose, newTodo, setNewTodo, onSubmit }: CreateModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-gray-800 text-white">
      <DialogHeader>
        <DialogTitle>Create New Todo</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="create-title" className="text-right">Title</Label>
            <Input
              id="create-title"
              value={newTodo.title}
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
              className="col-span-3 bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="create-status" className="text-right">Status</Label>
            <select
              id="create-status"
              value={newTodo.status}
              onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value as TTodo['status'] })}
              className="col-span-3 bg-gray-700 border-gray-600 text-white rounded-md"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="create-description" className="text-right">Description</Label>
            <Textarea
              id="create-description"
              value={newTodo.description}
              onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
              className="col-span-3 bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Create Todo</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
)
