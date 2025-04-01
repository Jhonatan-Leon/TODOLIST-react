import { useState } from "react";

export const CreateTask = () => {
    const   [task, setTask] = useState ({title: '', description: ''})

    const [lisTask, setlistTasks] = useState({})


const addTask = (e) =>{

}

return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-2x1 font:bold mb-4 text-center">To Do List </h1>
        <form onSubmit={addTask} className="mb-4">
            <input 
            type="text"
            placeholder="Title"
            value={task.title}
            onChange={(e) => setTask({...task, title: e.target.value})}
            className="w-full p-2 border rounded mb-2"/>

            <textarea 
            placeholder="Description"
            value={task.description}
            onChange={(e) => setTask({...task, description:e.target.value})}
            className="w-full p-2 border rounded mb-2"> </textarea>
            <button className="w-full bg-blue-500 text-white py-2 roundend hover:bg-blue-600">
                Add Task
            </button>
            <div className="w-full flex justify-between items-center mt-4 ">
                <button className="w-[50px] p-2 border rounded mb-2 hover:bg-black hover:text-white"> All </button>
                <button className="w-[75px] p-2 border rounded mb-2 hover:bg-black hover:text-white"> Pending </button>
                <button className="w-[95px] p-2 border rounded mb-2 hover:bg-black hover:text-white"> Completed </button>
            </div>
        </form> 
    </div>
)

}