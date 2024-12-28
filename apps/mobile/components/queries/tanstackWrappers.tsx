import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Query from './query';
import { ITodo } from './types';

export const useTodos = () => {
    return useQuery(['todos'], () => Query.getTodos(), {
        staleTime: 5000,
    });
};

export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation((newTodo: ITodo) => Query.createTodo(newTodo), {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        },
        onError: (error) => {
            console.error('Error creating todo:', error);
        },
    });
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(({ id, data }: { id: number; data: ITodo }) => Query.updateTodo(id, data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        },
        onError: (error) => {
            console.error('Error updating todo:', error);
        },
    });
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation((id: number) => Query.deleteTodo(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        },
        onError: (error) => {
            console.error('Error deleting todo:', error);
        },
    });
};


// example
/*
import React from 'react';
import { useTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from './hooks'; // Adjust the path accordingly
import { ITodo } from './types';

const TodoList = () => {
    const { data: todos, isLoading, error } = useTodos();
    const createTodo = useCreateTodo();
    const updateTodo = useUpdateTodo();
    const deleteTodo = useDeleteTodo();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    const handleAddTodo = () => {
        createTodo.mutate({ text: 'New Todo' });
    };

    const handleUpdateTodo = (id: number) => {
        updateTodo.mutate({ id, data: { text: 'Updated Todo' } });
    };

    const handleDeleteTodo = (id: number) => {
        deleteTodo.mutate(id);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos?.data.map((todo: ITodo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
*/