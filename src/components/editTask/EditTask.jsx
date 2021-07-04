import React, { useState } from "react";
import { reduxForm } from "redux-form";
import s from "./editTask.module.css";
import TaskFormEditor from "./TaskFormEditor";

const  EditTask = (props) => {

    const TaskForm = reduxForm({form: "TaskEditorForm"})(TaskFormEditor);
    
    const [currentId, setId] = useState(null);

    const tasks = props.tasks;

    const onEdit = (id) => currentId !== id ? setId(id) : setId(null);

    const onSendMessageClick = (taskFormData) => {
        let newTaskHeader = taskFormData.EditTask;
        props.setTaskUpdate(currentId, newTaskHeader);
        setId(null);

        console.log(currentId, newTaskHeader);
    };

    const tasksElements = tasks.map( o => {
        return(
            <div  className={s.item} key={o.id}>

                {currentId === o.id 
                    ?null 
                    :<div className={s.el}>
                        <p onClick={() => onEdit(o.id)} className={o.isDone ? s.textIsDone : s.text}>{o.header}</p>
                    </div>
                }

                {currentId === o.id 
                    ?<div className={s.editor}>
                        <TaskForm header={o.header}  onSubmit={onSendMessageClick}/>
                    </div>
                    :null
                }
                
            </div>
        )
    });

    return (
        <div className={s.editTaskWrapper}>
            {tasksElements}
        </div>
    )
};

export default EditTask;