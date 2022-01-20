import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FormContact from '../../Components/FormContact/FormContact'
import {useTitle} from '../../hooks/useTitle'

function Contact() {
    useTitle('Contacto')

    return (
        <div className='min-h-[67vh]'>
            <FormContact/>
        </div>
    )
}

export default Contact
