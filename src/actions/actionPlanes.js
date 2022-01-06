import axios from "axios";
const {ROUTE_BACK} = process.env;
//console.log(process.env.ROUTE_BACK)
//${ROUTE_BACK}/planesMutual
export function getPlanes() {
    return async function (dispatch) {
     
      var json = await axios.get('https://arpymedical.herokuapp.com/api/planesMutual');
       
      return dispatch({
        type: "GET_PLANES",
        payload: json.data,
      });
      
    };
  }

export function postAfiliate(payload) {
  console.log('Llega >>>>>>>>', payload)
  return async function (dispatch) {
    var json = await axios.post('https://arpymedical.herokuapp.com/api/addPreCarga', payload);
    console.log(' >>>>>>> ', json.data)
    return json.data
  };
}

  


