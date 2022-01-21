import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FormContact from '../../Components/FormContact/FormContact'
import {useTitle} from '../../hooks/useTitle'
import SuccessAlert from '../../Components/Alerts/SuccessAlert'
import ErrorAlert from '../../Components/Alerts/ErrorAlert'

function Contact() {
    useTitle('Contacto')

    const [activeAlert, setActiveAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    return (
        <div className='min-h-[67vh]'>
            <FormContact setActiveAlert={setActiveAlert} setErrorAlert={setErrorAlert}/>
            {activeAlert && <SuccessAlert message={'Consulta enviada, responderemos a la brevedad'}/>}
            {errorAlert && <ErrorAlert message={'Revise todos los campos'}/>}
        </div>
    )
}

export default Contact
