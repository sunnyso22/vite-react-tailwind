import React from 'react'

const Modal = ({title, component, show, handleClick}) => {
    
    return (

        <div className={`flex fixed top-0 left-0 w-screen h-screen justify-center items-center transition-all ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {/* Modal Overlay */}
            <div 
                onClick={handleClick}
                className="absolute top-0 left-0 w-full h-full bg-black/50"
            />
            {/* Modal Window */}
            <div className={`w-full max-w-xl bg-white rounded-md overflow-hidden z-10 transition-all ${show ? "scale-100" : "scale-0"}`}>
                <div className="border-b-2 p-3 flex justify-between items-center">
                    <div className="font-bold text-gray-700">
                        {title}
                    </div>
                    <div 
                        onClick={handleClick}
                        className="h-7 w-7 p-1 hover:bg-gray-200 active:scale-90 rounded-md cursor-pointer transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div className="dark:bg-gray-900 p-8">
                    {component}
                </div>
            </div>
        </div>

    )
}

export default Modal