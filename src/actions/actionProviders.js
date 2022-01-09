import axios from "axios";


export function getAllProviders() {
    return async function (dispatch) {
      var json = await axios.get(
        "http://localhost:3001/api/profesionales"
      );
  
      return dispatch({
        type: "GET_ALL_PROVIDERS",
        payload: json.data.message,
      });
    };
}

export function getAllCities() {
    return async function (dispatch) {
      var json = await axios.get(
        "http://localhost:3001/api/ciudades"
      );
  
      return dispatch({
        type: "GET_ALL_CITIES",
        payload: json.data.message,
      });
    };
    
}
export function getAllSpecialties() {
    return async function (dispatch) {
      var json = await axios.get(
        "http://localhost:3001/api/especialidades"
      );
  
      return dispatch({
        type: "GET_ALL_SPECIALTIES",
        payload: json.data.message,
      });
    };
}