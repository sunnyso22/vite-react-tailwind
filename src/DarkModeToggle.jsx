import React from 'react'

const DarkModeToggle = ({handleDarkMode, dark}) => {

    return (
        <label className="cursor-pointer">
            <input type="checkbox" onClick={handleDarkMode} className="sr-only peer" />
            <div className="peer-checked:border-gray-600 peer-checked:bg-blue-900 box-content rounded-full w-48 h-24 border-4 bg-yellow-400 transition-all duration-500 group">
                <div className="h-full w-1/2 scale-75 rounded-full bg-white/75 peer-checked:group-[]:translate-x-full transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 peer-checked:group-[]:text-white ransition-all duration-0" viewBox="0 0 20 20" fill="currentColor">
                        <path className="peer-checked:group-[]:opacity-0 transition-all" fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        <path className="opacity-0 peer-checked:group-[]:opacity-100 transition-all" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </div>
            </div>
        </label>
    )
}

export default DarkModeToggle