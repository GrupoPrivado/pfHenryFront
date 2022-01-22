import axios from "axios";
import { api } from "../urlHostApi";
import { getItem } from "./actionAuth";

export const GET_ALL_PROVINCES = 'GET_ALL_PROVINCES'
export const GET_ALL_PHARMACIES = 'GET_ALL_PHARMACIES'

export function getAllProviders() {
  return async function (dispatch) {
    var json = await axios.get(`${api}/profesionales`);

    return dispatch({
      type: "GET_ALL_PROVIDERS",
      payload: json.data.message,
    });
  };
}


export const getAllPharmacies = (provinciaID, ciudadID) => {
  const token = getItem('userToken')
  return async (dispatch) => {
    const {data} = await axios.get(`${api}/afiliados/farmacias?ciudadID=${ciudadID}&provinciaID=${provinciaID}`, {
      headers: {
        "x-access-token": token
      }
    });

    return dispatch({
      type: GET_ALL_PHARMACIES,
      payload: data.message
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
        } else {
          console.log('errooooooor filter')
        }
      
    } catch (error) {
      console.log('catch', error)
    }
  };
}
// export function filterBySpecialties(payload) {
//   console.log('special',payload)
//   return {
//     type: "FILTER_BY_SPECIALTIES",
//     payload,
//   };
// }
