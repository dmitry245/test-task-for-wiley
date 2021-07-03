import { sortBy } from "lodash";
import React from "react";
import s from "./listTask.module.css";

const ListTask = (props) => {
    let tasks = props.tasks;
    let sorted = sortBy(tasks, "header");
    // debugger

    let tasksElements = sorted.map( t => {
        return(
            <div className={s.item} key={t.id}>
                <p className={t.isDone ? s.textIsDone : s.text}>{t.header}</p>
                <input onClick={() => props.setTaskIsDoneOrActive(t.id)} className={s.checkbox} type="checkbox" defaultChecked={t.isDone}/>
                <button onClick={() => props.setTaskRemove(t.id)} type="button">deleteTask</button>
            </div>
        )
    }).reverse();

    

    return (
        <>
            <div className={s.listTaskWrapper}>
                {tasksElements}
            </div>
        </>
    )
};

export default ListTask;