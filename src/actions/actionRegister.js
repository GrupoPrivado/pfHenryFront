import axios from "axios";
import { api } from "../urlHostApi";
import { alertConstants } from "./actionAlerts";
const SET_FAMILIES = "SET_FAMILIES";
const ADD_FAMILIAR = "ADD_FAMILIAR";
const DELETE_FAMILIAR = "DELETE_FAMILIAR";
const EDIT_FAMILIAR = "EDIT_FAMILIAR";
const FIND_FAMILIAR = "FIND_FAMILIAR";

export {
  SET_FAMILIES,
  ADD_FAMILIAR,
  FIND_FAMILIAR,
  DELETE_FAMILIAR,
  EDIT_FAMILIAR,
};

export const addFamiliar = (payload) => (dispatch) => {
  return dispatch({ type: ADD_FAMILIAR, payload: payload });
};
export const deleteFamiliar = (payload) => (dispatch) => {
  return dispatch({ type: DELETE_FAMILIAR, payload: payload });
};
export const findFamiliar = (payload) => (dispatch) => {
  return dispatch({ type: FIND_FAMILIAR, payload: payload });
};
export const editFamiliar = (payload) => (dispatch) => {
  return dispatch({ type: EDIT_FAMILIAR, payload: payload });
};

export const registerFamilies = (payload) => {
  return async function(dispatch){
    try {
        const { data } = await axios.post(`${api}/addPreCarga`, payload);
        console.log('response ', data)
      if (data.success) {
        return dispatch({ type: alertConstants.SUCCESS, message: data.message });
      } else {
        return dispatch({type: alertConstants.ERROR, message: data.message });
      }
    } catch (error) {
      console.log(error, "error post afiliate");
      return dispatch({ success: false, message: error });
    }
  };
};

