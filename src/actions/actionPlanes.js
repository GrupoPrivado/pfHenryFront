import axios from "axios";
import {api} from '../../src/urlHostApi'

export function getPlanes() {
    return async function (dispatch) {
     
      var json = await axios.get(`${api}/planesMutual`);
       
      return dispatch({
        type: "GET_PLANES",
        payload: json.data.message,
      });
      
    };
  }

export function postAfiliate(payload) {
  return async function (dispatch) {
    var json = await axios.post(
      `${api}/addPreCarga`,
      payload
    );
    return json.data.message;
  };
}
