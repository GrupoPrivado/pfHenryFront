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
      <div>
        <label> Nombre:</label>
        <input type="text" value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e) }/>
      </div>

      <div>
        <label> Apellido:</label>
        <input type="text"value={input.apellido}
            name="apellido"
            onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label>DNI:</label>
        <input type="number" value={input.DNI}
            name="DNI"
            onChange={(e) => handleChange(e)}/>
      </div>
      <div>
        <label> Fecha de Nacimiento:</label>
        <input type="date" value={input.fechaNacimiento}
            name="fechaNacimiento"
            onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label>Telefono:</label>
        <input type="number"value={input.telefono}
            name="telefono"
            onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text"value={input.correoElectronico}
            name="correoElectronico"
            onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label>Domicilio:</label>
        <input type="text" value={input.direccion}
            name="direccion"
            onChange={(e) => handleChange(e)}/>
      </div>
      <div>
        <label>Localidad:</label>
        <input type="text" value={input.localidad}
            name="localidad"
            onChange={(e) => handleChange(e)}/>
      </div>
      <div>
        <label>Provincia:</label>
        <input type="text" value={input.provincia}
            name="provincia"
            onChange={(e) => handleChange(e)}/>
      </div>
      <div>
        <select name="" id="" onChange={(e) => handleSelect(e)}>
       <option value="select">Parentezco</option>
          <option value="hijo/a">Hijo/a</option>
          <option value="conyugue">Conyugue</option>
          <option value="familiar">Familiar a cargo</option>
        </select>
      </div>

      <div>
        <button form="formulario" onClick={handleClick}>Guardar</button>
      </div>
      </form>
    </div>
  );
}
