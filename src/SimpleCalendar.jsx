import React, { useState } from 'react'

const SimpleCalendar = () => {

    const weekDays = ['日','一','二','三','四','五','六']
    const [today, setToday] = useState(new Date())
    const [year, setYear] = useState(today.getFullYear())
    const [month, setMonth] = useState(today.getMonth() + 1)

    console.log(today)
    console.log(year)
    console.log(month)

    const handleNextClick = () => {
        if (month === 12) {
            setMonth(1)
            setYear(year+1)
        } else {
            setMonth(month+1)
        }
    }

    const handlePreviousClick = () => {
        if (month === 1) {
            setMonth(12)
            setYear(year-1)
        } else {
            setMonth(month-1)
        }
    }

    const getThisMonth = () => {
        const days = []

        const current = new Date(year, month, 0)

        for (let i = 1; i <= current.getDate(); i++) {

            const todayClass = (year===today.getFullYear() && month-1===today.getMonth() && i===today.getDate()) ?
            "bg-blue-600 text-white font-bold" : "hover:bg-gray-200"
            
            days.push(
                <div 
                    key={i} 
                    className={`${todayClass} w-10 h-10 text-sm flex justify-center items-center rounded-full transition-all `}
                >
                    {i}
                </div>
            )
        }

        return days
    }

    const getLastMonth = () => {
        const days = []

        const current = new Date(year, month-1, 1)
        const wd = current.getDay()

        for(let i = wd; i > 0; i--) {
            const temp = new Date(current)
            temp.setDate(current.getDate()-i)
            days.push(
                <div key={i} className="w-10 h-10 text-sm flex justify-center items-center text-gray-400 rounded-full transition-all">
                    {temp.getDate()}
                </div>
            )
        }

        return days
    }

    const getNextMonth = () => {
        const count = 42 - getLastMonth().length - getThisMonth().length

        const days = []

        for(let i = 1; i <= count; i++) {
            days.push(
                <div key={i} className="w-10 h-10 text-sm flex justify-center items-center text-gray-400 rounded-full transition-all">
                    {i}
                </div>
            )
        }

        return days
    }

    return (
        <div className="border flex flex-col rounded-md overflow-hidden">
            <div className="flex gap-6 justify-center items-center p-3 border-b bg-blue-600 text-white font-bold">
                <span className="hover:bg-blue-500 rounded-md" onClick={handlePreviousClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span>
                    {year} 年 {month} 月
                </span>
                <span className="hover:bg-blue-500 rounded-md" onClick={handleNextClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </div>
            <div className="dark:bg-gray-500 bg-gray-100">
                <div className="grid grid-cols-7 place-items-center">
                    {
                        weekDays.map(day => (
                            <div className="">
                                {day}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-7 place-items-center">
                    {getLastMonth()}
                    {getThisMonth()}
                    {getNextMonth()}
                </div>
            </div>
        </div>
    )
}

export default SimpleCalendar