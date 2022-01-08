import { logRoles } from "@testing-library/react";
import axios from "axios";


export function getGroup(codeGroup) {
    
    return async function (dispatch) {
      var json = await axios.get(
        `http://localhost:3001/api/gruposFamiliares/${codeGroup}`
      );
      return dispatch({
        type: "GET_GROUP",
        payload: json.data.message,
      });
    };
}
export function getAfiliate(dni){
 
    return async function (dispatch) {
        var json = await axios.get(
          `http://localhost:3001/api/afiliados/${dni}`
        );
       
        return dispatch({
          type: "GET_AFILIATE",
          payload: json.data.message,
        });
      };
      
 }