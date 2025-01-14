"use client"

import { useState } from "react"
import { DetailsModal } from "./_components/DetailsModal"
import { EditModal } from "./_components/EditModal"
import { CreateModal } from "./_components/CreateModal"
import { DeleteAlert } from "./_components/DeleteAlert"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent } from "@/shared/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import { MoreHorizontal, Plus } from "lucide-react"
import { TTodo } from "./_components/todos"

const initialTodos: TTodo[] = [
  {
    id: 1,
    title: "First Task",
    status: "To Do",
    description: "This is the first task.",
    creationDate: "2025-01-01",
  },
  {
    id: 2,
    title: "Second Task",
    status: "In Progress",
    description: "This is the second task.",
    creationDate: "2025-01-02",
  },
]

export default function Board() {
  const [todos, setTodos] = useState<TTodo[]>(initialTodos)
  const [selectedTodo, setSelectedTodo] = useState<TTodo | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [newTodo, setNewTodo] = useState<Omit<TTodo, "id" | "creationDate">>({
    title: "",
    status: "To Do",
    description: "",
  })

  const handleCreateTodo = () => {
    const todoToAdd: TTodo = {
      ...newTodo,
      id: todos.length + 1,
      creationDate: new Date().toISOString().split("T")[0],
    }
    setTodos((prev) => [...prev, todoToAdd])
    setNewTodo({ title: "", status: "To Do", description: "" })
    setIsCreateOpen(false)
  }

  const handleEditTodo = (updatedTodo: TTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    )
    setIsEditOpen(false)
  }

  const handleDeleteTodo = () => {
    if (selectedTodo) {
      setTodos((prev) => prev.filter((todo) => todo.id !== selectedTodo.id))
      setSelectedTodo(null)
    }
    setIsDeleteOpen(false)
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Board</h1>
        <Button
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => setIsCreateOpen(true)}
        >
          <Plus className=" h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="space-y-4">
        {todos.map((todo) => (
          <Card key={todo.id} className="bg-gray-800 hover:bg-gray-750">
            <CardContent className="p-4 flex items-center justify-between">
              <div
                className="flex-grow cursor-pointer"
                onClick={() => {
                  setSelectedTodo(todo)
                  setIsDetailsOpen(true)
                }}
              >
                <h3 className="text-lg font-semibold text-white">{todo.title}</h3>
                <div className="text-sm text-gray-400">
                  <span>{todo.status}</span> | <span>{todo.creationDate}</span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-gray-700 text-white border-gray-600"
                >
                  <DropdownMenuItem
                    onSelect={() => {
                      setSelectedTodo(todo)
                      setIsEditOpen(true)
                    }}
                    className="cursor-pointer"
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      setSelectedTodo(todo)
                      setIsDeleteOpen(true)
                    }}
                    className="cursor-pointer text-red-400"
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        ))}
      </div>

      <DetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        selectedTodo={selectedTodo}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        selectedTodo={selectedTodo}
        onSubmit={handleEditTodo}
      />

      <CreateModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        onSubmit={handleCreateTodo}
      />

      <DeleteAlert
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteTodo}
      />
    </div>
  )
}
