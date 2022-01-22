import {createStore, applyMiddleware, combineReducers} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerAuth from "../reducer/reducerAuth";
import reducerPlanes from "../reducer/reducerPlanes";
import reducerGroup from "../reducer/reducerGroup"
import reducerProviders from "../reducer/reducerProviders";
import reducerRecetas from "../reducer/reducerRecetas";
import reducerABMAdmin from "../reducer/reducerABMAdmin"
import reducerProffesionals from '../reducer/reducerProfessionals'
import { reducerAlerts } from "../reducer/reducerAlerts";
import reducerFacturas from "../reducer/reducerFacturas";
import reducerRegister from "../reducer/reducerRegister";


const reducers= combineReducers({
    associate: reducerRegister,
    grupos : reducerGroup,
    planes : reducerPlanes,
    auth: reducerAuth,
    providers: reducerProviders,
    recetas: reducerRecetas,
    ABMAdmin: reducerABMAdmin,
    alerts: reducerAlerts,
    facturas: reducerFacturas,
    professionals: reducerProffesionals
    
})
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))