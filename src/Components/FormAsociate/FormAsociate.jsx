import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { getPlanes } from "../../actions/actionPlanes";
import { postAfiliate } from "../../actions/actionPlanes";
import { useNavigate } from "react-router-dom";
import { getAllCities } from "../../actions/actionProviders";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
};

export default function FormAsociate({
  provinces,
  cities,
  setOutput,
  output,
  modal,
  setModal,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { planes } = useSelector((state) => state.planes);
  const [errors, setErrors] = useState(true);

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
    setErrors(functionErrors(newInp));
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const newState = [input, ...output];

    setOutput(newState);

    //alert("afiliate create");

    dispatch(postAfiliate(newState));

    setInput({
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
    });
    setErrors(true);
    //navigate("/");
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
    const newOutput = [...output];
    const newOutputFilter = newOutput.filter((f) => f.nombre !== e.nombre);
    setOutput(newOutputFilter);
  }
  const handleChangeProvince = (e) => {
    const newData = {
      ...input,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID))
    setInput(newData);
  };

  return (
    <div className='flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="grid items-center -z-0 grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:grid-cols-4 sm:grid-rows-2">
            <h3 className='col-span-4 row-span-1 text-2xl font-bold text-left text-primary'>Formulario de registro</h3>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="nombre" className="text-lg font-semibold">Nombre</label>
              <input
                required
                className="relative -z-0 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                value={input.nombre}
                name="nombre"
                onChange={(e) => handleChange(e)}
                placeholder="Tu nombre"
              />
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
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="fechaNacimiento" className="text-lg font-semibold">Fecha de Nacimiento</label>
              <input
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="date"
                value={input.fechaNacimiento}
                name="fechaNacimiento"
                onChange={(e) => handleChange(e)}
                placeholder="Fecha de Nacimiento"
              />
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
                <option selected disabled value=''>Seleccionar provincia</option>
                {provinces &&
                  provinces.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
              </select>
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
                <option selected disabled value=''>Seleccionar localidad</option>
                {
                  cities && cities.map(c => (
                    <option key={c._id} value={c._id}>{c.localidad}</option>
                  ))
                }
              </select>
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="planID" className="text-lg font-semibold">Plan</label>
              <select
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                value={input.planID}
                name="planID"
                onChange={(e) => handleSelect(e)}
                placeholder="Seleccionar plan"
              >
                <option selected disabled value=''>Seleccionar plan</option>
                {planes?.map((e) => (
                  <option
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    value={e._id}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label htmlFor="password" className="text-lg font-semibold">Contraseña</label>
              <input
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                placeholder="Contraseña"
              />
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
                {output?.map((e) => (
                      <div className="flex my-4 justify-between items-center">
                        <li value={e.name} className="text-lg py-3 pr-3 font-semibold">{e.nombre} {e.apellido}</li>
                        <button 
                        className="group relative w-10 h-9 flex justify-center p-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => handleDelete(e)}
                        >
                          x
                        </button>
                      {/* <label htmlFor="" value={e.name}>
                        {e.nombre}
                      </label> */}
                      {/* <label htmlFor="" value={e.apellido}>
                        {e.apellido}
                      </label> */}
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
                disabled={
                  errors
                }>Enviar</button>
            </div>
      </div>
    </div>
  );
}
