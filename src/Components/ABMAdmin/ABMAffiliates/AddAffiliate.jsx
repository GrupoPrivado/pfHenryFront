import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addAffiliate,
  getAllAffiliates,
  getAllPlans,
} from "../../../actions/actionAMBAdmin";
import AddAdherent from "./addAdherent";

import styles from "./addAffiliate.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddAffiliate = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allPlans } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllPlans());
  }, [dispatch]);

  let [showModalAdherent, setShowModalAdherent] = useState(false);

  const [errors, setErrors] = useState(true);

  let [inputAffiliate, setInputAffiliate] = useState({
    nombre: "",
    apellido: "",
    DNI: 0,
    fechaNacimiento: "",
    telefono: 0,
    correoElectronico: "",
    direccion: 0,
    localidad: "",
    ciudadCP: 0,
    provincia: "",
    plan: "dsfsfds",
    password: "",
  });

  let [outputAffiliate, setOutpuAffiliate] = useState([]);
  let [inputAdherent, setInputAdherent] = useState([]);

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newAffiliate = {
      ...inputAffiliate,
      [event.target.name]: event.target.value,
    };
    setInputAffiliate(newAffiliate);

    setErrors(functionErrors(newAffiliate));

    newAffiliate = {};
  };

  const handleAddAdherent = (data) => {
    setInputAdherent([...inputAdherent, data]);
  };

  const handleSubmitAffiliate = async (event) => {
    event.preventDefault();
    await setOutpuAffiliate([inputAffiliate, ...inputAdherent]);
    let response = await dispatch(addAffiliate(outputAffiliate));
    alert(response.success);
    setInputAffiliate({
      nombre: "",
      apellido: "",
      DNI: 0,
      fechaNacimiento: "",
      telefono: 0,
      correoElectronico: "",
      direccion: 0,
      localidad: "",
      ciudadCP: 0,
      provincia: "",
      plan: "",
      password: "",
    });
    await dispatch(getAllAffiliates());
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputAffiliate({
      nombre: "",
      apellido: "",
      DNI: 0,
      fechaNacimiento: "",
      telefono: 0,
      correoElectronico: "",
      direccion: 0,
      localidad: "",
      ciudadCP: 0,
      provincia: "",
      plan: "",
      password: "",
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Afiliado</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitAffiliate(e)} id="addAffiliate">
            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="nombre"
                autoComplete="off"
                value={inputAffiliate.nombre}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label>Apellido: </label>
              <input
                type="text"
                name="apellido"
                autoComplete="off"
                value={inputAffiliate.apellido}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el apellido...."
              />
            </div>

            <div>
              <label>DNI: </label>
              <input
                type="number"
                name="DNI"
                autoComplete="off"
                value={inputAffiliate.DNI}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el DNI...."
              />
            </div>

            <div>
              <label>Fehca de Nacimiento: </label>
              <input
                type="date"
                name="fechaNacimiento"
                autoComplete="off"
                value={inputAffiliate.fechaNacimiento}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese Fecha Nacimiento...."
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                name="telefono"
                autoComplete="off"
                value={inputAffiliate.telefono}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-Mail: </label>
              <input
                type="email"
                name="correoElectronico"
                autoComplete="off"
                value={inputAffiliate.correoElectronico}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el E-Mail...."
              />
            </div>

            <div>
              <label>Domicilio: </label>
              <input
                type="test"
                name="direccion"
                autoComplete="off"
                value={inputAffiliate.direccion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el domocilio...."
              />
            </div>

            <div>
              <label>Localidad: </label>
              <input
                type="text"
                name="localidad"
                autoComplete="off"
                value={inputAffiliate.localidad}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Localidad...."
              />
            </div>

            <div>
              <label>C.P.: </label>
              <input
                type="number"
                name="ciudadCP"
                autoComplete="off"
                value={inputAffiliate.ciudadCP}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Cod. Postal...."
              />
            </div>

            <div>
              <label>Provincia: </label>
              <input
                type="text"
                name="provincia"
                autoComplete="off"
                value={inputAffiliate.provincia}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Provincia...."
              />
            </div>

            <select id="planes" name="plan" onChange={(e) => handleChange(e)}>
              <option value="">Seleccione su Plan</option>
              {allPlans &&
                allPlans.map((element) => {
                  return (
                    <option value={element.codePlan} id={element._id}>
                      {element.name}
                    </option>
                  );
                })}
            </select>

            <div>
              <label>Contraseña: </label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={inputAffiliate.password}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la contraseña...."
              />
            </div>

          </form>

          <div>


          </div>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="addAffiliate"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="addAffiliate">
              Cargar
            </button>
          )}
          <button onClick={() => setShowModalAdherent(true)}>Agregar Adherente</button>
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>

      <AddAdherent
        handleAddAdherent={handleAddAdherent}
        showModalAdherent={showModalAdherent}
        setShowModalAdherent={setShowModalAdherent}
      />
    </div>
  );
};

export default AddAffiliate;
