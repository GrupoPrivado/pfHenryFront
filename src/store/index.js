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
import reducerHistorial from "../reducer/reducerConsultas";
import reducerFacturas from "../reducer/reducerFacturas";


const reducers= combineReducers({
    grupos : reducerGroup,
    planes : reducerPlanes,
    auth: reducerAuth,
    providers: reducerProviders,
    recetas: reducerRecetas,
    ABMAdmin: reducerABMAdmin,
    alerts: reducerAlerts,
    consultas: reducerHistorial,
    facturas: reducerFacturas,
    professionals: reducerProffesionals
    
})
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))