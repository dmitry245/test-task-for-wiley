import React from "react";
import { Field } from "redux-form";
import { minlengthCreater, required } from "../../validators/InputFormValidator.js";
import InputController from "../common/formController/InputController";

const minlength = minlengthCreater(10);

const TaskFormEditor = (props) => {
    console.log(props);
    return(
        <form onSubmit={props.handleSubmit}>
            <Field    
                validate={[required, minlength]}
                placeholder={props.header}
                component={InputController}
                name="EditTask"
                type="text"
            />
            <button style={{width: "180px", height: "20px", backgroundColor: "#f7e835"}} type="submit"><p style={{margin: "0"}}>Ok</p></button>
        </form>
    )
};

export default TaskFormEditor;