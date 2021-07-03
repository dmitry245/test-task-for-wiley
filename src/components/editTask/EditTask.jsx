import React, { useState } from "react";
// import { reduxForm } from "redux-form";
// import TaskForm from "../createTask/TaskForm";
import s from "./editTask.module.css";

const  EditTask = (props) => {

    
    const [id, setId] = useState(0);
    const [activeEditor, setstate] = useState(false);

    let tasks = props.tasks;


    const onEdit = (currentId, id) => {
        // setId(currentId);
        debugger
        if(currentId === id){
            setstate(true);
        }
    }

    let tasksElements = tasks.map( o => {
        return(
            <div onChange={() => onEdit(o.id, id)} className={!activeEditor ? s.item : s.itemActive} key={o.id}>
                <p className={o.isDone ? s.textIsDone : s.text}>{o.header}</p>
                {/* <input onClick={() => props.setTaskIsDoneOrActive(t.id)} className={s.checkbox} type="checkbox" defaultChecked={t.isDone}/> */}
                {/* <button onClick={() => props.setTaskRemove(t.id)} type="button">deleteTask</button> */}
            </div>
        )
    });

    return (
        <>
            <div className={s.editTaskWrapper}>
                {tasksElements}
            </div>
        </>
    )
};

export default EditTask;