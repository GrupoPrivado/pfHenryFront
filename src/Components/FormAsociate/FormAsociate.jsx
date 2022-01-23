import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFamiliar,
  findFamiliar,
  registerFamilies,
} from "../../actions/actionRegister";
import { getAllCities } from "../../actions/actionProviders";
import date from "./../../utils/date.js";
import { validate } from "../../utils/constantes";
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'

export default function FormAsociate({
  setEditModal,
  provinces,
  cities,
  modal,
  setModal,
}) {
  const dispatch = useDispatch();
  const { planes } = useSelector((state) => state.planes);
  const { familiarData } = useSelector((state) => state.associate);
  const [errores, setErrores] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    DNI: "",
    fechaNacimiento: "",
    telefono: "",
    correoElectronico: "",
    ciudadID: "",
    provinciaID: "",
    direccion: "",
    planID: "",
    password: "",
    parentesco: "titular",
  });

  function handleChange(e) {
    const newInp = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(newInp);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validate(input);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      const newState = [input, ...familiarData];
      dispatch(registerFamilies(newState));
    }
  };
  function handleSelect(e) {
    if (e.target.value !== "select") {
      setInput({
        ...input,
        planID: e.target.value,
      });
    }
  }
  function handleDelete(e) {
    dispatch(deleteFamiliar(e.target.value));
  }

  const handleEdit = (e) => {
    console.log(e.target.value, 'value edit')
    dispatch(findFamiliar(e.target.value));
    setEditModal(true);
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...input,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInput(newData);
  };

  return (
    <div className="flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm -z-0 w-90vw sm:grid-cols-4 sm:grid-rows-2">
            <h3 className="col-span-4 row-span-1 text-4xl font-bold text-left text-primary">
              Formulario de registro
            </h3>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="nombre" className="text-lg font-semibold">
                Nombre
              </label>
              <input
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none -z-0 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              <label htmlFor="apellido" className="text-lg font-semibold">
                Apellido
              </label>
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
              <label htmlFor="DNI" className="text-lg font-semibold">
                DNI
              </label>
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
              <label
                htmlFor="fechaNacimiento"
                className="text-lg font-semibold"
              >
                Fecha de Nacimiento
              </label>
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
                <p className="absolute text-red-700">
                  {errores.fechaNacimiento}
                </p>
              )}
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="telefono" className="text-lg font-semibold">
                Teléfono
              </label>
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
              <label
                htmlFor="correoElectronico"
                className="text-lg font-semibold"
              >
                Email
              </label>
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
                <p className="absolute text-red-700">
                  {errores.correoElectronico}
                </p>
              )}
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="direccion" className="text-lg font-semibold">
                Domicilio
              </label>
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
              <label htmlFor="provincia" className="text-lg font-semibold">
                Provincia
              </label>
              <select
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                value={input.provinciaID}
                name="provincia"
                onChange={handleChangeProvince}
                placeholder="Seleccionar provincia"
              >
                <option disabled value="">
                  Seleccionar provincia
                </option>
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
              <label htmlFor="ciudadID" className="text-lg font-semibold">
                Localidad
              </label>
              <select
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                value={input.ciudadID}
                name="ciudadID"
                onChange={handleChange}
                placeholder="Seleccionar localidad"
              >
                <option disabled value="">
                  Seleccionar localidad
                </option>
                {cities &&
                  cities.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.localidad}
                    </option>
                  ))}
              </select>
              {errores.ciudadID && (
                <p className="absolute text-red-700">{errores.ciudadID}</p>
              )}
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="planID" className="text-lg font-semibold">
                Plan
              </label>
              <select
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                value={input.planID}
                name="planID"
                onChange={(e) => handleSelect(e)}
                placeholder="Seleccionar plan"
              >
                <option disabled value="">
                  Seleccionar plan
                </option>
                {planes?.map((e) => (
                  <option
                    key={e._id}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    value={e._id}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
              {errores.planID && (
                <p className="absolute text-red-700">{errores.planID}</p>
              )}
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="password" className="text-lg font-semibold">
                Contraseña
              </label>
              <input
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                placeholder="Contraseña"
              />
              {errores.password && (
                <p className="absolute text-red-700">{errores.password}</p>
              )}
            </div>
          </div>
        </form>

        <div>
          <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
            <label className="text-lg font-semibold">Miembro familiar</label>
            <button
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              onClick={() => setModal(!modal)}
            >
              Agregar
            </button>
          </div>

          <div>
            <ul>
              {familiarData?.map((e, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between my-4"
                >
                  <li
                    value={e.name}
                    className="py-3 pr-3 text-lg font-semibold"
                  >
                    {e.nombre} {e.apellido}
                  </li>
                  <div className="flex gap-2">
                    <button
                      value={e.idAf}
                      className="relative flex justify-center w-10 p-2 text-sm font-medium text-white bg-secondary border border-transparent rounded-md group h-9 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleEdit}
                    >
                     <PencilIcon className="pointer-events-none h-5 w-5 text-white"/>

                    </button>
                    <button
                      value={e.idAf}
                      className="flex justify-center w-10 p-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md group h-9 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleDelete}
                    >
                     <TrashIcon className="pointer-events-none h-5 w-5 text-white"/>
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-1 sm:row-span-1">
          <button
            onClick={handleSubmit}
            value="Enviar"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md disabled:bg-gray-500 bg-primary group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
// disabled={
//   errors
// }
