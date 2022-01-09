import axios from "axios";

export const getUserToken = async(user) => {
    const result = await axios.post('https://arpymedical.herokuapp.com/api/login', user);
    
    if(result.data.token){
        localStorage.setItem('userToken', result.data.token);
        localStorage.setItem('userType', result.data.TipoUsuario);
        return {url: result.data.TipoUsuario} 
    }
    return {error: 'Su nombre de usuario o contraseña es inválida'};
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
