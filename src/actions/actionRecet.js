import axios from "axios";
import {api} from '../urlHostApi'
import { getItem } from "./actionAuth";

export function getRecetas() {
    return async function (dispatch) {
      const token = getItem("userToken");
      const { data } = await axios.get(`${api}/recetas`,{
          headers: {
            "x-access-token": token,
          },});
  
      return dispatch({
        type: "GET_RECETAS",
        payload: data.message,
      });
    };
}
