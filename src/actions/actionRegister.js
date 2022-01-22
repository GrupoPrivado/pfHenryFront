import axios from "axios";
import {api} from '../urlHostApi'
import { alertConstants } from "./actionAlerts";
const SET_FAMILIES = 'SET_FAMILIES'
const ADD_FAMILIAR = 'ADD_FAMILIAR'
const DELETE_FAMILIAR = 'DELETE_FAMILIAR'
const EDIT_FAMILIAR = 'EDIT_FAMILIAR'
const FIND_FAMILIAR = 'FIND_FAMILIAR'





export { SET_FAMILIES, ADD_FAMILIAR, FIND_FAMILIAR, DELETE_FAMILIAR, EDIT_FAMILIAR}

export const addFamiliar = payload => dispatch => {
    return dispatch({type: ADD_FAMILIAR, payload: payload})
}
export const deleteFamiliar = payload => dispatch => {
    return dispatch({type: DELETE_FAMILIAR, payload: payload})
}   
export const findFamiliar = payload => dispatch => {
    return dispatch({type: FIND_FAMILIAR, payload: payload})
}   
export const editFamiliar = payload => dispatch => {
    return dispatch({type: EDIT_FAMILIAR, payload: payload})
}   


export const postAfiliate = (payload) => async dispatch => {
    try {
      const {data} = await axios.post(`${api}/addPreCarga`, payload);
      console.log(data)
      if(data.success){
        return { success: true, data: data.message }
      } else {
          dispatch({type: SET_FAMILIES, data: payload})
        return { success: false, data: data.message }
      }
    } catch (error) {
      console.log(error, 'error post afiliate')
      return {success: false, data: error}
    }
  
}
