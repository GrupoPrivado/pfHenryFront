import React from 'react'
import EditImage from './EditImage'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'

function Perfil() {
    
    return (
        <div className='mt-4'>
            <div className='flex justify-between'>
                <h1 className='col-span-4 row-span-1 ml-8 text-4xl font-bold text-left text-primary'>Mi Cuenta</h1>
                <EditImage/>
            </div>
            <EditPassword/>
            <EditProfile/>
        </div>
    )
}

export default Perfil
