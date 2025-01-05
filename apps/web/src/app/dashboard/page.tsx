'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/ui/dialog'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Plus, Loader2 } from 'lucide-react'

// This is a mock type for our Board
type Board = {
  id: string
  name: string
  tasksCount: number
}

export default function DashboardPage() {
  // In a real app, you'd fetch this data from an API
  const [boards, setBoards] = useState<Board[]>([
    { id: '1', name: 'Project Alpha', tasksCount: 5 },
    { id: '2', name: 'Personal Tasks', tasksCount: 3 },
  ])

  const [newBoardName, setNewBoardName] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateBoard = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsCreating(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newBoard: Board = {
      id: (boards.length + 1).toString(),
      name: newBoardName,
      tasksCount: 0
    }

    setBoards([...boards, newBoard])
    setNewBoardName('')
    setIsCreating(false)
    setIsDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Your Boards</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="mr-2 h-4 w-4" /> New Board
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 text-white">
              <DialogHeader>
                <DialogTitle>Create a New Board</DialogTitle>
                <DialogDescription>
                  Give your new board a name to get started.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateBoard}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newBoardName}
                      onChange={(e) => setNewBoardName(e.target.value)}
                      className="col-span-3 bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isCreating} className="bg-blue-600 hover:bg-blue-700">
                    {isCreating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      'Create Board'
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {boards.length === 0 ? (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="flex flex-col items-center justify-center h-64">
              <p className="text-gray-400 mb-4">No boards yet. Create one?</p>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Create Board
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boards.map((board) => (
              <Link href={`/board/${board.id}`} key={board.id}>
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">{board.name}</CardTitle>
                    <CardDescription className="text-gray-400">{board.tasksCount} tasks</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto">
                      View Board
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

