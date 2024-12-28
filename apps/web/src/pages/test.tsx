import { useState } from "react"
import dynamic from "next/dynamic"

import LoadingNavbar from "@/shared/ui/navbar/loading"
import CreateTodo from "@/modules/home/createTodo/createTodoForm"
import TodoCard from "@/modules/home/todoCard/todoCard"

const Navbar = dynamic(() => import("@/shared/ui/navbar/navbar"), {
    ssr: false,
    loading: () => <LoadingNavbar />,
})

type Todo = {
    id: number
    text: string
    completed: boolean
}

export default function Component() {
    const [todos, setTodos] = useState<Todo[]>([])

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    return (
        <div className="bg-background min-h-screen text-foreground">
            <Navbar />
            <main className="mx-auto p-4 container">
                <CreateTodo />
                <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
                    {todos.map((todo, index:number) => (
                        <TodoCard key={index} todo={todo} toggleTodo={toggleTodo}/>
                    ))}
                </div>
            </main>
        </div>
    )
}