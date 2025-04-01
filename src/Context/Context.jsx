import { useContext } from "react";
import { useState } from "react";

export const ContextTask = () => {
    const   [Task, SetTask] = useState ({title: '', description: ''})

    const [LisTask, SetListTasks] = useState([]) 
}

export  const addTask = (e) =>{
    e.preventdefault()
    if(!Task.title.trim() ||  !Task.description.trim()) return

    const newTask = {
        Id: Date.now(),
        title: Task.title,
        description: Task.description,
        complete: false
    }

    SetListTasks({...LisTask, newTask})
    SetTask({title: '', description: ''})

}   



