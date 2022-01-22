import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllProviders} from "./../../actions/actionProviders";

function CartillaMedica() {
    const dispatch = useDispatch();
    const {providers} = useSelector((state) => state.providers);
    console.log(
        providers, "profesionales"
    )
    useEffect(() => {
        dispatch(getAllProviders())
    }, [])

    return (
        <table className="mx-auto mt-10 text-gray-900 bg-white shadow-none w-80vw bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
                <thead>
                    <tr>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Profesional</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Especialidad</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">E-mail</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Teléfono</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Provincia</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {providers ?
                        providers.map((prof, index) => (
                            <tr key={index} className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <td className="p-2">Dr. {prof.nombre} {prof.apellido}</td>
                                <td className="p-2">{prof.especID.nombre}</td>
                                <td className="p-2">{prof.mail}</td>
                                <td className="p-2">{prof.telefono}</td>
                                <td className="flex justify-center p-2">{prof.provinciaID}</td>
                                <td className="flex justify-center p-2">{prof.ciudadID}</td>
                            </tr>
                        )) : <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"><td className="p-2">Sin profesionales activos</td></tr>}
                </tbody>
            </table>
        // <div className="flex flex-col w-full bg-cover start min-h-70vh contenair" style={{ backgroundImage: `url(${Logo})` }}>
        //     <table className="mx-auto mt-10 text-gray-900 bg-white shadow-none w-80vw bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
        //         <thead>
        //             <tr>
        //                 <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Nombre</th>
        //                 <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Teléfono</th>
        //                 <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Mail</th>
        //                 <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Provincia</th>
        //                 <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Localidad</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {typeof pharmacies === 'object' ?
        //                 pharmacies.map((p) => (
        //                     <tr key={p._id} className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
        //                         <td className="p-2">{p.nombre}</td>
        //                         <td className="p-2">{p.telefono}</td>
        //                         <td className="p-2">{p.mail}</td>
        //                         <td className="p-2">{p.direccion}</td>
        //                         <td className="p-2">{p.provinciaID.nombre}</td>
        //                         <td className="p-2">{p.ciudadID.localidad}</td>
        //                     </tr>
        //                 )) : <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"><td className="p-2">Sin consultas</td></tr>}
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default CartillaMedica;
