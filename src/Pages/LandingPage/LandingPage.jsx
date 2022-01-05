import React from "react";
import { Link } from "react-router-dom";




export default function LandingPage() {
    return (
        <div>
            <Link to='/login'>
            <button>Ingresar</button>
            </Link>
            <Link to='/asociate'>
            <button>Quiero asociarme</button>
            </Link>
            <Link to ='/contact'>
            <button>Contacto</button>
            </Link>
            
        </div>
    )
}
