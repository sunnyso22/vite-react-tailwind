import React, { useState } from 'react'
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

type Todos = {
    id: number,
    title: string,
    done: boolean
}[]

let nextId: number = 0
  
const page = () => {

    const [todos, setTodos] = useState<Todos>([])

    const handleAddTodo = (title: string) => {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    const handleDeleteTodo = (todoId: number) => {
        setTodos(todos.filter(t => t.id !== todoId))
    }

    const handleEditTodo = (nextTodo) => {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) 
                return nextTodo
            else 
                return t
        }))
    }

    return (
        <div className="max-w-md mx-auto mt-5 p-5 bg-gray-100 rounded shadow">
            <h1 className="text-xl font-bold text-center mb-5">Tailwind To-Do List</h1>
            <div className="flex gap-2 mb-4">
                <AddTodo
                    onAddTodo={handleAddTodo}
                />
            </div>
            <TaskList
                todos={todos}
                onEditTodo={handleEditTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    )

}

export default page