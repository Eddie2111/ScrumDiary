'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Textarea } from '@/shared/components/ui/textarea'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/shared/components/ui/alert-dialog"
import { MoreHorizontal, Plus } from 'lucide-react'

type Todo = {
  id: string
  title: string
  status: 'To Do' | 'In Progress' | 'Done'
  creationDate: string
  description: string
}

export default function BoardPage() {
  const params = useParams()
  const boardId = params.id

  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Implement login functionality', status: 'To Do', creationDate: '2023-06-01', description: 'Create a secure login system with email and password authentication.' },
    { id: '2', title: 'Design dashboard layout', status: 'In Progress', creationDate: '2023-06-02', description: 'Create a responsive dashboard layout that displays key metrics and recent activity.' },
    { id: '3', title: 'Write API documentation', status: 'Done', creationDate: '2023-06-03', description: 'Document all API endpoints, request/response formats, and authentication requirements.' },
  ])

  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [newTodo, setNewTodo] = useState<Omit<Todo, 'id' | 'creationDate'>>({
    title: '',
    description: '',
    status: 'To Do'
  })

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo)
    setIsDetailsModalOpen(true)
  }

  const handleEditClick = (todo: Todo) => {
    setSelectedTodo(todo)
    setIsEditModalOpen(true)
  }

  const handleDeleteClick = (todo: Todo) => {
    setSelectedTodo(todo)
    setIsDeleteDialogOpen(true)
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedTodo) {
      setTodos(todos.map(todo => todo.id === selectedTodo.id ? selectedTodo : todo))
      setIsEditModalOpen(false)
    }
  }

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const createdTodo: Todo = {
      ...newTodo,
      id: (todos.length + 1).toString(),
      creationDate: new Date().toISOString().split('T')[0]
    }
    setTodos([...todos, createdTodo])
    setIsCreateModalOpen(false)
    setNewTodo({ title: '', description: '', status: 'To Do' })
  }

  const handleDeleteConfirm = () => {
    if (selectedTodo) {
      setTodos(todos.filter(todo => todo.id !== selectedTodo.id))
      setIsDeleteDialogOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Board: {boardId}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Todos</h2>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Todo
          </Button>
        </div>

        <div className="space-y-4">
          {todos.map((todo) => (
            <Card key={todo.id} className="bg-gray-800 hover:bg-gray-750 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex-grow cursor-pointer" onClick={() => handleTodoClick(todo)}>
                  <h3 className="text-lg font-semibold text-purple-400">{todo.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{todo.status}</span>
                    <span>{todo.creationDate}</span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-700 text-white border-gray-600">
                    <DropdownMenuItem onSelect={() => handleEditClick(todo)} className="cursor-pointer">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleDeleteClick(todo)} className="cursor-pointer text-red-400">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
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

        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Edit Todo</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleEditSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="edit-title"
                    value={selectedTodo?.title}
                    onChange={(e) => setSelectedTodo(prev => prev ? {...prev, title: e.target.value} : null)}
                    className="col-span-3 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-status" className="text-right">
                    Status
                  </Label>
                  <select
                    id="edit-status"
                    value={selectedTodo?.status}
                    onChange={(e) => setSelectedTodo(prev => prev ? {...prev, status: e.target.value as Todo['status']} : null)}
                    className="col-span-3 bg-gray-700 border-gray-600 text-white rounded-md"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="edit-description"
                    value={selectedTodo?.description}
                    onChange={(e) => setSelectedTodo(prev => prev ? {...prev, description: e.target.value} : null)}
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

        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Create New Todo</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="create-title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="create-title"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                    className="col-span-3 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="create-status" className="text-right">
                    Status
                  </Label>
                  <select
                    id="create-status"
                    value={newTodo.status}
                    onChange={(e) => setNewTodo({...newTodo, status: e.target.value as Todo['status']})}
                    className="col-span-3 bg-gray-700 border-gray-600 text-white rounded-md"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="create-description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="create-description"
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
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

        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent className="bg-gray-800 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to delete this todo?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the todo.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main>
    </div>
  )
}

