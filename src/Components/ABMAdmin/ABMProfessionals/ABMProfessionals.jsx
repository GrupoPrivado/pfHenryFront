import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProfessionals, getAllSpecialities } from "../../../actions/actionAMBAdmin";

import AddProfessional from "./AddProfessional";
import UpdateProfessional from "./UpdateProfessional";
import ProfessionalsList from "./ABMProfessionalsList";

const ABMProfessionals = () => {
  const dispatch = useDispatch();

  const { allProfessionals } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecialities());
    dispatch(getAllProfessionals());
  }, [dispatch]);

  return (
    <div>
      {/* <button title="Agregar Profesional" onClick={() => setShowModalAdd(true)}>
        Agregar Profesional
      </button> */}

      <ProfessionalsList
        allProfessionals={allProfessionals}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
      />

      <AddProfessional
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
      />

      <UpdateProfessional
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      />
    </div>
  );
};

export default ABMProfessionals;
