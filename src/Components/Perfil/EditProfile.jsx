import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from '../../actions/actionAuth';
import { filterByCity, getAllCities, getAllProvinces } from '../../actions/actionProviders';
import Facturas from '../Facturas/Facturas';
import { validateContactDetails } from "../../utils/constantes";

function EditProfile({ user }) {
    const [errors, setErrors] = useState({});
    const { cities, provinces } = useSelector((state) => state.providers);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        correoElectronico: '',
        telefono: '',
        direccion: '',
        provinciaID: '',
        ciudadID: ''
    })
    useEffect(() => {
        setInput({
            correoElectronico: user.correoElectronico,
            telefono: user.telefono,
            direccion: user.direccion,
            provinciaID: user.provinciaID,
            ciudadID: user.ciudadID
        })
        // dispatch(getAllProvinces())
        // dispatch(getAllCities(user.provinciaID))

    }, [user])

    const [activityChanged, setActivityChanged] = useState(false);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setActivityChanged(true)
    }

    const handleChangeProvince = (e) => {
        const newData = {
            ...input,
            ciudadID: '-',
            provinciaID: e.target.value
        }
        dispatch(getAllCities(newData.provinciaID))
        setInput(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateError = validateContactDetails(input);
        setErrors(validateError);
        if (Object.entries(validateError).length <= 0) {
            dispatch(updateUser(input));
        }
        //alert("Cambios guardados con éxito")
    }
    return (
        <div className='flex items-center justify-center px-4 py-12 w-100vw sm:px-6 lg:px-2'>
            <div className="flex flex-wrap items-center justify-center w-full space-y-8">
                <form className="mt-8 space-y-6 " onSubmit={e => handleSubmit(e)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="grid items-center grid-cols-3 grid-rows-6 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:grid-cols-4 sm:grid-rows-2">
                        <h3 className='col-span-4 row-span-1 text-2xl font-bold text-left text-primary'>Datos de contacto</h3>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="email">Email </label>
                            <input
                                onChange={e => handleChange(e)}
                                name="correoElectronico"
                                type="email"
                                autoComplete="email"
                                value={input.correoElectronico || ''}
                                placeholder="Tu email"
                                required
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                            />
                            {errors.correoElectronico && (
                                <p className="absolute text-red-700">{errors.correoElectronico}</p>
                            )}
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="tel">Teléfono </label>
                            <input
                                onChange={e => handleChange(e)}
                                name="telefono"
                                type="tel"
                                autoComplete="telefono"
                                value={input.telefono || ''}
                                placeholder="Tu teléfono"
                                required
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                            />
                            {errors.telefono && (
                                <p className="absolute text-red-700">{errors.telefono}</p>
                            )}
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="address">Dirección </label>
                            <input
                                onChange={e => handleChange(e)}
                                name="direccion"
                                type="text"
                                autoComplete="address"
                                value={input.direccion || ''}
                                placeholder="Tu dirección"
                                required
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                            />
                            {errors.direccion && (
                                <p className="absolute text-red-700">{errors.direccion}</p>
                            )}
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="provincia">Provincia </label>
                            <select value={input.provinciaID}
                                onChange={handleChangeProvince}
                                name="provinciaID"
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
                                required
                            >
                                {/* <option defaultValue={input.provincia} value={input.provincia} >{input.provincia}</option> */}
                                {/* <option>{input.provincia || 'Seleccione una provincia'}</option> */}
                                {
                                    provinces && provinces.map(p => (
                                        <option key={p._id} value={p._id}>{p.nombre}</option>
                                    ))
                                }
                                {/* {provinces?.map((province, i) => (
                                    <option value={province.id} key={i}>{province.name}</option>
                                ))} */}
                            </select>
                            {errors.provinciaID && (
                                <p className="absolute text-red-700">{errors.provinciaID}</p>
                            )}
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="ciudadID">Localidad </label>
                            <select
                                onChange={handleChange}
                                value={input.ciudadID}
                                name="ciudadID"
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                                required
                            >
                                {/* <option defaultValue={input.provincia} value={input.provincia} >{input.provincia}</option> */}
                                <option>Seleccione ciudad</option>
                                {
                                    cities && cities.map(c => (
                                        <option key={c._id} value={c._id}>{c.localidad}</option>
                                    ))
                                }
                                {/* {provinces?.map((province, i) => (
                                    <option value={province.id} key={i}>{province.name}</option>
                                ))} */}
                            </select>
                            {errors.ciudadID && (
                                <p className="absolute text-red-700">{errors.ciudadID}</p>
                            )}
                        </div>

                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-1 sm:row-span-1">
                            <button
                                type="submit"
                                value="Guardar Cambios"
                                className="w-full px-4 py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-md disabled:bg-gray-500 bg-primary group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                disabled={
                                    !activityChanged ||
                                    !input.correoElectronico ||
                                    !input.telefono ||
                                    !input.direccion
                                }>Guardar Cambios</button>
                        </div>
                    </div>
                </form>
                <Facturas />
            </div>
        </div>
    )
}

export default EditProfile
