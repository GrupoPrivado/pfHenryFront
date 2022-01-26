import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCities } from "../../actions/actionProviders";
import { addFamiliar } from "../../actions/actionRegister";
import { validate } from "../../utils/constantes";
import date from "./../../utils/date.js"

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");


  if (arrayKeys.length === arrayData.length + 1) {
    return false;
  } else {
    return true;
  }
};

export default function FormAddAsociateGroup({
  provinces,
  cities,
  modal,
  setModal,
}) {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const dispatch = useDispatch();
  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({})
  
  const [input, setInput] = useState({
    idAf: randomNumber(3000, 4000),
    nombre: "",
    apellido: "",
    DNI: "",
    fechaNacimiento: "",
    telefono: "",
    correoElectronico: "",
    ciudadID: "",
    provinciaID: "",
    direccion: "",
    //planID: "",
    parentesco: "",
  });

  function handleChange(e) {
    const newInp = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(newInp);
    setErrors(functionErrors(newInp));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validateError = validate(input)
    setErrores(validateError)
    if (Object.entries(validateError).length <= 0) {
      dispatch(addFamiliar(input))
      setModal(false);
    }
  }

  const handleChangeProvince = (e) => {
    const newData = {
      ...input,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInput(newData);
  };

  return (
    <div className='flex items-center justify-center w-full px-4 py-6 sm:px-6 lg:px-8'>
      <div className="fixed inset-0 flex items-center justify-center transition-opacity bg-gray-900 bg-opacity-90">
        <span className="flex items-center justify-center sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="z-10 flex items-center justify-center p-4 overflow-hidden transition-all transform border-t border-l border-solid shadow-xl w-50vw bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle border-t-gray-200 border-l-gray-200">
          <div className="space-y-8 ">
            {/* no modificar */}
            <form className="mt-2 space-y-6 ">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-40vw sm:grid-cols-4 sm:grid-rows-2">
                <h3 className='col-span-4 row-span-1 text-2xl font-bold text-left text-primary'>Agregar miembro</h3>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="nombre" className="text-lg font-semibold">Nombre</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={input.nombre}
                    name="nombre"
                    onChange={(e) => handleChange(e)}
                    placeholder="Tu nombre"
                  />
                  {errores.nombre && (
                    <p className="absolute text-red-700">{errores.nombre}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="apellido" className="text-lg font-semibold">Apellido</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={input.apellido}
                    name="apellido"
                    onChange={(e) => handleChange(e)}
                    placeholder="Tu apellido"
                  />
                  {errores.apellido && (
                    <p className="absolute text-red-700">{errores.apellido}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="DNI" className="text-lg font-semibold">DNI</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="number"
                    value={input.DNI}
                    name="DNI"
                    onChange={(e) => handleChange(e)}
                    placeholder="Tu DNI"
                  />
                  {errores.DNI && (
                    <p className="absolute text-red-700">{errores.DNI}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="fechaNacimiento" className="text-lg font-semibold">Fecha de Nacimiento</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="date"
                    value={input.fechaNacimiento}
                    name="fechaNacimiento"
                    max={date}
                    onChange={(e) => handleChange(e)}
                    placeholder="Fecha de Nacimiento"
                  />
                  {errores.fechaNacimiento && (
                    <p className="absolute text-red-700">{errores.fechaNacimiento}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="telefono" className="text-lg font-semibold">Teléfono</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="tel"
                    value={input.telefono}
                    name="telefono"
                    onChange={(e) => handleChange(e)}
                    placeholder="Tu teléfono"
                  />
                  {errores.telefono && (
                    <p className="absolute text-red-700">{errores.telefono}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="correoElectronico" className="text-lg font-semibold">Email</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="email"
                    value={input.correoElectronico}
                    name="correoElectronico"
                    onChange={(e) => handleChange(e)}
                    placeholder="Tu e-mail"
                  />
                  {errores.correoElectronico && (
                    <p className="absolute text-red-700">{errores.correoElectronico}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="direccion" className="text-lg font-semibold">Domicilio</label>
                  <input
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={input.direccion}
                    name="direccion"
                    onChange={(e) => handleChange(e)}
                    placeholder="Tu domicilio"
                  />
                  {errores.direccion && (
                    <p className="absolute text-red-700">{errores.direccion}</p>
                  )}
                </div>
                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="provincia" className="text-lg font-semibold">Provincia</label>
                  <select
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={input.provinciaID}
                    name="provincia"
                    onChange={handleChangeProvince}
                    placeholder="Seleccionar provincia"
                  >
                    <option disabled value=''>Seleccionar provincia</option>
                    {provinces &&
                      provinces.map((p) => (
                        <option key={p._id} value={p._id}>
                          {p.nombre}
                        </option>
                      ))}
                  </select>
                  {errores.provinciaID && (
                    <p className="absolute text-red-700">{errores.provinciaID}</p>
                  )}
                </div>

                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="ciudadID" className="text-lg font-semibold">Localidad</label>
                  <select
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={input.ciudadID}
                    name="ciudadID"
                    onChange={handleChange}
                    placeholder="Seleccionar localidad"
                  >
                    <option disabled value=''>Seleccionar localidad</option>
                    {
                      cities && cities.map(c => (
                        <option key={c._id} value={c._id}>{c.localidad}</option>
                      ))
                    }
                  </select>
                  {errores.ciudadID && (
                    <p className="absolute text-red-700">{errores.ciudadID}</p>
                  )}
                </div>

                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label htmlFor="parentesco" className="text-lg font-semibold">Seleccionar parentesco</label>
                  <select

                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={input.parentesco}
                    name="parentesco"
                    onChange={handleChange}
                    placeholder="Seleccionar parentesco"
                  >
                    <option value="">Parentesco</option>
                    <option value="hijo/a">Hijo/a</option>
                    <option value="conyugue">Conyugue</option>
                    <option value="familiar">Familiar a cargo</option>
                  </select>
                  {errores.parentesco && (
                    <p className="absolute text-red-700">{errores.parentesco}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-around">
                <button
                  onClick={handleSubmit}
                  className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md group w-28 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar
                </button>

                <button
                  onClick={() => setModal(!modal)}
                  className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md group w-28 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
