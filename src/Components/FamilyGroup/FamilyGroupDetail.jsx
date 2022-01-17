import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import NavbarDasboard from '../NavBarDashboard/NavBarDashboard'
import CardMemberGroup from './CardMemberGroup';
import { Link } from "react-router-dom";
export default function FamilyGroupDetail() {
    const { group } = useSelector((state) => state.grupos);
    const [isActive, setActive ] = useState(false)
    const [info, setInfo ] = useState({
        name: '',
        lastname: '',
        dni: ''
    })

    return (
        <div>
        {/* <NavbarDasboard/> */}

            {group && group.map((e) => (<div key={e._id}>
            
                <CardMemberGroup 
                name={e.nombre}
                lastname={e.apellido}
                dni={e.DNI}
                />
            </div>
            ))}
            <Link to='/afiliado'>
            <button>Volver</button></Link>
        </div>
    )
}
