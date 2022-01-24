import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FormContact from '../../Components/FormContact/FormContact'
import {useTitle} from '../../hooks/useTitle'
import SuccessAlert from '../../Components/Alerts/SuccessAlert'
import ErrorAlert from '../../Components/Alerts/ErrorAlert'

import { alertSweet} from '../../Components/Alerts/alertSweet'

function Contact() {
    useTitle('Contacto')

    const [activeAlert, setActiveAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    return (
        <div className='min-h-[67vh]'>
            <FormContact setActiveAlert={setActiveAlert} setErrorAlert={setErrorAlert}/>
            {activeAlert && alertSweet('success', 'Consulta enviada, responderemos a la brevedad', false, false, setActiveAlert, !activeAlert , () => {}, false, 2500)}
            {errorAlert && alertSweet('error', 'Revise todos los campos', false, false, setErrorAlert, !errorAlert , () => {},  false, 2500)}
        </div>
    )
}
// <SuccessAlert message={'Consulta enviada, responderemos a la brevedad'}/>
//            {errorAlert && <ErrorAlert message={'Revise todos los campos'}/>}

export default Contact
