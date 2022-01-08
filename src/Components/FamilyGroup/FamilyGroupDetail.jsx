import React from 'react'
import { useSelector } from 'react-redux';
import NavbarDasboard from '../NavBarDashboard/NavBarDashboard'

export default function FamilyGroupDetail() {
    const { grupo } = useSelector((state) => state.grupos);
    return (
        <div>
 <NavbarDasboard/>
            {/* {grupo?grupo.map(e => (
                    <div>{e.nombre}</div>
            ))} */}
            
        </div>
    )
}
