import axios from "axios";
import {api} from '../urlHostApi'
const GET_AFILIATE = 'GET_AFILIATE'
const GET_MEDICAL_TOKEN = 'GET_MEDICAL_TOKEN'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
const GET_ERROR = 'GET_ERROR'


export { GET_AFILIATE, GET_MEDICAL_TOKEN, NOT_AUTHENTICATED, GET_ERROR}


export const getItem = (item) => localStorage.getItem(item)
export const removeItem = (item) => localStorage.removeItem(item)


export const postAfiliate = (payload) => {
  //console.log('Llega >>>>>>>>', payload)
  return async function (dispatch) {
    try {
      const {data} = await axios.post(`${api}/addPreCarga`, payload);
      console.log(' >>>>>>> ', data)
      return data;
      // tanto back y front => verificar si el ddni de registro ya existe en la DB
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
  };
}
// token por header => authorization => x - access - token
export const getAfiliate = (payload) => {
    return async (dispatch) => {
      const token = getItem("userToken");
      try {
          const {data} = await axios.get(`${api}/afiliados`, {
                  headers:{
                      'x-access-token' : token
                  }
          });
          //console.log(data)
          if(data.success){
              return dispatch({type: GET_AFILIATE, payload: data.message})
          } else {
              return dispatch({type: NOT_AUTHENTICATED, payload: data})

          }
      } catch (error) {
        console.error(error) 
        return {error: error.message} 
      }
    }
}

export const getMedicalToken = () => {
  return async (dispatch) => {
    try {
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
      
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
  };
};
export const getNewMedicalToken = () => {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(`${api}/afiliados/newToken`,{
          headers: {
            "x-access-token": token,
          },});
  
      console.log('<<< data action >>> ', data)
      if (data.success) {
        return dispatch({ type: GET_AFILIATE, payload: data.message });
      } else {
        return {error: true}
      }
      
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
  };
};


  
export const updateUser = (payload) => {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/afiliados`,payload,{
          headers: {
            "x-access-token": token,
          },});
  
      console.log('<<< data action >>> ', data)
      if(data.success){
        return dispatch({type: GET_AFILIATE, payload: data.message})
      } else {
          return ;// dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
      
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
  };
};

export const changePassword = (payload) => {
  console.log('<<< data payload password >>> ', payload)
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/afiliados/password`,payload,{
          headers: {
            "x-access-token": token,
          },});

      if(data.success){
        console.log('<<< data password >>> ', data)
        return dispatch({type: GET_AFILIATE, payload: data.message})
      } else {
        return dispatch({type: GET_ERROR, payload: data.message})

      }
      
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
  };
};


export const putProfilePhoto = (payload) => {
  console.log('<<< data action profile photo >>> ', payload)
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/afiliados/profile`,payload,{
          headers: {
            "x-access-token": token,
          },});
  
      if(data.success){
        return dispatch({type: GET_AFILIATE, payload: data.message})
      } else {
          return dispatch({type: GET_ERROR, payload: data.message})

      }
      
    } catch (error) {
      console.error(error) 
      return {error: error.message} 
    }
  };
};
