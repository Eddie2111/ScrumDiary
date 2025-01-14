"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/shared/components/ui/alert-dialog'

interface DeleteAlertProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const DeleteAlert = ({ isOpen, onClose, onConfirm }: DeleteAlertProps) => (
  <AlertDialog open={isOpen} onOpenChange={onClose}>
    <AlertDialogContent className="bg-gray-800 text-white">
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to delete this todo?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the todo.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
