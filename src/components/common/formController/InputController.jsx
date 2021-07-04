import React from "react";
import s from "./inputController.module.css";

const InputController = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const textError = meta.error;

    return(
        <div>
            <input className={hasError ? s.input : null} {...input} {...props} />
            {hasError 
                ? <div className={s.error}><p>{textError}</p></div>
                :null
            }
        </div>
    )
};

export default InputController;