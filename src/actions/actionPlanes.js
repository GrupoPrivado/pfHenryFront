import axios from "axios";
const {REACT_APP_ROUTE_BACK} = process.env;

// React ya "integra" a dotenv, pero en el archivo .env, se deben definir empezando con REACT_APP_
// si tienen instalado en el package json a dotenv, escriban npm uninstall dotenv
console.log('<>>>>>  routeback  ' , REACT_APP_ROUTE_BACK)
//${ROUTE_BACK}/planesMutual
export function getPlanes() {
    return async function (dispatch) {
     
      var json = await axios.get('https://arpymedical.herokuapp.com/api/planesMutual');
       
      return dispatch({
        type: "GET_PLANES",
        payload: json.data.message,
      });
      
    };
  }

export function postAfiliate(payload) {
  console.log("Llega >>>>>>>>", payload);
  return async function (dispatch) {
    var json = await axios.post(
      "https://arpymedical.herokuapp.com/api/addPreCarga",
      payload
    );
    console.log(" >>>>>>> ", json.data);
    return json.data.message;
  };
}
