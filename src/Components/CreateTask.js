import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateTask() {
    const [taskName, setTaskName] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [taskDate, setTaskDate] = useState(new Date())
    const [taskData, setTaskData] = useState([])



    const handleDate = (e) => {
        setTaskDate(e.target.value)
    }

    const handleData = () => {
        setTaskData([...taskData, { tkName: taskName, tkDesc: taskDesc, tkDate: taskDate }])

    }

    console.table(taskData)



    return (
        <div class="flex justify-center m-10">
            <div class="flex-col">
                <div class="mb-8">
                    <label class="font-bold mr-16">Task Name: </label>
                    <input class="px-4 py-1 rounded-full border-2 border-indigo-600 focus:outline-none" type="text" onChange={e => setTaskName(e.target.value)}></input>
                </div>

                <div class="flex justify-between mb-8">
                    <div class="mt-7">
                        <label class="font-bold mr-7">Task Description: </label>
                    </div>
                    <div>
                        <textarea class="px-4 py-1 w-72  border-2 border-indigo-600 focus:outline-none" onChange={e => setTaskDesc(e.target.value)}></textarea>
                    </div>
                </div>

                <div>
                    <div class="flex justify-start">
                        <div class="mt-2">
                            <label class="font-bold mr-20 ">Task Date: </label>
                        </div>

                        <div class="">
                            <input class="px-4 py-1 rounded-full border-2 border-indigo-600 focus:outline-none" type="date" onChange={e => handleDate(e)}></input>
                        </div>

                    </div>
                </div>

                <div class="mt-10 flex justify-center">
                    <button class="bg-pink-400 active:bg-pink-700 rounded-full border-2  w-auto h-auto px-4 py-2 hover:text-white" onClick={() => handleData()}>Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default CreateTask
