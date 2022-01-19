import React from "react";

import styles from "./ABMPrescriptions.module.css";

const ABMPrescriptionsListAffData = ({ affiliatePrescriptionData }) => {
  //const { prescriptionDNI } = useSelector((state) => state.ABMAdmin);

  return (
    <div class="bg-gray-50 min-h-screen  ">
      <div class="p-4">
        <div class="bg-white p-6 rounded-md">
          <div className="flex ">
            <div className=" flex flex-col w-1/3">
              <label className="text-md text-gray-600">
                Nombre:{" "}
                <span className="text-sm uppercase text-black">
                  {" "}
                  {affiliatePrescriptionData.nonmbre}{" "}
                </span>
              </label>
              <label className="text-md text-gray-600">
                Apellido:{" "}
                <span className="text-sm uppercase text-black">
                  {" "}
                  {affiliatePrescriptionData.apellido}
                </span>
              </label>
            </div>
            <div className=" flex flex-col w-1/3">
              <label className="text-md text-gray-600">
                DNI:{" "}
                <span className="text-sm uppercase text-black">
                  {affiliatePrescriptionData.DNI}
                </span>
              </label>
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
      </div>
    </div>
  );
};

export default ABMPrescriptionsListAffData;
