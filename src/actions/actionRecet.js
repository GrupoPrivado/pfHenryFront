import axios from "axios";
import {api} from '../urlHostApi'
import { getItem } from "./actionAuth";

export function getRecetas() {
    
    return async function (dispatch) {
      console.log('entro >>>>>')
      const token = getItem('userToken');
      var json = await axios.get(
        `${api}/recetas/`, { headers: {'x-access-token': token}}
      );
  
      return dispatch({
        type: "GET_RECETAS",
        payload: json.data.message,
      });
    };
}
