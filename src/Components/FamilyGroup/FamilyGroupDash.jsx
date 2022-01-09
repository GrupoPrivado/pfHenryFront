import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getGroup } from '../../actions/actionGroup';

export default function FamilyGroupDash() {
    const  {grupo } = useSelector((state) => state.grupos);
    const { afiliado } = useSelector((state) => state.grupos)
    
    const dispatch = useDispatch()



    // useEffect(()=>{
    //     dispatch(getGroup(afiliado.codeGF))

    // },[dispatch])

    return (

        <Link to='/afiliado/group'>
        <div className='flex  items-center p-6 m-10 w-80 h-50 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-3xl justify-evenly'> 
            {
                grupo? grupo.map(e => (
                    <div>{e.nombre}</div>
                )): <div><h1>No tenes familiares</h1></div>
            }
            
        </div>
        </Link>
    )
}
