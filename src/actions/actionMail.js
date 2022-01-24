import axios from "axios";
import {api} from '../urlHostApi'

export function sendMail(payload){
  return async function(dispatch){
    const response = await axios.post(
      `${api}/sendMail`,
      payload
    );
    return response
  }
}  