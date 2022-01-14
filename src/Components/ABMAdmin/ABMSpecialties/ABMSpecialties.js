import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllSpecialities } from "../../../actions/actionAMBAdmin";

import AddSpeciality from "./AddSpecialty";
import UpdateSpeciality from "./UpdateSpecialty";
import ABMSpecialitiesList from "./ABMSpecialtiesList";

const ABMSpecialities = () => {
  const dispatch = useDispatch();

  const { allSpecialities } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecialities());
  }, [dispatch]);

  return (
    <div>
      <button title="Agregar Especialidad" onClick={() => setShowModalAdd(true)}>
        Agregar Especialidad
      </button>

      <ABMSpecialitiesList allSpecialities={allSpecialities} setShowModalUpdate={setShowModalUpdate}/>

      <AddSpeciality showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} />

      <UpdateSpeciality
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      />
    </div>
  );
};

export default ABMSpecialities;
