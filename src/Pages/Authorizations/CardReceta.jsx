import React from 'react';
import Logo from "./../../assets/logo_large.png"
function CardReceta({
    numReceta, 
    tipo, 
    nombre, 
    apellido, 
    matricula, 
    especialidad,
    descripcion, 
}) {
    return (
        <div className='bg-white'>
            <img src={Logo} alt="Logo Arpi"/>
            <div>
                <h3>Receta Nº {numReceta}</h3>
                <h4>{tipo}</h4>
                <p>{descripcion}</p>
            </div>
            <div>
                <h3>Dr.{nombre} {apellido}</h3>
                <h4>Especialista en {especialidad}</h4>
                <h5>M.P{matricula}</h5>
            </div>
        </div>
    );
}

export default CardReceta;
