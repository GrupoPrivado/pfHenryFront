import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCities } from "../../actions/actionProviders";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  console.log("arraykey", arrayKeys);
  console.log("arraydata", arrayData);

  if (arrayKeys.length === arrayData.length + 1) {
    return false;
  } else {
    return true;
  }
};

export default function FormAddAsociateGroup({
  provinces,
  cities,
  setOutput,
  output,
  modal,
  setModal,
}) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(true);
  console.log(errors);
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
  // function handleSelect(e) {
  //   if (e.target.value !== "") {
  //     setInput({
  //       ...input,
  //       parentesco: e.target.value,
  //     });
  //   }
  // }
  function handleSubmit(e) {
    e.preventDefault();
    alert("afiliate create");
    setOutput([...output, input]);

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
      parentesco: "",
      planID: "",
    });
    setErrors(true);
    setModal(!modal);
  }

  const handleChangeProvince = (e) => {
    const newData = {
      ...input,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInput(newData);
  };
//    position: fixed;
// top: 0;
// left: 0;
// width:75%;
// height: 75%;
// background: rgba(0, 0, 0, 0.6);
  return (
    <div className='flex items-center justify-center w-full px-4 py-6 sm:px-6 lg:px-8'>
      <div className="fixed flex justify-center items-center inset-0 transition-opacity bg-gray-900 bg-opacity-90">
        <span className="hidden flex justify-center sm:inline-block sm:align-middle sm:h-screen items-center" aria-hidden="true">
          &#8203;
        </span>
        <div className="p-4 flex justify-center items-center z-10 inline-block w-50vw overflow-hidden  transition-all transform border-t border-l border-solid shadow-xl bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle border-t-gray-200 border-l-gray-200">
          <div className=" space-y-8 ">
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
                </div>
              </div>

              <div className="flex justify-around">
                {errors ? (
                  <button
                    type="submit"
                    form="formulario"
                    disabled={errors}
                    onClick={handleSubmit}
                    className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="formulario"
                    onClick={handleSubmit}
                    className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                )}
                <button
                  onClick={() => setModal(!modal)}
                  className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
