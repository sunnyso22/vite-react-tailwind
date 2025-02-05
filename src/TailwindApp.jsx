import React, { useState } from 'react'
import DarkMode from "./DarkMode"
import Modal from "./Modal"
import ColorButton from "./ColorButton"
import SimpleCalendar from "./SimpleCalendar"
import Range from "./Range"
import TodoApp from "./TodoApp"



const TailwindApp = () => {

    const itemList = [
        {
            component: <SimpleCalendar />,
            text: "Simple Calendar",
            color: "red"
        },
        {
            component: <Range />,
            text: "Progress Bar",
            color: "green"
        },
        {
            component: <DarkMode />,
            text: "Dark Mode",
            color: "blue"
        },
        {
            component: <TodoApp />,
            text: "To-do List",
            color: "yellow"
        },
    ]

    const [show, setShow] = useState(false)
    const [openedItem, setOpenedItem] = useState()
    const [itemTitle, setItemTitle] = useState()

    const handleClick = (c, t) => {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
            setOpenedItem(c)
            setItemTitle(t)
        }
    }

    return (
        <div className="dark:bg-gray-900 w-screen h-screen">
            <h1 className="border border-t-0 border-l-0 border-r-0 border-b-2 text-5xl dark:text-gray-400 text-center font-bold p-10">Tailwind CSS Practice</h1>
            <div className="grid grid-cols-4 gap-8 p-10">
                {
                    itemList.map(
                        (item) => 
                            (
                                <ColorButton 
                                    text={item.text} 
                                    color={item.color}
                                    handleClick={() => {handleClick(item.component, item.text)}}
                                />
                            )
                    )
                }
                {
                    <Modal 
                        title={itemTitle}
                        component={openedItem} 
                        show={show} 
                        handleClick={handleClick} 
                    />
                }
            </div>
        </div>
    )
}
                            

export default TailwindApp