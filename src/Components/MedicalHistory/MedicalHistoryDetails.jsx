import React from 'react'
import Logo from "./../../assets/bg2.jpg"

function MedicalHistoryDetails() {

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
                professionalName: "Dr. Sinicco",
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
        <div>
            <div className="flex items-center justify-center w-full min-h-screen bg-cover contenair" style={{ backgroundImage: `url(${Logo})` }}>
                {/* card */}
                <div className="w-1/2 p-5 bg-white bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
                    <div className="flex justify-between font-semibold header-card">
                        <p>Historial de Consultas</p>
                    </div>
                    {/* end header */}
                    {history.consult.map((consult, index) => (
                    <div key={index} className="flex flex-col mt-5 divide-y card-content gap-y-3">
                        <div className="flex items-center justify-between card-content-profil">
                            <div className="flex items-center gap-x-2">
                                <div className="text-s card-name-user">
                                    <h3 className="font-semibold">{consult.date}</h3>
                                    <div className="flex items-center gap-x-1">
                                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                                        <span>{consult.professionalName}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button className="flex items-center px-2 py-1 text-white bg-gray-500 text-s hover:bg-gray-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                                    <span>{consult.specialty}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MedicalHistoryDetails
