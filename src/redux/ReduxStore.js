import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import CreateTaskReducer from "./reducers/CreateTaskReducer";

// const persistedState = localStorage.getItem('reduxState') 
//                        ? JSON.parse(localStorage.getItem('reduxState'))
//                        : {}

let reducers = combineReducers({
    taskPage: CreateTaskReducer,
    // init: persistedState,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(() => {
//     localStorage["reduxState"] = JSON.stringify(store.getState());
// });

window.store = store;

export default store;