import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updatePlan,
  getAllPlansData,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdatePlan.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdatePlan = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updatePlanData, setUpdatePlanData] = useState({
    id: "",
    name: "",
    precio: "",
    descripcion: "",
    planActivo: false,
  });

  useEffect(() => {
    setUpdatePlanData({
      id: updateData._id,
      name: updateData.name,
      precio: updateData.precio,
      descripcion: updateData.descripcion,
      planActivo: updateData.planActivo,
    });
  }, [updateData, dispatch]);

  const handleUpdatePlan = async (event) => {
    let updatedPlan = {
      ...updatePlanData,
      [event.target.name]: event.target.value,
    };

    setUpdatePlanData(updatedPlan);

    setErrors(functionErrors(updatedPlan));
  };

  const handleSubmitUpdatePlan = async (event) => {
    event.preventDefault();
    let response = await dispatch(updatePlan(updatePlanData));
    alert(response.success);
    setUpdatePlanData({
      id: "",
      name: "",
      precio: "",
      descripcion: "",
      planActivo: false,
    });
    await dispatch(getAllPlansData());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdatePlanData({
      id: "",
      name: "",
      precio: "",
      descripcion: "",
      planActivo: false,
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h4>Modificar Plan</h4>
        <h5>{updatePlanData.name}</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdatePlan(e)}
            id="updatePlan"
          >
             <div>
              <label>Precio: </label>
              <input
                type="text"
                name="precio"
                autoComplete="off"
                value={updatePlanData.precio}
                onChange={(e) => handleUpdatePlan(e)}
                placeholder="Ingrese el precio...."
              />
            </div>
           
             <div>
              <label>Descripción: </label>
              <input
                type="text"
                name="descripcion"
                autoComplete="off"
                value={updatePlanData.descripcion}
                onChange={(e) => handleUpdatePlan(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>

            <select
              id="activa"
              name="planActivo"
              onChange={(e) => handleUpdatePlan(e)}
              defaultValue={0}
            >
              <option
                value="false"
                selected={updatePlanData.planActivo === false}
              >
                No
              </option>
              <option
                value="true"
                selected={updatePlanData.planActivo === true}
              >
                Si
              </option>
            </select>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="updatePlan"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button
              type="submit"
              key="submitFormButton"
              form="updatePlan"
            >
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdatePlan;
