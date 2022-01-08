import axios from "axios";
const AUTHENTICATED = 'AUTHENTICATED'
const GET_AFILIATE = 'GET_AFILIATE'
export { GET_AFILIATE}


const {REACT_APP_ROUTE_BACK} = process.env;



export const getItem = (item) => localStorage.getItem(item)
export const removeItem = (item) => localStorage.removeItem(item)


export const postAfiliate = (payload) => {
  console.log('Llega >>>>>>>>', payload)
  return async function (dispatch) {
    var json = await axios.post('http://localhost:3001/api/addPreCarga', payload);
    console.log(' >>>>>>> ', json.data)
    return json.data
  };
}
// token por header => authorization => x - access - token
export const getAfiliate = (payload) => {
    return async (dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/api/afiliados`, {
                headers:{
                    'x-access-token' : payload
                }
        });
        console.log(data)
        if(data.success){
            return dispatch({type: GET_AFILIATE, payload: data.message})
        } else {
            return dispatch({type: 'NOT_AUTHENTICATED', payload: data})

        }
    }
}

  


