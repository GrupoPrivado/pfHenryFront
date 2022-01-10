//import { logRoles } from "@testing-library/react";
import axios from "axios";
import { getItem } from "./actionAuth";
import {api} from '../urlHostApi'


export function getGroup(codeGroup) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `${api}/gruposFamiliares/${codeGroup}`,
      {
        headers: {
          "x-access-token": getItem("userToken"),
        },
      }
    );
    return dispatch({
      type: "GET_GROUP",
      payload: data.message,
    });
  };
}
// export function getAfiliate(dni){
 
//     return async function (dispatch) {
//         var json = await axios.get(
//           `https://arpymedical.herokuapp.com/api/afiliados/${dni}`
//         );
       
//         return dispatch({
//           type: "GET_AFILIATE",
//           payload: json.data.message,
//         });
//       };
      
//  }
