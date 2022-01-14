import React from 'react'
import EditImage from './EditImage'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'

function Perfil() {
    
    return (
        <div className='mt-4'>
                <h1 className='col-span-4 row-span-1 mb-10 ml-8 text-4xl font-bold text-left text-primary'>Mi Cuenta</h1>
                <div>
                    <EditImage/>
                    <EditPassword/>
                </div> 
            <EditProfile/>
        </div>
    )
}

export default Perfil
