import axios from "axios";
import {api} from '../../src/urlHostApi'
import { alertConstants } from "./actionAlerts";

export function getPlanes() {
    return async function (dispatch) {
     
      var json = await axios.get(`${api}/planesMutual`);
       
      return dispatch({
        type: "GET_PLANES",
        payload: json.data.message,
      });
    
      
    };
  }
  
// export function postAfiliate(payload) {
//   return async function (dispatch) {
//     var json = await axios.post(
//       `${api}/addPreCarga`,
//       payload
//     );
//     return json.data.message;
//   };
// }


export const postAfiliate = async (payload) => {
    try {
      const {data} = await axios.post(`${api}/addPreCarga`, payload);
      if(data.success){
        return { success: true, data: data.message }
      } else {
        return { success: false, data: data.message }
      }
    } catch (error) {
      return {success: false, data: error}
    }
  
}

// export const postAfiliate = (payload) => {

//   return async (dispatch) => {
//     const {data} = await axios.post(`${api}/addPreCarga`, payload);
// 
//     if(data.success){
//       dispatch({type: alertConstants.SUCCESS , message: 'Registro exitoso', error: false})
//     } else {
//       dispatch({type: alertConstants.ERROR, message: data.message, error:true})   
//     }
//   }
// }
