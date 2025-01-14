import Link from 'next/link'

import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'

import CreateBoardModal from "./createNewBoard.modal";
import { TBoard } from './board.type';

const BoardList = ({ boards }: { boards: TBoard[] }) => {
  return (
    <>
      {boards.length === 0 ? (
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-400 mb-4">No boards yet. Create one?</p>
            <CreateBoardModal />
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
                  <Button variant="ghost" className="ml-auto text-purple-600 font-extrabold">
                    View Board
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default BoardList;