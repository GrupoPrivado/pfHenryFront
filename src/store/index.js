import {createStore, applyMiddleware, combineReducers} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerPlanes from "../reducer/reducerPlanes";


const reducers= combineReducers({
    planes : reducerPlanes,
    
    
})
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))