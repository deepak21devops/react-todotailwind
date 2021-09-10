import React, { useState } from 'react'
import CreateTask from './CreateTask'

function AllTask() {

    const [TaskFlag, setTaskFlag] = useState(true)
    const [createTaskFlag, setCreateTaskFlag] = useState(false)
    const handlerClick = () => {
        setTaskFlag(false)
        setCreateTaskFlag(true)
    }
    return (
        <div>
            {TaskFlag && <div class="m-5 px-5 pb-10 flex justify-center items-center mt-10">
                <h1 class="mr-10 text-2xl font-bold ">CREATE TASK</h1>
                <button onClick={handlerClick} class="bg-green-500 active:bg-green-700  w-auto h-auto px-4 py-2 hover:text-white ">CREATE</button>
            </div>}


            {
                createTaskFlag && <div>
                    <CreateTask />
                </div>
            }
        </div>
    )
}

export default AllTask
