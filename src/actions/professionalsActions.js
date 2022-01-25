import { api } from "../urlHostApi";

import { getItem } from "./actionAuth";
import { alertConstants } from "./actionAlerts";

import axios from "axios";
export const GET_PROFESSIONAL = "GET_PROFESSIONAL";

export function getconsultaMedica(payload) {
  return async function (dispatch) {
    try {
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
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Consulta médica encontrada",
        });
        return dispatch({
          type: "GET_CONSULTA_MEDICA",
          payload: data.message,
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al buscar la consulta",
        });
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getProfessional() {
  return async function (dispatch) {
    try {
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
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getProfessionalData() {
  return async function (dispatch) {
    try {
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
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function postRecetaMedica(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(
        `${api}/profesionales/postRecetaMedica`,
        payload,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Receta cargada con éxito",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al cargar la receta",
        });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function putConsultaMedica(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/profesionales`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Consulta cargada con éxito",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al cargar la consulta",
        });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getClinicHistory(payload) {
  return async function (dispatch) {
    try{
    const token = getItem("userToken");
    const { data } = await axios.get(
      `${api}/profesionales/historiaMedica/${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    if (data.success) {
      dispatch({
        type: alertConstants.SUCCESS,
        message: "Historia clínica encontrada",
      });
      return dispatch({
        type: "GET_MEDICAL_HISTORY",
        payload: data.message,
      });
    } else {
      dispatch({
        type: alertConstants.ERROR,
        message: "Error al buscar la historia clínica",
      });
      return dispatch({ type: "ERRORS", payload: data });
    }
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
  };
}

export function resetData() {
  return {
    type: "RESET_DATA",
  };
}
