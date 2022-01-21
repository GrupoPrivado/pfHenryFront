import axios from "axios";
import {api} from '../urlHostApi'

export const getUserToken = async(user) => {
    try {
        const result = await axios.post(`${api}/login`, user);
        console.log('result authUtils', result)
        if(result.data.token){
            localStorage.setItem('userToken', result.data.token);
            localStorage.setItem('userType', result.data.TipoUsuario);
            return {url: result.data.TipoUsuario} 
        }
        return {error: 'Su nombre de usuario o contraseña es inválida'};
        
    } catch (error) {
        console.error(error) 
        return {error: error.message} 
    }
    
}

export const recoverPassword = async (input) => {
    try {
        const {data} = await axios.post(`${api}/login/recoverPassword`, input)
        console.log(data)
        return data
    } catch (error) {
        return console.log(error)
    }
}
                        
export const verifyRole = (autorizado) => {
    const userToken = localStorage.getItem('userToken');
    const userType = localStorage.getItem('userType');
    if(userType && userToken){
        return userType === autorizado 
    }
    return false
}


export const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userType');
}
