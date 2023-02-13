import { createStore } from "redux";
import { TodoReducer } from "./reducers/Reducers";
const devtools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(TodoReducer, devtools);