import axios from "axios";
//const routeBack = process.env.ROUTE_BACK;
//console.log(process.env.ROUTE_BACK)
//${ROUTE_BACK}/planesMutual
export function getPlanes() {
    return async function (dispatch) {
     
      var json = await axios.get(`https://arpymedical.herokuapp.com/arpymedicalback/planesMutual`);
       
      return dispatch({
        type: "GET_PLANES",
        payload: json.data,
      });
      
    };
  }
  export function postAfiliate(payload) {
    console.log(payload)
    return async function (dispatch) {
      var json = await axios.post(``,payload);
      return json
    };
  }
