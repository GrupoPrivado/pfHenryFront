import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";

import {
  getPrescriptionsByDNI,
  getPrescriptionById,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPrescriptions.module.css";

const ABMSearchPrescriptions = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const [inputDNI, setInputDNI] = useState("");

  const handleSearchPrescriptions = async () => {
    await dispatch(getPrescriptionsByDNI(inputDNI));
  };

  const handleChange = (event) => {
    setInputDNI(event.target.value);
  };

  return (
    <div>
      <div class="max-w-md mx-auto">
        <div class="relative flex items-center w-15 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden px-3">
          {/* <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div> */}

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            name="DNI"
            autoComplete="off"
            value={inputDNI}
            onChange={(e) => handleChange(e)}
            placeholder="Ingrese el DNI...."
          />
          <div>
        <button
          className="group relative justify-items-end w-15 flex  py-1.5 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          title="Agregar Especialidad"
          onClick={handleSearchPrescriptions}
        >
          Buscar
        </button>
      </div>
        </div>
      </div>
      {/* <input
        type="text"
        name="DNI"
        autoComplete="off"
        value={inputDNI}
        onChange={(e) => handleChange(e)}
        placeholder="Ingrese el DNI...."
      /> */}
      
    </div>
  );
};

export default ABMSearchPrescriptions;
