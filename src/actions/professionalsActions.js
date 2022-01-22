import { api } from "../urlHostApi";

import { getItem } from "./actionAuth";

import axios from "axios";
export const GET_PROFESSIONAL = "GET_PROFESSIONAL"

export function getconsultaMedica(payload) {
  return async function (dispatch) {
    console.log("<<<<<<<", payload, ">>>>>>>>>");
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

export function getProfessional() {
  return async function (dispatch) {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/profesionales`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (data.success) {
      return dispatch({
        type: GET_PROFESSIONAL,
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