import axios from "axios";
import { api } from "../urlHostApi";
import { alertConstants } from "./actionAlerts";
const SET_FAMILIES = "SET_FAMILIES";
const ADD_FAMILIAR = "ADD_FAMILIAR";
const DELETE_FAMILIAR = "DELETE_FAMILIAR";
const EDIT_FAMILIAR = "EDIT_FAMILIAR";
const FIND_FAMILIAR = "FIND_FAMILIAR";
const DELETE_ALL_DATA = "DELETE_ALL_DATA";

export {
  SET_FAMILIES,
  ADD_FAMILIAR,
  FIND_FAMILIAR,
  DELETE_FAMILIAR,
  EDIT_FAMILIAR,
  DELETE_ALL_DATA,
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
      if (data.success) {
        dispatch({ type: DELETE_ALL_DATA});
        return dispatch({ type: alertConstants.SUCCESS, message: data.message });
      } else {
        return dispatch({type: alertConstants.ERROR, message: data.message });
      }
    } catch (error) {
      return dispatch({ success: false, message: error });
    }
  };
};

