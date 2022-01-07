import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { getPlanes } from "../../actions/actionPlanes";
import { postAfiliate } from "../../actions/actionPlanes";
import { useNavigate } from "react-router-dom";

export default function FormAsociate({ setOutput, output }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { planes } = useSelector((state) => state.planes);

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
    idPlan: "",
    password: "",
    parentezco: "titular",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newState = [input, ...output];

    setOutput(newState);

    alert("afiliate create");

    dispatch(postAfiliate(newState));

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
      idPlan: "",
      password: "",
    });
    navigate("/");
  };
  function handleSelect(e) {
    if (e.target.value !== "select") {
      setInput({
        ...input,
        idPlan: e.target.value,
      });
    }
  }
  function handleDelete(e) {
    const newOutput = [...output];
    const newOutputFilter = newOutput.filter((f) => f.nombre !== e.nombre);
    setOutput(newOutputFilter);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="dni" className="text-sm font-medium rounded-md">
            {" "}
            Nombre:
          </label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e)}
            placeholder="Nombre"
          />
        </div>

        <div className="flex">
          <label className="text-sm font-medium rounded-md"> Apellido:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            value={input.apellido}
            name="apellido"
            onChange={(e) => handleChange(e)}
            placeholder="Apellido"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">DNI:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="number"
            value={input.DNI}
            name="DNI"
            onChange={(e) => handleChange(e)}
            placeholder="DNI"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">
            {" "}
            Fecha de Nacimiento:
          </label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="date"
            value={input.fechaNacimiento}
            name="fechaNacimiento"
            onChange={(e) => handleChange(e)}
            placeholder="Fecha de Nacimiento"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">Telefono:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="number"
            value={input.telefono}
            name="telefono"
            onChange={(e) => handleChange(e)}
            placeholder="Telefono"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">Email:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            value={input.correoElectronico}
            name="correoElectronico"
            onChange={(e) => handleChange(e)}
            placeholder="Correo Electronico"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">Domicilio:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            value={input.direccion}
            name="direccion"
            onChange={(e) => handleChange(e)}
            placeholder="Domicilio"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">Localidad:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            value={input.localidad}
            name="localidad"
            onChange={(e) => handleChange(e)}
            placeholder="Localidad"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">Provincia:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            value={input.provincia}
            name="provincia"
            onChange={(e) => handleChange(e)}
            placeholder="Provincia"
          />
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">
            Agregar miembro
          </label>

          <button>+</button>
        </div>
        <div>
          {output?.map((e) => (
            <div className="flex">
              <label htmlFor="" value={e.name}>
                {e.nombre}
              </label>
              <label htmlFor="" value={e.apellido}>
                {e.apellido}
              </label>
              <button onClick={() => handleDelete(e)}>x</button>
            </div>
          ))}
        </div>
        <div className="flex">
          <label className="text-sm font-medium rounded-md">Planes</label>
          <select
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name=""
            id=""
            onChange={(e) => handleSelect(e)}
          >
            <option value="select">Selecciona tu Plan</option>
            {planes?.map((e) => (
              <option
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={e._id}
              >
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex">
          <label className="text-sm font-medium rounded-md">Contraseña:</label>
          <input
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="password"
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Contraseña"
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
