import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPharmacies } from "../../../actions/actionAMBAdmin";

import AddPharmacy from "./AddPharmacy";
import UpdatePharmacy from "./UpdatePharmacy";
import ABMPharmacyList from "./ABMPharmaciesList";

const ABMPharmacies = () => {
  const dispatch = useDispatch();

  const { allPharmacies } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllPharmacies());
  }, [dispatch]);

  return (
    <div>
       <button title="Agregar Farmacia" onClick={() => setShowModalAdd(true)}>
        Agregar Farmacia
      </button> 

      {/* <ABMPharmacyList
        allPharmacies={allPharmacies}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
      />

      <AddPharmacy
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
      />

      <UpdatePharmacy
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      /> */}
    </div>
  );
};

export default ABMPharmacies;
