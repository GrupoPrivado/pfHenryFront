import axios from "axios";

export function sendMail(payload){
  return async function(dispatch){
    const response = await axios.post(
      "https://arpymedical.herokuapp.com/api/sendMail/",
      payload
    );
    return response
  }
}  