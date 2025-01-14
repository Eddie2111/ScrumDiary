"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/shared/components/ui/dialog'
import { TTodo } from './todos';


interface DetailsModalProps {
  isOpen: boolean
  onClose: () => void
  selectedTodo: TTodo | null
}

export const DetailsModal = ({ isOpen, onClose, selectedTodo }: DetailsModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-gray-800 text-white">
      <DialogHeader>
        <DialogTitle>{selectedTodo?.title}</DialogTitle>
        <DialogDescription>
          <div className="mt-2 space-y-2">
            <p><strong>Status:</strong> {selectedTodo?.status}</p>
            <p><strong>Created:</strong> {selectedTodo?.creationDate}</p>
            <p><strong>Description:</strong> {selectedTodo?.description}</p>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)
