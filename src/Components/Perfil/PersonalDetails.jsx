import React 
// ,{ useEffect, useState } 
from 'react';
// import { useDispatch, useSelector } from "react-redux"

function PersonalDetails({ user }) {
    return (
        <div className="flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <form className="mt-8 space-y-6 ">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:w-40vw sm:grid-cols-3 sm:grid-rows-5">
                        <h3 className="col-span-4 row-span-1 text-2xl font-bold text-left text-primary">
                            Datos Personales            </h3>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="name">Nombre </label>
                            <input
                                name="name"
                                type="text"
                                value={user.nombre || ''}
                                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                                disabled />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="lastName">Apellido </label>
                            <input
                                name="lastName"
                                type="text"
                                value={user.apellido || ''}
                                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                                disabled />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="dateBirth">Fecha de Nacimiento </label>
                            <input
                                name="dateBirth"
                                type="text"
                                value={user.fechaNacimiento || ''}
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                                disabled />
                        </div>
                        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
                            <label className="text-lg font-semibold" htmlFor="dni">Dni </label>
                            <input
                                name="dni"
                                type="dni"
                                value={user.DNI || ''}
                                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                                disabled />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalDetails
