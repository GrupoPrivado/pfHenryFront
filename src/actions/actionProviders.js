import axios from "axios";
import { api } from "../urlHostApi";

export function getAllProviders() {
  return async function (dispatch) {
    var json = await axios.get(`${api}/profesionales`);

    return dispatch({
      type: "GET_ALL_PROVIDERS",
      payload: json.data.message,
    });
  };
}

export function getAllCities(payload) {
  console.log('get all cities, ', payload)
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
        console.log('json', data.message)
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
