import React, { useState } from 'react'
import ProgressBar from "./ProgressBar"

const Range = () => {

    const [barValue, setBarValue] = useState({
        current: 0,
        min: 0,
        max: 100,
    })

    const handleChange = (e) => {
        setBarValue({
            ...barValue,
            current: e.target.value,
        })
    }

    return (
        <>
            <input type="range" 
                onChange={handleChange}
                value={barValue.current}
                min={barValue.min} 
                max={barValue.max}
            />
            <ProgressBar 
                current={barValue.current} 
                min={barValue.min} 
                max={barValue.max}
            />
        </>
    )
}

export default Range