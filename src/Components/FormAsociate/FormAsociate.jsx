import React, {useState, useEffect} from "react";


import React from 'react'

export default function FormAsociate() {

    return (
        <div>
            <div>
                <label> Nombre:</label>
                <input type="text" />
            </div>
            
            <div>
                <label> Apellido:</label>
                <input type="text" />
            </div>
            <div>
                <label>DNI:</label>
                <input type="number" />

            </div>
            <div>
                <label> Fecha de Nacimiento:</label>
                <input type="date" />
            </div>
            <div>
                <label>Telefono:</label>
                <input type="number" />

            </div>
            <div>
                <label>Email:</label>
                <input type="text" />
            </div>
            <div>
                <label>Domicilio:</label>
                <input type="text" />
            </div>
            <div>
                <label>Localidad:</label>
                <input type="text" />
            </div>
            <div>
                <label>Provincia:</label>
                <input type="text" />
            </div>
            <div>
                <label>Agregar miembro</label>
                <button>+</button>
            </div>
            <div>
                <label>Planes</label>
                <select name="" id=""></select>
            </div>
            <div>
                <button>Enviar</button>
            </div>

            
        </div>
    )
}
