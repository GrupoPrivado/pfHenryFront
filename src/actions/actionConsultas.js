import axios from "axios";
import {api} from '../urlHostApi'
import { getItem } from "./actionAuth";
export const GET_CONSULTS = "GET_CONSULTS"

export function getHistorial(payload) {
    return async function (dispatch) {
      const token = getItem("userToken");
      try {
        const {data} = await axios.get(`${api}/consultasMedicas`, {
                headers:{
                    'x-access-token' : token
                }
        });
        console.log(data, "data HISTORIAL CONSULTAS")
        if(data.success){
            return dispatch({type: GET_CONSULTS, payload: data.message})
        } else {
            return {error: true}
        }
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
    };
}
