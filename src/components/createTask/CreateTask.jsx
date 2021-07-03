import React from "react";
import { reduxForm } from "redux-form";
import s from "./createTask.module.css";
import TaskForm from "./TaskForm";

import ListTask from "../listTask/ListTask";

const CreateTask = (props) => {

    // const afterSubmit = (result, dispatch) => {
    //     dispatch(reset('ordersTradesSearchForm'));
    // };

    const TaskFormEditor = reduxForm({form: "TaskForm"})(TaskForm);
    
    const onSendMessageClick = (taskFormData) => {
        let newTaskHeader = taskFormData.addTask;
        props.sendTask(newTaskHeader);
    };

    // useEffect(() => {
    // }, [input])

    // setTaskIsDoneOrActive: setTaskIsDoneActionCreater,
    // setTaskRemove: setTaskRemoveActionCreater

    return (
        <>
            <div className={s.createTaskWrapper}>
                <h2>CreateTask</h2>
                <TaskFormEditor onSubmit={onSendMessageClick}/>
                <div>
                    <ListTask
                        setTaskFaivorits={props.setTaskFaivorits}
                        setTaskIsDoneOrActive={props.setTaskIsDoneOrActive}
                        setTaskRemove={props.setTaskRemove}
                        tasks={props.tasks}
                    />
                </div>
            </div>
            
        </>
    )
};

export default CreateTask;