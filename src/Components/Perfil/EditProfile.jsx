import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { updateUser } from '../../actions/actionAuth';
import { filterByCity, getAllCities, getAllProvinces } from '../../actions/actionProviders';
import Facturas from '../Facturas/Facturas';



function EditProfile({user}) {
    const { cities, provinces } = useSelector((state) => state.providers);
    console.log(cities)
    const dispatch = useDispatch();
    const [input, setInput] = useState ({
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

    }, [user, dispatch])
    

    const [activityChanged, setActivityChanged] = useState(false);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
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
            
        dispatch(updateUser(input));
        //alert("Cambios guardados con éxito")
    }
    return (
            <div className='flex items-center justify-center w-100vw px-4 py-12 sm:px-6 lg:px-2'>
            <div className="w-full flex items-center justify-center flex-wrap space-y-8">
                <form className="mt-8 space-y-6 " onSubmit={e => handleSubmit(e)}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:grid-cols-4 sm:grid-rows-2">
                        <h3 className='col-span-4 row-span-1 text-2xl font-bold text-left text-primary'>Datos Personales</h3>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="name">Nombre </label>
                            <input 
                            name="name" 
                            type="text" 
                            value={user.nombre || ''}
                            className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="lastName">Apellido </label>
                            <input 
                            name="lastName" 
                            type="text" 
                            value={user.apellido || ''} 
                            className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="dateBirth">Fecha de Nacimiento </label>
                            <input 
                            name="dateBirth" 
                            type="text" 
                            value={user.fechaNacimiento || ''}
                            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="dni">Dni </label>
                            <input 
                            name="dni" 
                            type="dni" 
                            value={user.DNI || ''} 
                            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                    </div>
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
                            // className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                            />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="tel">Teléfono </label>
                            <input 
                            onChange={e => handleChange(e)} 
                            name="telefono" 
                            type="tel"
                            autoComplete="telefono" 
                            value={input.telefono || ''} 
                            placeholder="Tu dirección"
                            required
                            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            />
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
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="provincia">Provincia </label>
                            <select value={input.provinciaID}
                            onChange={handleChangeProvince} 
                            name="provinciaID" 
                            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 bg-white" 
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
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="ciudadID">Localidad </label>
                            <select 
                            onChange={handleChange} 
                            value={input.ciudadID}
                            name="ciudadID" 
                            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 bg-white " 
                            required
                            >
                                {/* <option defaultValue={input.provincia} value={input.provincia} >{input.provincia}</option> */}
                                <option selected={input.ciudadID === '-' ? true : false}>Seleccione ciudad</option>
                                {
                                    cities && cities.map(c => (
                                        <option key={c._id} value={c._id}>{c.localidad}</option>
                                    ))
                                }
                                {/* {provinces?.map((province, i) => (
                                    <option value={province.id} key={i}>{province.name}</option>
                                ))} */}
                            </select>
                        </div>

                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-1 sm:row-span-1">
                            <button 
                            type="submit" 
                            value="Guardar Cambios"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md disabled:bg-gray-500 bg-primary group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
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
