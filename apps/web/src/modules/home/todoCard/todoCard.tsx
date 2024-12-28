import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

type Todo = {
    id: number
    text: string
    completed: boolean
}

export default function TodoCard({ todo, toggleTodo }: { todo: Todo, toggleTodo: (id: number) => void }) {
    const [todos, setTodos] = useState<Todo[]>([])
    return (
        <Card key={todo.id} className={todo.completed ? "opacity-60" : ""}>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="border-gray-300 rounded focus:ring-primary w-5 h-5"
                    />
                </CardTitle>
            </CardHeader>
        </Card>
    )
}