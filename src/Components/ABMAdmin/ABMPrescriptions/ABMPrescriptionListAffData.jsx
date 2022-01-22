import React from "react";

import styles from "./ABMPrescriptions.module.css";

const ABMPrescriptionsListAffData = ({ affiliatePrescriptionData }) => {

  return (
    
      
        <div class="bg-white p-4 rounded-md w-full">
          <div className="flex ">
            <div className=" flex flex-col w-2/5">
              <label className="text-md text-gray-600">
                Nombre:{" "}
                <span className="text-sm uppercase text-black">
                  {" "}
                  { affiliatePrescriptionData.nombre}
                </span>
              </label>
              <label className="text-md text-gray-600">
                Apellido:{" "}
                <span className="text-sm uppercase text-black">
                  {" "}
                  {affiliatePrescriptionData.apellido}
                </span>
              </label>
              <label className="text-md text-gray-600">
                DNI:{" "}
                <span className="text-sm uppercase text-black">
                  {affiliatePrescriptionData.DNI}
                </span>
              </label>
            </div>
            <div className=" flex flex-col w-3/5">
              
              <label className="text-md text-gray-600">
                E-mail:
                <span className="text-sm uppercase text-black">
                  {" "}
                  {affiliatePrescriptionData.correoElectronico}
                </span>
              </label>
              <label className="text-md text-gray-600">
                Activo:{" "}
                <span className="text-sm uppercase text-black">
                  {" "}
                  {affiliatePrescriptionData.activo ? "Si" : "No"}
                </span>
              </label>
            </div>
          </div>
        </div>
      
    
  );
};

export default ABMPrescriptionsListAffData;
