import React from "react";
import {useState} from "react";

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
      <input
        type="text"
        name="DNI"
        autoComplete="off"
        value={inputDNI}
        onChange={(e) => handleChange(e)}
        placeholder="Ingrese el DNI...."
      />

      <button onClick={handleSearchPrescriptions}>Buscar</button>
    </div>
  );
};

export default ABMSearchPrescriptions;
