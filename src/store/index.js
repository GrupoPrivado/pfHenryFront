import {createStore, applyMiddleware, combineReducers} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerAuth from "../reducer/reducerAuth";
import reducerPlanes from "../reducer/reducerPlanes";
import reducerGroup from "../reducer/reducerGroup"


const reducers= combineReducers({
    grupos : reducerGroup,
    planes : reducerPlanes,
    auth: reducerAuth

    
    
})
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))