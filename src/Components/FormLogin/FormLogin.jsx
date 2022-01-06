import React , {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function FormLogin() {
    const [input, setInput] = useState({
        user: "",
        password: ""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const users = useSelector((state) => state.users);

    // useEffect(() => {
    //     dispatch(getUsers());
        
    // }, [dispatch]);

    const handleChange = (e) => {
        console.log(input)
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Usuario: </label>
                <input type="text"
                value={input.user}
                name="user"
                placeholder='Usuario'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Contraseña: </label>
                <input type="password"
                value={input.password}
                name="password"
                placeholder='Contraseña'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <input type="submit"
            value="Ingresar"
            />
        </form>
    )
}

export default FormLogin
