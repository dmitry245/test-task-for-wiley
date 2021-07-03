import React from "react";
import { Field } from "redux-form";
import { minlengthCreater, required } from "../../validators/InputFormValidator";
import InputController from "../common/formController/InputController";

const minlength = minlengthCreater(10);

const TaskForm = (props) => {
    // debugger
    return(
        <>
            <form onSubmit={props.handleSubmit}>
                <Field        
                    validate={[required, minlength]}
                    placeholder="Add Task" 
                    component={InputController}
                    name="addTask"
                    type="text"
                />
                <button style={{width: "180px", height: "20px", backgroundColor: "#f7e835"}} type="submit"><p style={{margin: "0"}}>++++</p></button>
            </form>
        </>
    )
};

export default TaskForm;