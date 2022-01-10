import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMedicalToken, getNewMedicalToken } from '../../actions/actionAuth';

export const TokenMedico = () => {

    const [active, setActive] = useState(true)
    const { medicalToken } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (medicalToken.length < 3) dispatch(getMedicalToken())
        if (medicalToken.length === 3) setActive(false)
    }, [dispatch, medicalToken.length])

    const newToken = () => {
        const { error } = dispatch(getNewMedicalToken())
        if (error) {
            setActive(false)
        }
    }


    return (
        <div className="relative flex flex-col justify-center p-4 bg-white md:col-span-2 md:row-span-2 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
            <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
                <h1>Tokens</h1>
            </div>
            <div className='flex flex-col justify-around px-2.5 w-full font-normal text-white shrink-0'>
                {medicalToken.length && medicalToken.map((token, index) =>
                    <div key={index}>
                        {token}
                    </div>)}

                {
                    active && <button onClick={newToken}>Nuevo Token</button>
                }
            </div>

        </div>
    )
}


