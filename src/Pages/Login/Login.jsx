import React from 'react'
import { Link } from 'react-router-dom'
import FormLogin from '../../Components/FormLogin/FormLogin'
import Logo from "./../../assets/logo.svg"
import HappyFamily from "./../../assets/happyFamily.jpeg"
function Login() {
    return (
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <div>
                <img src={HappyFamily} alt="Happy family Arpi Medical" />
            </div>
            <div>
                <div>
                    <img src={Logo} alt="arpiMedical" />
                    <p>Administra tu información: cobertura, trámites
                        y gestiones médicas. Todo en un mismo lugar,
                        mucho más fácil.
                    </p>
                    <Link to="/asociate">
                        <h3>Quiero ser socio</h3>
                    </Link>
                </div>
                <div>
                    <FormLogin/>
                    <Link to="/login">
                        <h3>Olvide mi Usuario</h3>
                    </Link>
                    <Link to="/login">
                        <h3>Olvide mi Contraseña</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
