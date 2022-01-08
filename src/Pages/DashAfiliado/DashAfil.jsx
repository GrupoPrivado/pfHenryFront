import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth';


function DashAfil() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {user, route} = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(getAfiliate(getItem('userToken')))
        if(route !== '') {
            removeItem('userType')
            navigate(`/${route}`)
        } 
    }, [dispatch, route, navigate])

    return (
        <div>
            Dashboard Afiliado

            <p>{user.nombre}</p>
        </div>
  
    )
}

export default DashAfil
