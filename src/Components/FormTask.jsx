import { useContext } from "react";
import { Filtre } from "./Filtres";
import { CounterContext } from "../Context/Context";

export const FormTask = () => {
    const { Task, SetTask, AddTask } = useContext(CounterContext);
    

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-2x1 font:bold mb-4 text-center">To Do List </h1>
            <form onSubmit = {AddTask} className="mb-4">
                <input 
                type="text"
                onChange={(e) => SetTask({...Task, Title: e.target.value})}
                placeholder="Title"
                className="w-full p-2 border rounded mb-2"
                />
    
                <textarea type="text" onChange={(e) => SetTask({...Task, Description:e.target.value})}
                placeholder="Description"
                className="w-full p-2 border rounded mb-2" />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 roundend hover:bg-blue-600">
                    Add Task
                </button>
                <Filtre />
            </form> 
        </div>
    )
}


