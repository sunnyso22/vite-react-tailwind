import React, { useState } from 'react'
import DarkModeToggle from "./DarkModeToggle"
import TailwindButton from "./ColorButton"
 
const DarkMode = () => {

    const [dark, setDark] = useState(false)

    const handleDarkMode = () => {
        if (dark) {
            setDark(false)
            document.body.classList.toggle("dark")
        } else {
            setDark(true)
            document.body.classList.toggle("dark")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <DarkModeToggle handleDarkMode={handleDarkMode} dark={dark}/>
            
            <h1 className="text-5xl font-bold dark:text-gray-300 transition-all duration-700">Dark Mode</h1>
            <span className="text-xl text-gray-500 dark:text-gray-400 transition-all duration-700 text-center"> Dark Mode implementation using Tailwindcss！ </span>
            <div className="flex flex-col gap-4">
                <TailwindButton text="Red" color="red" />
                <TailwindButton text="Blue" color="blue" />
            </div>
        </div>
    )
}

export default DarkMode