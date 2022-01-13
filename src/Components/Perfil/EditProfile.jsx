import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { updateUser } from '../../actions/actionAuth';


function EditProfile() {
    const dispatch = useDispatch();
    const { user, route } = useSelector(state => state.auth)
    const [input, setInput] = useState ({
        name: user.nombre,
        lastName: user.apellido,
        dateBirth: user.fechaNacimiento,
        dni: user.DNI,
        email: user.correoElectronico,
        tel: user.telefono,
        address: user.direccion,
        province: user.provincia,
    })
    const [activityChanged, setActivityChanged] = useState(false);
    console.log(user)
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setActivityChanged(true)
    }

    function handleSelect(e){
        setInput({
            ...input,
            province: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataUpdated = {
            telefono: input.tel,
            correoElectronico: input.email,
            provincia: input.province,
            direccion: input.address,
            DNI: input.dni,
            localidad: user.localidad,
            password: "soylomas"
        }
        dispatch(updateUser(input));
        alert("Cambios guardados con éxito")
    }
    return (
            <div className='flex w-full items-center justify-start px-4 py-12 sm:px-6 lg:px-8'>
            {/* <h3 className='col-span-4 row-span-1 text-left font-bold text-primary text-2xl'>Mi Cuenta</h3> */}
            <div className="w-full max-w-md space-y-8">
                <form className="mt-8 space-y-6 " onSubmit={e => handleSubmit(e)}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="grid items-center w-90vw sm:grid-cols-4 sm:grid-rows-2 grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm">
                        <h3 className='col-span-4 row-span-1 text-left font-bold text-primary text-2xl'>Datos Personales</h3>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="name">Nombre </label>
                            <input 
                            name="name" 
                            type="text" 
                            value={input.name}
                            className="relative block w-full text-xl px-3 py-2  text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="lastName">Apellido </label>
                            <input 
                            name="lastName" 
                            type="text" 
                            value={input.lastName} 
                            className="relative block w-full text-xl px-3 py-2  text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="dateBirth">Fecha de Nacimiento </label>
                            <input 
                            name="dateBirth" 
                            type="text" 
                            value={input.dateBirth}
                            className="relative block w-full text-xl px-3 py-2 my-3 text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="dni">Dni </label>
                            <input 
                            name="dni" 
                            type="dni" 
                            value={input.dni} 
                            className="relative block w-full text-xl px-3 py-2 my-3 text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            disabled />
                        </div>
                    </div>
                    <div className="grid items-center w-90vw sm:grid-cols-4 sm:grid-rows-2 grid-cols-3 grid-rows-6 gap-4 -space-y-px rounded-md shadow-sm">
                        <h3 className='col-span-4 row-span-1 text-left font-bold text-primary text-2xl'>Datos de contacto</h3>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="email">Email </label>
                            <input 
                            onChange={e => handleChange(e)} 
                            name="email" 
                            type="email"
                            autoComplete="email" 
                            value={input.email} 
                            placeholder="Tu email"
                            required
                            className="relative block w-full text-xl px-3 py-2 my-3 text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            // className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                            />
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="tel">Teléfono </label>
                            <input 
                            onChange={e => handleChange(e)} 
                            name="tel" 
                            type="tel"
                            autoComplete="tel" 
                            value={input.tel} 
                            placeholder="Tu dirección"
                            required
                            className="relative block w-full text-xl px-3 py-2 my-3 text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            />
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="address">Dirección </label>
                            <input 
                            onChange={e => handleChange(e)} 
                            name="address" 
                            type="text"
                            autoComplete="address" 
                            value={input.address} 
                            placeholder="Tu dirección"
                            required 
                            className="relative block w-full text-xl px-3 py-2 my-3 text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            />
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-2 sm:row-span-1 rounded-md shadow-sm">
                            <label className="font-semibold text-lg" htmlFor="province">Provincia </label>
                            <select 
                            onChange={e => handleSelect(e)} 
                            name="province" 
                            id="province"
                            className="relative block w-full text-xl px-3 py-2 my-3 text-gray-500 font-semibold placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 " 
                            required
                            >
                                <option value={input.province} selected>{input.province}</option>
                                {/* {provinces?.map((province, i) => (
                                    <option value={province.id} key={i}>{province.name}</option>
                                ))} */}
                            </select>
                        </div>
                        <div className="-space-y-px col-span-3 row-span-1 sm:col-span-1 sm:row-span-1 rounded-md shadow-sm">
                            <button 
                            type="submit" 
                            value="Guardar Cambios"
                            className=" disabled:bg-gray-500 relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                            disabled={
                                !activityChanged ||
                                !input.email ||
                                !input.tel ||
                                !input.address ||
                                !input.province
                            }>Guardar Cambios</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
