import React, { useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getFacturas } from '../../actions/actionFacturas';

function Facturas() {
    const dispatch = useDispatch();
    const {facturas } = useSelector((state) => state.facturas);

    console.log("facturas <>>>>>", facturas);

    useEffect(() => {
        dispatch(getFacturas());
    }, [dispatch]);

    const facturasPrueba = [{ 
        numFactura: 12,
        nombre: "matias", 
        plan: "Oro",
        monto: "13050"} ]

    return (
        <div className='flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8'>
            <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:grid-cols-4 sm:grid-rows-2">
            <h3 className='col-span-4 row-span-1 text-2xl font-bold text-left text-primary'>Mis Facturas</h3>
            <table className="bg-white text-gray-900 shadow-none w-90vw mx-auto mt-10">
                <thead>
                    <tr>
                        <th className="bg-primary text-white p-2">Factura</th>
                        <th className="bg-primary text-white p-2">Nombre</th>
                        <th className="bg-primary text-white p-2">Plan</th>
                        <th className="bg-primary text-white p-2">Monto</th>
                        <th className="bg-primary text-white p-2">-</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas &&
                    facturas.map((f) => (
                        <tr key={f._id} className="bg-blue-100 text-blue-900 text-center">
                            <td className="px-2 py-3">N° {f.numFactura}</td>
                            <td className="px-2 py-3">{f.afiliadoID.nombre}</td>
                            <td className="px-2 py-3">{f.planID.name}</td>
                            <td className="px-2 py-3">${f.precio}</td>
                            <td className="px-2 py-3">
                                <form action="http://localhost:3001/api/mercadopago" method="POST">
                                    <input type="hidden" name="description" value={f.numFactura} />
                                    <input type="hidden" name="codePlan" value={f.planID.name} />
                                    <input type="hidden" name="precio" value={f.precio} />
                                    <input type="submit" value="Pagar" target="_blank" className="px-3 py-2 rounded-md text-sm font-medium bg-secondary text-white cursor-pointer"/>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div> 
    );
}

export default Facturas;