import { uniqueId, isNil } from "lodash";
import { load } from "redux-localstorage-simple";

const SEND_TASK = "SEND-TASK";
const SET_TASK_IS_DONE = "SET-TASK-IS-DONE";
const SET_TASK_REMOVE = "SET-TASK-REMOVE";
const SET_TASK_UPDATE = "SET-TASK-UPDATE";

const todoStorage = load({namespace: "todo"});

const initState = {
    tasksData: !isNil(todoStorage.taskPage) ? todoStorage.taskPage.tasksData : []
};

const CreateTaskReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_TASK: {

            let newTask = {id: uniqueId(), header: action.newHeaderText, isDone: false};

            return{
                ...state,
                tasksData: [...state.tasksData, newTask]
            }
        }
        case SET_TASK_IS_DONE: {
            return{
                ...state,
                tasksData: state.tasksData.map( o => {
                    if(o.id === action.curentTaskId){
                        return({
                            ...o,
                            isDone: !o.isDone
                        })
                    }
                    return o;
                })
            }
        }
        case SET_TASK_REMOVE: {
            return{
                ...state,
                tasksData: state.tasksData.filter(o => o.id !== action.curentTaskId)
            }
        }
        case SET_TASK_UPDATE: {
            return{
                ...state,
                tasksData: state.tasksData.map(o => {
                    if(o.id === action.curentTaskId){
                        return{
                            ...o,
                            header: action.newHeaderText
                        }
                    }
                    return o;
                })
            }
        }
        default: {
            return state;
        }
    }
};

export const sendTaskActionCreater = (newHeaderText) => {
    return {type: SEND_TASK, newHeaderText};
};

export const setTaskIsDoneActionCreater = (curentTaskId) => {
    return {type: SET_TASK_IS_DONE, curentTaskId}
};

export const setTaskRemoveActionCreater = (curentTaskId) => {
    return {type: SET_TASK_REMOVE, curentTaskId}
};

export const setTaskUpdateActionCreater = (curentTaskId, newHeaderText) => {
    return {type: SET_TASK_UPDATE, curentTaskId, newHeaderText}
};

export default CreateTaskReducer;