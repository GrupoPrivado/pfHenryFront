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
                <div className="relative flex flex-col justify-center p-4 bg-white shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                    <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
                        <h1>Historial Médico</h1>
                    </div>
                    <div className='flex flex-col justify-around w-full font-normal text-white shrink-0'>
                        {history.consult.map((el) => (
                            <li className='flex justify-around text-left' key={el.professionalName}>
                                <p>{el.date}</p>
                                <p>{el.specialty}</p>
                            </li>
                        ))}
                        </div>
                </div>
        </Link>
    )
}
<div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                <div className="absolute text-white right-2">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="mt-4 mb-2 text-lg font-medium text-white">Front-End</div>
                                <div className="font-normal text-white">Visual page, graphic pages, colors, button positions and
                                    interfaces Required skills are HTML ,CSS , JAVASCRIPT.</div>
                            </div>

export default MedicalHistory