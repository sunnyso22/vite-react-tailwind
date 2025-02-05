import React, { useState } from 'react'

type Todos = {
    id: number,
    title: string,
    done: boolean
}

type Props = {
    todo: Todos,
    onEdit: (todo: Todos) => void,
    onDelete: (id: number) => void
}

const Task = ({ todo, onEdit, onDelete }: Props) => {

    const [isEditing, setIsEditing] = useState<boolean>(false) 

    return (
        <div className="flex flex-1 items-center gap-1">
            {
                isEditing ? 
                (
                    <>
                        <input 
                            value={todo.title}
                            onChange={e => {
                                onEdit({
                                    ...todo,
                                    title: e.target.value
                                })
                            }}
                            className="flex-1 p-1 border border-gray-300 rounded"
                        />
                        <button 
                            onClick={() => setIsEditing(false)}
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                            Save
                        </button>
                    </>
                ) :
                (
                    <>
                        <input
                            className="w-5 h-5"
                            type="checkbox"
                            checked={todo.done}
                            onChange={e => {
                                onEdit({
                                    ...todo,
                                    done: e.target.checked
                                })
                            }}
                        />
                        <span className={`flex-1 ${todo.done ? "line-through text-gray-400" : ""}`}>
                            {todo.title}
                        </span>
                        <button 
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default Task