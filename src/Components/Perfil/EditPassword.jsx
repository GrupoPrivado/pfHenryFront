import React , {useState} from 'react';
import {useDispatch} from "react-redux";
import { changePassword } from '../../actions/actionAuth';

function EditPassword() {
    const dispatch = useDispatch()
    const [passwords, setPasswords] = useState({
        old: "",
        newPass: "",
        repeat: "", 
    })
    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log("passwords", passwords)
        
        dispatch(changePassword(passwords))
        alert("Contraseña cambiada con exito")
    }

    const handleChange = (e) => {
        setPasswords({
            ...passwords,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="password" name="old" value={passwords.old} onChange={handleChange} placeholder="Contraseña actual" required/>
                <input type="password" name="newPass" value={passwords.newPass} onChange={handleChange} placeholder='Nueva contraseña' required />
                <input type="password" name="repeat" value={passwords.repeat} onChange={handleChange} placeholder='Repetir contraseña' required />
                <input type="submit" value="Cambiar Contraseña"/>
            </form>
        </div>
    )
}

export default EditPassword
