import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function FamilyGroupDash() {
    const { grupo } = useSelector((state) => state.grupos);

    return (
        
        <Link to='/afiliado/group'>
        <div className='flex flex-col items-center p-6 m-10 w-80 h-50 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-3xl justify-evenly'> 
            {
                grupo?grupo.map(e => (
                    <div>{e.nombre}</div>
                )): <div><h1>No tenes grupo familiar</h1></div>
            }
            
        </div>
        </Link>
    )
}
