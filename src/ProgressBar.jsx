import React from 'react'

const ProgressBar = ({ current, min, max }) => {

    const percent = current <= min ? 
        0 : (current - min)*100/(max - min)

    return (
        <div className="bg-gray-200 w-80 p-5 rounded-lg flex flex-col justify-center items-center gap-3">
            已下載 { percent } %
            <div className="bg-green-800 w-full h-2 rounded-full">
                <div 
                    className="bg-green-500 w-1/3 h-full rounded-full" 
                    style={{width: `${percent}%`}}
                />
            </div>
        </div>
    )
}

export default ProgressBar