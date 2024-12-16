import React from 'react'

const ColorButton = ({text, color, handleClick}) => {

    const bgColor = {
        gray: "bg-gray-400 hover:bg-gray-300 active:bg-gray-500 dark:bg-gray-500",
        red: "bg-red-400 hover:bg-red-300 active:bg-red-500 dark:bg-red-500 ",
        orange: "bg-orange-400 hover:bg-orange-300 active:bg-orange-500 dark:bg-orange-500 ",
        yellow: "bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 dark:bg-yellow-500",
        green: "bg-green-400 hover:bg-green-300 active:bg-green-500 dark:bg-green-500",
        blue: "bg-blue-400 hover:bg-blue-300 active:bg-blue-500 dark:bg-blue-500",
        purple: "bg-purple-400 hover:bg-purple-300 active:bg-purple-500 dark:bg-purple-500",
        pink: "bg-pink-400 hover:bg-pink-300 active:bg-pink-500 dark:bg-pink-500",
    }

    return (
        <div
            className={`text-white px-6 py-3 rounded-md font-bold ${bgColor[color]} hover:scale-105 active:scale-95 transition-all`}
            onClick={handleClick}
        >
            {text}
        </div>
    )
}

export default ColorButton