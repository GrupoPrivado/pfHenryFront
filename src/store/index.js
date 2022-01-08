import {createStore, applyMiddleware, combineReducers} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerAuth from "../reducer/reducerAuth";
import reducerPlanes from "../reducer/reducerPlanes";


const reducers= combineReducers({
    planes : reducerPlanes,
    auth: reducerAuth

    
})
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))