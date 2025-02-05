import React, { useState } from 'react'

type Props = {
    onAddTodo: (title: string) => void
}

const AddTodo = ({ onAddTodo }: Props) => {

    const [title, setTitle] = useState<string>("")

    return (
        <>
            <input 
                className="flex-1 p-2 border border-gray-300 rounded"
                placeholder="Add a new task..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={
                    () => {
                        if (title.trim() === "") return;
                        setTitle("")
                        onAddTodo(title)
                    }
                }
            >
                Add
            </button>
        </>
    )
}

export default AddTodo