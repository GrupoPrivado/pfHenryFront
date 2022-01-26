import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  
  resetDataUpdate,
  updateEmployee,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateEmployee.module.css";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";
import {
  functionErrorsBtn,
  validateUpdateEmployee,
} from "../../../utils/adminFormsControllers";



const UpdateEmployee = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);
  const [errores, setErrores] = useState({});

  const inputEmployeeData = {
    _id: "",
    telefono: "",
    email: "",
  };

  const [updateEmployeeData, setUpdateEmployeeData] =
    useState(inputEmployeeData);

  useEffect(() => {
    setUpdateEmployeeData({
      _id: updateData._id,
      telefono: updateData.telefono,
      email: updateData.email,
    });
  }, [updateData]);

  const handleUpdateEmployee = async (event) => {
    let updatedEmployee = {
      ...updateEmployeeData,
      [event.target.name]: event.target.value,
    };

    setUpdateEmployeeData(updatedEmployee);

    setErrors(functionErrorsBtn(updatedEmployee));

  };

  const handleSubmitUpdateEmployee = async (event) => {
    event.preventDefault();
   
 
    const validateError = validateUpdateEmployee(updateEmployeeData);

    setErrores(validateError);
    
    
    if (Object.entries(validateError).length <= 0) {
    dispatch(updateEmployee(updateEmployeeData));
    setUpdateEmployeeData(inputEmployeeData);
    setShowModalUpdate(false);
    
    
    setErrors(true)
    dispatch(resetDataUpdate());
    }
  };
  
 
  const handleClose = () => {
    setUpdateEmployeeData(inputEmployeeData);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };
  
  
  return (
    <div className={styles.modal}>
      <section className={styles.modalmain}>
      <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Editar Empleado
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90% ">
          <form>
            <div className="mt-5">
              <label className="text-md text-gray-600">Teléfono: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="number"
                name="telefono"
                autoComplete="off"
                value={updateEmployeeData.telefono}
                onChange={(e) => handleUpdateEmployee(e)}
                placeholder="Ingrese el Teléfono...."
              />
              {errores.telefono && (
              <p className="absolute text-red-700">{errores.telefono}</p>
            )}
            </div>

            <div className="mt-5">
              <label className="text-md text-gray-600">E-Mail: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="email"
                name="email"
                autoComplete="off"
                value={updateEmployeeData.email}
                onChange={(e) => handleUpdateEmployee(e)}
                placeholder="Ingrese el E-Mail...."
              />
              {errores.email && (
              <p className="absolute text-red-700">{errores.email}</p> )}
             
            </div>
          
          <div className="flex w-full justify-around mt-10">
          
            <button className={errors ? disableBtn : enableBtn}
                  disabled={errors} onClick={handleSubmitUpdateEmployee}>Guardar</button>
          
          <button  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => handleClose()}>Cerrar</button>
        </div>
        </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateEmployee;