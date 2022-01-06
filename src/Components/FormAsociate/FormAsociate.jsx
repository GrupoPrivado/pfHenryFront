import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { getPlanes } from "../../actions/actionPlanes";
import { postAfiliate } from "../../actions/actionPlanes";


export default function FormAsociate({setOutput, output}) {
  const dispatch = useDispatch();
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
    
    const newState = [input,...output]

    setOutput(newState)

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
  }
  function handleSelect(e) {
    if (e.target.value !== "select") {
      setInput({
        ...input,
        idPlan: e.target.value,
      });
    }
    
  }
  return (
    <div style={{backgroundColor: 'gray'}}>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Nombre:</label>
          <input
            type="text"
            value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label> Apellido:</label>
          <input
            type="text"
            value={input.apellido}
            name="apellido"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>DNI:</label>
          <input
            type="number"
            value={input.DNI}
            name="DNI"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label> Fecha de Nacimiento:</label>
          <input
            type="date"
            value={input.fechaNacimiento}
            name="fechaNacimiento"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input
            type="number"
            value={input.telefono}
            name="telefono"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={input.correoElectronico}
            name="correoElectronico"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Domicilio:</label>
          <input
            type="text"
            value={input.direccion}
            name="direccion"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Localidad:</label>
          <input
            type="text"
            value={input.localidad}
            name="localidad"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Provincia:</label>
          <input
            type="text"
            value={input.provincia}
            name="provincia"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Agregar miembro</label>
          
            <button>+</button>
          
        </div>
        <div>
          <label>Planes</label>
          <select name="" id="" onChange={(e) => handleSelect(e)}>
            <option value="select">Selecciona tu Plan</option>
            {planes?.map((e) => (
              <option value={e._id}>{e.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
