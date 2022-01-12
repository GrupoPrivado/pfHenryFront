import axios from "axios";
import {api} from '../urlHostApi'
const GET_AFILIATE = 'GET_AFILIATE'
const GET_MEDICAL_TOKEN = 'GET_MEDICAL_TOKEN'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'


export { GET_AFILIATE, GET_MEDICAL_TOKEN, NOT_AUTHENTICATED}


export const getItem = (item) => localStorage.getItem(item)
export const removeItem = (item) => localStorage.removeItem(item)


export const postAfiliate = (payload) => {
  //console.log('Llega >>>>>>>>', payload)
  return async function (dispatch) {
    var json = await axios.post(`${api}/addPreCarga`, payload);
    console.log(' >>>>>>> ', json.data)
    return json.data
  };
}
// token por header => authorization => x - access - token
export const getAfiliate = (payload) => {
    return async (dispatch) => {
        const {data} = await axios.get(`${api}/afiliados`, {
                headers:{
                    'x-access-token' : payload
                }
        });
        //console.log(data)
        if(data.success){
            return dispatch({type: GET_AFILIATE, payload: data.message})
        } else {
            return dispatch({type: NOT_AUTHENTICATED, payload: data})

        }
    }
}

export const getMedicalToken = () => {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/afiliados/tokens`,{
        headers: {
          "x-access-token": token,
        },});
    if (data.success) {
      return dispatch({ type: GET_MEDICAL_TOKEN, payload: data.message });
    } else {
      return dispatch({ type: NOT_AUTHENTICATED }) 
    }
  };
};
export const getNewMedicalToken = () => {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/afiliados/newToken`,{
        headers: {
          "x-access-token": token,
        },});

    console.log('<<< data action >>> ', data)
    if (data.success) {
      return dispatch({ type: GET_MEDICAL_TOKEN, payload: data.message });
    } else {
      return {error: true}
    }
  };
};
  
//if success false =>  si back responde "sin privilegios" => desencadenar => NOT_AUTHENTICATED => ...state, user: {}, route: '' 