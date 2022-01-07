import axios from "axios";

export const getUserToken = async(user) => {
    const result = await axios.post('http://localhost:3001/api/login', user);
    
    if(result.data.token){
        localStorage.setItem('userToken', result.data.token);
        localStorage.setItem('userType', result.data.TipoUsuario);
        return {url: result.data.TipoUsuario}
    }


    return {error: 'Credenciales inválidas'};
}

export const verifyRole = (autorizado) => {
    const role = localStorage.getItem('userType');
    console.log(role  ===  autorizado , '<<<<<<<<<< AUTORIZADO  >>>>>>>>>')
    return role === autorizado
}