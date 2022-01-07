import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.svg"

function NavBar() {
    return (
        <nav>
            <div className='flex justify-between p-6'>
                <Link to="/">
                    <img src={Logo} alt="Arpi Medical Logo"/>
                </Link>
                <div className='flex px-6'>
                    <Link to="/login">
                        <li className='list-none px-6'>Ingresar</li>
                    </Link>

                    <Link to="/asociate">
                        <li className='list-none px-6'>Quiero ser socio</li>
                    </Link>

                    <Link to="/contact">
                        <li className='list-none px-6'>Contacto</li>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
