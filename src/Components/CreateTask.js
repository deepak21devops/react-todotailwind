import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Home from './Home'
function CreateTask({ TaskFlag, setTaskFlag, createTaskFlag, setCreateTaskFlag }) {

    const taskContext = React.createContext()

    const [taskName, setTaskName] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [taskDate, setTaskDate] = useState(new Date())
    const [taskData, setTaskData] = useState([])

    const [errTaskName, setErrTaskName] = useState(false)
    const [errTaskDesc, setErrTaskDesc] = useState(false)
    const [notify, setNotify] = useState('')



    const handleDate = (e) => {
        setTaskDate(e.target.value)
    }



    const handleData = (e) => {
        if ((taskName !== "") && (taskDesc !== "")) {
            setTaskData([...taskData, { tkName: taskName, tkDesc: taskDesc, tkDate: taskDate }])
            setNotify(<h1 class="mb-5 p-2 h-10 w-auto  text-center bg-green-300">Task has been Created Successfully!!!</h1>)

            setTimeout(() => {

                setNotify("")
                setTaskFlag(true)
                setCreateTaskFlag(false)

            }, 2000)

            setTaskName("")
            setTaskDesc("")
            setTaskDate("")




        }
        else {
            if (taskName === "") {
                setErrTaskName(true)
                setTimeout(() => {
                    setErrTaskName(false)
                }, 4000)


            }
            if (taskDesc === "") {
                setErrTaskDesc(true)
                setTimeout(() => {
                    setErrTaskDesc(false)
                }, 4000)

            }


        }
        e.preventDefault()



    }
    return (
        <div class="flex justify-center m-10">
            <div class="flex-col">
                <div class="mb-8">
                    {notify}
                    <label class="font-bold mr-16">Task Name: </label>
                    <input
                        class={errTaskName ? "px-4 py-1 rounded-full border-2 border-red-800 focus:outline-none" :
                            "px-4 py-1 rounded-full border-2 border-indigo-600 focus:outline-none"} placeholder={errTaskName ? 'Please Enter Task Name' : ""} type="text"
                        value={taskName}
                        onChange={e => setTaskName(e.target.value)}></input>
                </div>

                <div class="flex justify-between mb-8">
                    <div class="mt-7">
                        <label class="font-bold mr-7">Task Description: </label>
                    </div>
                    <div>
                        <textarea
                            class={errTaskDesc ? "px-4 py-1 w-72  border-2 border-red-700 focus:outline-none" : "px-4 py-1 w-72  border-2 border-indigo-600 focus:outline-none"}
                            value={taskDesc}
                            placeholder={errTaskDesc ? 'Please Enter Task Description' : ""}
                            onChange={e => setTaskDesc(e.target.value)}></textarea>
                    </div>
                </div>

                <div>
                    <div class="flex justify-start">
                        <div class="mt-2">
                            <label class="font-bold mr-20 ">Task Date: </label>
                        </div>

                        <div class="">
                            <input class="px-4 py-1 rounded-full border-2 border-indigo-600 focus:outline-none"
                                type="date"
                                value={taskDate}
                                onChange={e => handleDate(e)}></input>
                        </div>

                    </div>
                </div>

                <div class="mt-10 flex justify-center">
                    <button class="bg-pink-400 active:bg-pink-700 rounded-full border-2  w-auto h-auto px-4 py-2 hover:text-white" onClick={(e) => handleData(e)}>Add Task</button>
                </div>
            </div>

        </div>

    )


}



export default CreateTask
