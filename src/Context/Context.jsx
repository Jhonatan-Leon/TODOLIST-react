
import { useState } from "react";
import { createContext } from "react"

export const CounterContext = createContext();

export const CounterPovider = ({children}) => {
    const [Task, SetTask] = useState({Title: '', Description: ''});

    const [ListTask, SetTaskList] = useState([])

    const AddTask = (e) =>{
        e.preventDefault()
        if(!Task.Title.trim() ||  !Task.Description.trim()) return
    
        const newTask = {
            Id: Date.now(),
            Title: Task.Title,
            Description: Task.Description,
            complete: false
        }

        console.log(newTask)

        SetTaskList([...ListTask, newTask]);
        SetTask({Title: "", Description: ""})

        
    }  

    return (
        <CounterContext.Provider value={{Task , SetTask, ListTask, AddTask}}>
            {children}
        </CounterContext.Provider>
    )
}







