import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import {getAllAffiliatesTitular } from "../../../actions/actionAMBAdmin";

const GetAfifilDNI = () => {
  const dispatch = useDispatch();

  const [dniAffiliateSearch, setDniAffiliateSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDniAffiliateSearch(value);
    if (value.length >= 3) {
      dispatch(getAllAffiliatesTitular(0,10,value));
    }

    if (value.length === 0) {
      dispatch(getAllAffiliatesTitular(0, 10));
    }
   
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
       
        </div>
      </div>
    </div>
  );
};

export default GetAfifilDNI;
