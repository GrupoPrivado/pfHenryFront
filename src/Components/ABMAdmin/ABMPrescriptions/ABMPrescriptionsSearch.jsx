import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { getPrescriptionsByDNI } from "../../../actions/actionAMBAdmin";

const ABMPrescriptionsSearch = () => {
  const dispatch = useDispatch();

  const [dniAffiliateSearch, setDniAffiliateSearch] = useState("");

  const handleChange = (e) => {
    setDniAffiliateSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log('entre')
    if (dniAffiliateSearch !== "" && dniAffiliateSearch >= 8)
   { console.log('entre1')
      dispatch(getPrescriptionsByDNI(dniAffiliateSearch));}
    else alert("El formato del DNI no es correcto");
    setDniAffiliateSearch('')
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-15 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden px-3">
      <input
      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        name="DNI"
        autoComplete="off"
        value={dniAffiliateSearch}
        onChange={(e) => handleChange(e)}
        placeholder="Ingrese el DNI...."
      />
      <button className="group relative justify-items-end w-15 flex py-1.5 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={handleSearch}>Buscar</button>
    </div>
    </div>
    </div>
  );
};

export default ABMPrescriptionsSearch;
