import React from "react"
import Task from "./Task"

type Todos = {
    id: number,
    title: string,
    done: boolean
}

type Props = {
    todos: Todos[],
    onEditTodo: (todos: Todos) => void,
    onDeleteTodo: (id: number) => void
}

const TaskList = ({ todos, onEditTodo, onDeleteTodo }: Props) => {
    return (
        <ul className="space-y-3">
            {todos.map(todo => (
                <li 
                    key={todo.id}
                    className="flex items-center justify-between p-2 bg-white rounded shadow"    
                >
                    <Task
                        todo={todo}
                        onEdit={onEditTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TaskList