import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.svg"

function NavBar() {
    return (
        <nav>
            <Link to="/">
                <img src={Logo} alt="Arpi Medical Logo"/>
            </Link>

            <Link to="/login">
                <li>Ingresar</li>
            </Link>

            <Link to="/asociate">
                <li>Quiero ser socio</li>
            </Link>

            <Link to="/contact">
                <li>Contacto</li>
            </Link>
        </nav>
    )
}

export default NavBar
