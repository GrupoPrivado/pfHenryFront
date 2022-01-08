import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AccesoDenegado = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Acceso denegado</h1>
            
            <button onClick={() => navigate(-1)}>Regresar</button>
            <Link to={'/'}>
              <button>Página principal</button>
            </Link>
        </div>
    )
}

export default AccesoDenegado
