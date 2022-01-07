import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FormContact from '../../Components/FormContact/FormContact'

function Contact() {
    return (
        <div>
            <NavBar/>
            <h1 className='text-3xl font-bold m-4 text-center'>Contacto</h1>
            <FormContact/>
        </div>
    )
}

export default Contact
