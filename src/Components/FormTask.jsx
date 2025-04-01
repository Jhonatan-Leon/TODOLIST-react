import { useContext, useState } from "react";
import { Filtre } from "./Filtres";
import { ContextTask } from "../Context/Context";

const miContext = useState(ContextTask);


export const FormTask = () => {
    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-2x1 font:bold mb-4 text-center">To Do List </h1>
            <form onSubmit={addTask} className="mb-4">
                <input 
                type="text"
                placeholder="Title"
                onChange={(e) => setTask({...task, title: e.target.value})}
                className="w-full p-2 border rounded mb-2"/>
    
                <textarea 
                placeholder="Description"
                onChange={(e) => setTask({...task, description:e.target.value})}
                className="w-full p-2 border rounded mb-2"> </textarea>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 roundend hover:bg-blue-600">
                    Add Task
                </button>
                <Filtre />
            </form> 
        </div>
    )

}


