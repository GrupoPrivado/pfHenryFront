import axios from "axios";
import { api } from "../urlHostApi";
import { getItem } from "./actionAuth";

export const GET_ALL_PROVINCES = 'GET_ALL_PROVINCES'
export const GET_ALL_PHARMACIES = 'GET_ALL_PHARMACIES'

export function getAllProviders(provinciaID,ciudadID, especID, skip) {
  return async function (dispatch) {
    dispatch({
      type: "GET_ALL_PROVIDERS",
      payload: [],
      loading: true
    })
    const {data} = await axios.get(`${api}/profesionales?ciudadID=${ciudadID}&provinciaID=${provinciaID}&especID=${especID}&skip=${skip}`);

    return dispatch({
      type: "GET_ALL_PROVIDERS",
      payload: data.message,
      limitPaged: data.limitPaged,
      loading: false
    });
  };
}


export const getAllPharmacies = (provinciaID, ciudadID, skip) => {
  const token = getItem('userToken')
  return async (dispatch) => {
    dispatch({type: GET_ALL_PHARMACIES, payload: [], loading: true })

    const {data} = await axios.get(`${api}/afiliados/farmacias?ciudadID=${ciudadID}&provinciaID=${provinciaID}&skip=${skip}`, {
      headers: {
        "x-access-token": token
      }
    });
    return dispatch({
      type: GET_ALL_PHARMACIES,
      payload: data.message,
      limitPaged: data.limitPaged,
      loading: false
    })

  } 
}


export function getAllProvinces() {
  return async function (dispatch) {
    const {data} = await axios.get(`${api}/provincias`);
    return dispatch({
      type: GET_ALL_PROVINCES,
      payload: data.message,
    });
  };
}

export function getAllCities(payload) {
  return async function (dispatch) {
    try {
      const {data} = await axios.get(`${api}/ciudades/${payload}`);
  
      if(data.success){
        return dispatch({
          type: "GET_ALL_CITIES",
          payload: data.message,
        });

      }
  
      
    } catch (error) {
      return console.log(error, 'error en get all cities')
    }
  };
}

export const deleteCities = () => dispatch => {
  return dispatch({type: 'RESET_CITIES'})
}

export function getAllSpecialties() {
  return async function (dispatch) {
    var json = await axios.get(`${api}/especialidades`);

    return dispatch({
      type: "GET_ALL_SPECIALTIES",
      payload: json.data.message,
    });
  };
}
export function filterByCity(ciudadID, codeEsp) {
  return async function (dispatch) {
    try {
      var {data} = await axios.get(
        `${api}/profesionales?ciudadID=${ciudadID}&codeEsp=${codeEsp}`
        );
        if(data.success){
          return dispatch({
            type: "FILTER_BY_CITY",
            payload: data.message,
          });
        }
      
    } catch (error) {
      console.log('catch', error)
    }
  };
}
// export function filterBySpecialties(payload) {
//   return {
//     type: "FILTER_BY_SPECIALTIES",
//     payload,
//   };
// }
