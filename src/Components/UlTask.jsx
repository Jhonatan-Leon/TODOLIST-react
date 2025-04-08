import { useContext, useState } from "react"
import { Task } from "./Task"
import { CounterContext } from "../Context/Context"

export const UlTask = () => {
    const {ListTask} = useContext(CounterContext)

    return(
        <ul className="mt-5">
            {ListTask.map((task) => (
                <Task key={task.Id} id={task.Id} Title={task.Title} description={task.Description} />
            ))}
        </ul>
    )
}