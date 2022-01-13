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
        <Link className='relative flex flex-col justify-center p-4 bg-white  md:col-span-1 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined sm:row-span-1 sm:col-span-3 md:row-span-1' to="/afiliado/historial">
                <div>
                    <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
                        <h3>Historial Médico</h3>
                    </div>
                    <div className='flex flex-col px-2.5 font-normal text-white w-full shrink-0'>
                        {history.consult.map((el) => (
                            <li className='flex justify-between sm:px-10 md:px-0 text-left' key={el.professionalName}>
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