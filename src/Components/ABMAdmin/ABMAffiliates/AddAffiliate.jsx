import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addAffiliate,
  getAllAffiliates,
  getAllProvinces,
  getAllCities,
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

const AddAffiliate = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allPlans, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  let [showModalAdherent, setShowModalAdherent] = useState(false);

  const [errors, setErrors] = useState(true);

  let [inputAffiliate, setInputAffiliate] = useState({
    nombre: "",
    apellido: "",
    DNI: 0,
    fechaNacimiento: "",
    telefono: 0,
    correoElectronico: "",
    ciudadID: "",
    provinciaID: "",
    direccion: 0,
    planID: "",
    password: "",
    alta: "",
    activo: "",
    parentesco:"titular"
  });

  useEffect(() => {
    dispatch(getAllProvinces());
  },[]);

  let [inputAdherent, setInputAdherent] = useState([]);

  const handleChange = (event) => {
    let newAffiliate = {
      ...inputAffiliate,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "DNI") {
      newAffiliate = { ...newAffiliate, password: event.target.value };
    }
    setInputAffiliate(newAffiliate);

    setErrors(functionErrors(newAffiliate));

    newAffiliate = {};
  };

  const handleAddAdherent = (data) => {
    setInputAdherent([...inputAdherent, data]);
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputAffiliate,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputAffiliate(newData);
  };

  const deleteAdherent = (event) => {
    const adherentArray = inputAdherent.filter(
      (element) => element.DNI !== event.target.name
    );
    if (adherentArray) setInputAdherent(adherentArray);
    else setInputAdherent([]);
  };

  const handleSubmitAffiliate = async (event) => {
    event.preventDefault();
    const outputAffiliate = [inputAffiliate, ...inputAdherent];

    let response = await dispatch(addAffiliate(outputAffiliate));
    alert(response.success);
    setInputAffiliate({
      nombre: "",
      apellido: "",
      DNI: 0,
      fechaNacimiento: "",
      telefono: 0,
      correoElectronico: "",
      ciudadID: "",
      provinciaID: "",
      direccion: 0,
      planID: "",
      password: "",
      alta: "",
      activo: "",
      parentesco:"titular"
    });
    setShowModalAdd(false);
    dispatch(getAllAffiliates());
    setErrors(true);
  };

  const handleClose = () => {
    setInputAffiliate({
      nombre: "",
      apellido: "",
      DNI: 0,
      fechaNacimiento: "",
      telefono: 0,
      correoElectronico: "",
      ciudadID: "",
      provinciaID: "",
      direccion: 0,
      planID: "",
      password: "",
      alta: "",
      activo: "",
      parentesco:"titular"
    });
    setShowModalAdd(false);
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Afiliado</h5>
        <div className={styles.container}>
          <form>
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

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={inputAffiliate.provinciaID}
                onChange={handleChangeProvince}
                name="provinciaID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                required
              >
                <option>Seleccione Provincia</option>
                {provinces &&
                  provinces.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="localidad">
                Localidad{" "}
              </label>
              <select
                onChange={(e) => handleChange(e)}
                value={inputAffiliate.ciudadID}
                name="ciudadID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                required
              >
                <option>Seleccione Localidad</option>
                {cities &&
                  cities.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.localidad}
                    </option>
                  ))}
              </select>
            </div>

            <select
              id="planes"
              name="planID"
              onChange={(e) => handleChange(e)}
              value={inputAffiliate.planID}
            >
              <option value="">Seleccione su Plan</option>
              {allPlans &&
                allPlans.map((element) => {
                  return (
                    <option value={element._id} id={element._id}>
                      {element.name}
                    </option>
                  );
                })}
            </select>

            <div>
              <label>Alta: </label>
              <select name="alta" onChange={(e) => handleChange(e)}>
                <option value="">Seleccione:</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div>
              <label>Activo: </label>
              <select name="activo" onChange={(e) => handleChange(e)}>
                <option value="">Seleccione:</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </div>
          </form>

          <div>
            {inputAdherent &&
              inputAdherent.map((element) => {
                return (
                  <div>
                    <label id={"label" + element.nombre}>
                      {element.nombre + " " + element.apellido}
                    </label>
                    <button
                      id={"delete" + element.nombre}
                      name={element.DNI}
                      onClick={(e) => deleteAdherent(e)}
                    >
                      XXX
                    </button>
                  </div>
                );
              })}
          </div>

          {errors ? (
            <button
        
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button onClick={handleSubmitAffiliate}>
              Cargar
            </button>
          )}
          <button onClick={() => setShowModalAdherent(true)}>
            Agregar Adherente
          </button>
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>

      {showModalAdherent && <AddAdherent
        
        setShowModalAdherent={setShowModalAdherent}
      />}
    </div>
  );
};

export default AddAffiliate;
