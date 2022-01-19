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
    if (dniAffiliateSearch !== "" && dniAffiliateSearch >= 8)
      dispatch(getPrescriptionsByDNI(dniAffiliateSearch));
    else alert("El formato del DNI no es correcto");
  };

  return (
    <div>
      <input
        type="text"
        name="DNI"
        autoComplete="off"
        value={dniAffiliateSearch}
        onChange={(e) => handleChange(e)}
        placeholder="Ingrese el DNI...."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ABMPrescriptionsSearch;
