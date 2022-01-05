import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPlanes } from "../../actions";

export default function FormAsociate() {
 const dispatch = useDispatch();
  const planes = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(getPlanes());
    
  }, [dispatch]);

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
  });
 
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <form action="">
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
          <input type="text" value={input.direccion}
                      name="direccion"
                      onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Localidad:</label>
          <input type="text" value={input.localidad}
                      name="localidad"
                      onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label>Provincia:</label>
          <input type="text" 
          value={input.provincia}
          name="provincia"
          onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label>Agregar miembro</label>
          <Link to="/asociate/group">
            <button>+</button>
          </Link>
        </div>
        <div>
          <label>Planes</label>
          <select name="" id="">
              {planes?.map(e=> (
              <option value="">{e.name}</option>))}
            
          </select>
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}
