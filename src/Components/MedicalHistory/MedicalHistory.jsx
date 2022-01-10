import React from 'react'
import {Link} from "react-router-dom"

function MedicalHistory() {
    const history = {
        consult: [
            {
                date: "01/01/2022",
                professionalName: "Dra. Fortunato",
                specialty: "Dermatología"
            },
            {
                date: "02/01/2022",
                professionalName: "Dr. Machado",
                specialty: "Kinesiología"
            },
            {
                date: "03/01/2022",
                professionalName: "Dr. Barbieri",
                specialty: "Traumatología"
            },
            {
                date: "04/01/2022",
                professionalName: "Dr. Sinnico",
                specialty: "Clínica médica"
            },
            {
                date: "05/01/2022",
                professionalName: "Dr. Padro",
                specialty: "Urología"
            },
            {
                date: "06/01/2022",
                professionalName: "Dra. Perassi",
                specialty: "Ginecología"
            }
    ]
    }
    return (
        <Link to="/afiliado/historial">
                <div className="relative flex flex-col justify-center p-4 bg-white md:col-span-2 md:row-span-2 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                    <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
                        <h1>Historial Médico</h1>
                    </div>
                    <div className='flex flex-col justify-around px-2.5 w-full font-normal text-white shrink-0'>
                        {history.consult.map((el) => (
                            <li className='flex justify-between text-left' key={el.professionalName}>
                                <p>{el.date}</p>
                                <p>{el.specialty}</p>
                            </li>
                        ))}
                        </div>
                </div>
        </Link>
    )
}

export default MedicalHistory