import React, { useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getFacturas } from '../../actions/actionFacturas';
import { getItem } from "../../actions/actionAuth";

function Facturas() {
    const dispatch = useDispatch();
    const {facturas } = useSelector((state) => state.facturas);



    useEffect(() => {
        dispatch(getFacturas());
    }, []);

        const token = getItem('userToken');

    return (
            <div className="grid items-end grid-cols-1 grid-rows-1 gap-4  rounded-md shadow-sm w-90vw sm:grid-cols-1 sm:grid-rows-1">
            <h3 className='col-span-5 row-span-1 text-2xl font-bold text-left text-primary mt-5'>Mis Facturas</h3>
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
                                {f.status === "approved" ? <span>Pagado</span> : 
                                <form action="https://arpymedical.herokuapp.com/api/mercadopago" method="POST">
                                    <input type="hidden" name="token" value={token} />
                                    <input type="hidden" name="description" value={f.numFactura} />
                                    <input type="hidden" name="codePlan" value={f.planID.name} />
                                    <input type="hidden" name="precio" value={f.precio} />
                                    <input type="submit" value="Pagar" target="_blank" className="px-3 py-2 rounded-md text-sm font-medium bg-secondary text-white cursor-pointer"/>
                                </form>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
    );
}

export default Facturas;