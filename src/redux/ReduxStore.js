import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import CreateTaskReducer from "./reducers/CreateTaskReducer";
import { save } from "redux-localstorage-simple"

const reducers = combineReducers({
    taskPage: CreateTaskReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(save({namespace: "todo"}))));

window.store = store;

export default store;