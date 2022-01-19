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


export const postAfiliate = (payload) => {
<<<<<<< HEAD
  console.log(payload,'afiliado')
=======
  console.log(payload, "payload form")
>>>>>>> Dash
  return async (dispatch) => {
    const {data} = await axios.post(`${api}/addPreCarga`, payload);
    console.log(data)
    if(data.success){
      dispatch({type: alertConstants.SUCCESS , message: 'Registro exitoso'})
    } else {
      dispatch({type: alertConstants.ERROR, message: data.message, error:true})   
    }
  }

}
