import CreateBoardModal from './_components/createNewBoard.modal'
import BoardList from './_components/boardList'

export default function DashboardPage() {
  const boards = [
    { id: '1', name: 'Project Alpha', tasksCount: 5 },
    { id: '2', name: 'Personal Tasks', tasksCount: 3 },
  ];
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
          <CreateBoardModal  />
        </div>

        <BoardList boards={boards}/>
      </main>
    </div>
  )
}

