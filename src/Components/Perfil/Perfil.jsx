import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth'

import EditImage from './EditImage'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'

function Perfil() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, route, data } = useSelector(state => state.auth)

    useEffect(() => {

      if (!data) {
        dispatch(getAfiliate(getItem()));
      }
      if (route !== "") {
        removeItem("userType");
        navigate(`/${route}`);
      }
    }, [dispatch, route, navigate, data]);


    return (
        <div className='mt-4'>
                <h1 className='col-span-4 row-span-1 mb-10 ml-8 text-4xl font-bold text-left text-primary'>Mi Cuenta</h1>
                <div>
                    <EditImage photo={user.urlPhoto}/>
                    <EditPassword/>
                </div> 
            <EditProfile user={user} data={data}/>

        </div>
    )
}

export default Perfil
