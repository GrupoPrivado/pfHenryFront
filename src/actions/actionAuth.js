import axios from "axios";
const AUTHENTICATED = 'AUTHENTICATED'
export {AUTHENTICATED}
const {REACT_APP_ROUTE_BACK} = process.env;

// Teoria
/*
El usuario se loguea => back devuelve token, tipo de usuario y la información del usuario

El token se almacena en localstorage, user en redux

Cuando el usuario vuelve a entrar a la página, no necesita loguearse si el token es valido (ruta validación)
Pero al ingresar al dashboard => petición get al back junto con el token, => back devuelve info user => redux

*/


export const postAfiliate = (payload) => {
  console.log('Llega >>>>>>>>', payload)
  return async function (dispatch) {
    var json = await axios.post('https://arpymedical.herokuapp.com/api/addPreCarga', payload);
    console.log(' >>>>>>> ', json.data)
    return json.data
  };
}

  


