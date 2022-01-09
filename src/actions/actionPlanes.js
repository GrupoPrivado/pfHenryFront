import axios from "axios";


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
 /// console.log("Llega >>>>>>>>", payload);
  return async function (dispatch) {
    var json = await axios.post(
      "https://arpymedical.herokuapp.com/api/addPreCarga",
      payload
    );
    //console.log(" >>>>>>> ", json.data);
    return json.data.message;
  };
}
