import axios from "axios";
import {api} from '../urlHostApi'

export function getRecetas(dni) {
    return async function (dispatch) {
      var json = await axios.get(
        `${api}/recetas/${dni}`
      );
  
      return dispatch({
        type: "GET_RECETAS",
        payload: json.data.message,
      });
    };
}
