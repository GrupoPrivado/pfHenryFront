import React, { useState } from "react";

export default function FormAddAsociateGroup({ setOutput, output }) {

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    DNI: "",
    fechaNacimiento: "",
    telefono: "",
    correoElectronico: "",
    localidad: "",
    provincia: "",
    direccion: "",

    parentezco: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSelect(e) {
    if (e.target.value !== "select") {
      setInput({
        ...input,
        parentezco: e.target.value,
      });
    }
  }
  function handleClick(e) {
    e.preventDefault();
        alert("afiliate create");
    setOutput([
      ...output,
      input,
    ])
    
    setInput({
      nombre: "",
      apellido: "",
      DNI: "",
      fechaNacimiento: "",
      telefono: "",
      correoElectronico: "",
      localidad: "",
      provincia: "",
      direccion: "",
      parentezco: "",
    });
  }

  return (
    <div>
        <form>
      <div className="flex">
        <label className="text-sm font-medium rounded-md"> Nombre:</label>
        <input type="text" value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e) }
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Nombre"/>
      </div>

      <div className="flex">
        <label className="text-sm font-medium rounded-md"> Apellido:</label>
        <input type="text"value={input.apellido}
            name="apellido"
            onChange={(e) => handleChange(e)} 
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Apellido"/>
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md">DNI:</label>
        <input type="number" value={input.DNI}
            name="DNI"
            onChange={(e) => handleChange(e)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="DNI"
            />
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md"> Fecha de Nacimiento:</label>
        <input type="date" value={input.fechaNacimiento}
            name="fechaNacimiento"
            onChange={(e) => handleChange(e)} 
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Fecha de Nacimiento"
            />
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md">Telefono:</label>
        <input type="number"value={input.telefono}
            name="telefono"
            onChange={(e) => handleChange(e)} 
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Telefono"/>
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md">Email:</label>
        <input type="text"value={input.correoElectronico}
            name="correoElectronico"
            onChange={(e) => handleChange(e)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
            placeholder="Correo Electronico"/>
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md">Domicilio:</label>
        <input type="text" value={input.direccion}
            name="direccion"
            onChange={(e) => handleChange(e)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Domicilio"/>
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md">Localidad:</label>
        <input type="text" value={input.localidad}
            name="localidad"
            onChange={(e) => handleChange(e)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Localidad"/>
      </div>
      <div className="flex">
        <label className="text-sm font-medium rounded-md">Provincia:</label>
        <input type="text" value={input.provincia}
            name="provincia"
            onChange={(e) => handleChange(e)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Provincia"/>
      </div>
      <div className="flex">
      <label className="text-sm font-medium rounded-md">Seleccione su parentesco:</label>
        <select name="" id="" onChange={(e) => handleSelect(e)}
         className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm">
       <option value="select">Parentezco</option>
          <option value="hijo/a">Hijo/a</option>
          <option value="conyugue">Conyugue</option>
          <option value="familiar">Familiar a cargo</option>
        </select>
      </div>

      <div className="flex justify-around">
        <button form="formulario" onClick={handleClick}
        className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Guardar</button>
        <button 
        className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Volver</button>
      </div>
      </form>
    </div>
  );
}
