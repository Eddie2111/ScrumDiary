import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

import { todoSchema } from "@/utils/schema/todo.schema";

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
};

export default function CreateTodo() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(todoSchema),
        defaultValues: { todo: "" },
    });
    
    const onSubmit = async (data: { todo: string }) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
            <div className="flex space-x-2">
                <Controller
                    name="todo"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            placeholder="Add a new task..."
                            {...field}
                            className={`flex-grow ${errors.todo ? "border-red-500" : ""}`}
                        />
                    )}
                />
                {errors.todo && <span className="text-red-500">{errors.todo.message}</span>}
                <Button type="submit">
                    <Plus className="mr-2 w-4 h-4" /> Add
                </Button>
            </div>
        </form>
    );
}
