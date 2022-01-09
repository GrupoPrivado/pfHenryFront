import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getMedicalToken, getNewMedicalToken } from '../../actions/actionAuth';

export const TokenMedico = () => {

    const [active, setActive] = useState(true)
    const {medicalToken} = useSelector(state => state.auth) 

    const dispatch = useDispatch();

    useEffect(() => {
        if(medicalToken.length < 3) dispatch(getMedicalToken())
        if(medicalToken.length === 3) setActive(false)
    }, [dispatch, medicalToken.length])

    const newToken = () => {
        const {error} = dispatch(getNewMedicalToken())
        if(error) {
             setActive(false)
         }
    }


    return (
        <div >
            <h1>Tokens</h1>
            {medicalToken.length && medicalToken.map((token, index) => <div key={index}>{token}</div> )}

            {
                active && <button onClick={newToken}>Nuevo Token</button>
            }
        </div>
            
    )
}


