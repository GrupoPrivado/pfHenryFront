import axios from "axios";
import { api } from "../urlHostApi";

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
  let url = `${api}/farmacias`
  if(provinciaID !== ''){
     url = `${api}/farmacias/${provinciaID}?ciudadID=${ciudadID}`
  }
  return async (dispatch) => {
   
    const {data} = await axios.get(`${url}`);

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
