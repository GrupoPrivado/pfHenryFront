import React, { useEffect } from 'react'
import Logo from "./../../assets/bg2.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { getHistorial } from "../../actions/actionConsultas";


function MedicalHistoryDetails() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { consultas } = useSelector(state => state.consultas);
    useEffect(() => {
        dispatch(getHistorial())
    }, [dispatch])

    return (
        <div className="flex flex-col w-full bg-cover start min-h-70vh contenair" style={{ backgroundImage: `url(${Logo})` }}>
            <h3 className='mt-3 ml-3 text-4xl font-bold text-left text-white'>Historial de consultas</h3>
            <table className="mx-auto mt-10 text-gray-900 bg-white shadow-none w-80vw bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
                <thead>
                    <tr>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Fecha</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Especialidad</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Profesional</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.length ?
                        consultas.map((consult, index) => (
                            <tr key={index} className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <td className="p-2">{consult.fechaConsulta}</td>
                                <td className="p-2">{consult.especID.nombre}</td>
                                <td className="p-2">Dr.{consult.profesionalID.apellido}, {consult.profesionalID.nombre}</td>
                            </tr>
                        )) : <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"><td className="p-2">Sin consultas</td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default MedicalHistoryDetails
