import { api } from "../urlHostApi";

import axios from "axios";

/************* Actions Para ABM Ciudades***********/
export function getAllCities() {
  return async (dispatch) => {
    const { data } = await axios.get(`${api}/ciudades`);
    if (data.success) {
      return dispatch({ type: "GET_CIUDADES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addCity(data) {
  return async (dispatch) => {
    const response = await axios.post(`${api}/ciudades`, data);
    return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export const getCityData = (data) => {
  return {
    type: "CITY_DATA",
    payload: data,
  };
};

export function updateCity(data) {
  return async (dispatch) => {
    const response = await axios.put(`${api}/ciudades`, data);
    return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function deleteCity(data) {
  return async (dispatch) => {
    const response = await axios.delete(`${api}/ciudades/${data}`);
    return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* Fin Actions Para ABM Ciudades***********/

/************* Actions Para ABM Especialidades***********/

export function getAllSpecialities() {
  return async (dispatch) => {
    const { data } = await axios.get(`${api}/especialidades`);
    if (data.success) {
      return dispatch({ type: "GET_SPECIALITIES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addSpeciality(data) {
  return async (dispatch) => {
    const response = await axios.post(`${api}/especialidades`, data);
    return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export const getSpecialityData = (data) => {
  return {
    type: "SPECIALITY_DATA",
    payload: data,
  };
};

export function updateSpecialityAct(data) {
  return async (dispatch) => {

    const response = await axios.put(`${api}/especialidades`, data);
    return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function deleteSpeciality(data) {
  return async (dispatch) => {
    const response = await axios.delete(`${api}/especialidades/${data}`);
    return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* FIN Actions Para ABM Especialidades***********/

/************* Actions Para ABM Afiliados***********/

export function getAllAffiliates() {
  return async (dispatch) => {
    const { data } = await axios.get(`${api}/afiliados`);
    if (data.success) {
      return dispatch({ type: "GET_AFFILIATES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addAffiliate(data) {
  // return async (dispatch) => {
  //   const response = await axios.post(`${api}/afiliados`, data);
  //   return response.data.message;
  //   // if(data.success){
  //   //     return dispatch({type: "GET_CIUDADES", payload: data.message})
  //   // } else {
  //   //     return dispatch({type: "ERRORS", payload: data})

  //   // }
  // };
}

export const getAffiliateData = (data) => {
  // return {
  //   type: "AFFILIATE_DATA",
  //   payload: data,
  // };
};

export function updateAffiliateAct(data) {
  // return async (dispatch) => {
  
  //   const response = await axios.put(`${api}/afiliados`, data);
  //   return response.data.message;
  //   // if(data.success){
  //   //     return dispatch({type: "GET_CIUDADES", payload: data.message})
  //   // } else {
  //   //     return dispatch({type: "ERRORS", payload: data})

  //   // }
  // };
}

export function deleteAffiliate(data) {
  // return async (dispatch) => {
  //   const response = await axios.delete(`${api}/afiliado/${data}`);
  //   return response.data.message;
  //   // if(data.success){
  //   //     return dispatch({type: "GET_CIUDADES", payload: data.message})
  //   // } else {
  //   //     return dispatch({type: "ERRORS", payload: data})

  //   // }
  // };
}

export function getAllPlans(){
  return async (dispatch) => {
    const { data } = await axios.get(`${api}/planes`);
    if (data.success) {
      return dispatch({ type: "GET_PLANS", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

/************* FIN Actions Para ABM Afiliados***********/

/*************Actions Comunes Para ABM***********/
export const resetDataUpdate = () => {
  return {
    type: "DATA_RESET",
  };
};
/*************FIN Actions Comunes Para ABM***********/
