import { api } from "../urlHostApi";

import { getItem } from "./actionAuth";

import axios from "axios";

export function getconsultaMedica(payload) {
  return async function (dispatch) {
    const token = getItem("userToken");
    const { data } = await axios.get(
      `${api}/profesionales/consultaMedica?DNI=${payload.DNI}&token=${payload.token}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    if (data.success) {
      return dispatch({
        type: "GET_CONSULTA_MEDICA",
        payload: data.message,
      });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function getProfessionalData() {
  return async function (dispatch) {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/profesionales/profData`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (data.success) {
      return dispatch({
        type: "GET_PROFESSIONALDATA",
        payload: data.message,
      });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function postRecetaMedica(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.post(`${api}/profesionales/postRecetaMedica`, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function putConsultaMedica(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(`${api}/profesionales`, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function getClinicHistory(payload) {
  return async function (dispatch) {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/profesionales/historiaMedica/${payload}`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (data.success) {
      return dispatch({
        type: "GET_MEDICAL_HISTORY",
        payload: data.message,
      });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}