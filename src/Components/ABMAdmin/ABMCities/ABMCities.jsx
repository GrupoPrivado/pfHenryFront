import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCities } from "../../../actions/actionAMBAdmin";

import AddCity from "./AddCity";


import UpdateCity from "./UpdateCity";
import ABMCiudadesList from "./ABMCitiesList";

const ABMCities = () => {
  const dispatch = useDispatch();

  const { allCities } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <div>
      <button title="Agregar Ciudad" onClick={() => setShowModalAdd(true)}>
        Agregar Ciudad
      </button>

      <ABMCiudadesList allCities={allCities} setShowModalUpdate={setShowModalUpdate}/>

      <AddCity showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} />

      <UpdateCity
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      />
    </div>
  );
};

export default ABMCities;
