import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FormContact from '../../Components/FormContact/FormContact'
import {useTitle} from '../../hooks/useTitle'

function Contact() {
    useTitle('Contacto')

    return (
        <div>
            
            <h1 className='text-3xl font-bold m-4 text-center'>Contacto</h1>
            <FormContact/>
        </div>
    )
}

export default Contact
