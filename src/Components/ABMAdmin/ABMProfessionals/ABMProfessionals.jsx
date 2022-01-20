import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllProfessionals,
  getAllSpecialities,
} from "../../../actions/actionAMBAdmin";

import AddProfessional from "./AddProfessional";
import UpdateProfessional from "./UpdateProfessional";
import ProfessionalsList from "./ABMProfessionalsList";
import UpDownProfessional from "./UpDownProfessional";

const ABMProfessionals = () => {
  const dispatch = useDispatch();

  const { allProfessionals } = useSelector((state) => state.ABMAdmin);
  
  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecialities());
    dispatch(getAllProfessionals({}));
  }, [dispatch]);

  return (
    <div>
      

      <ProfessionalsList
        allProfessionals={allProfessionals}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setShowModalUpDown={setShowModalUpDown}
      />

      {showModalAdd && <AddProfessional setShowModalAdd={setShowModalAdd} />}

       {showModalUpdate && <UpdateProfessional
        setShowModalUpdate={setShowModalUpdate}
      />} 

  {showModalUpDown && (
        <UpDownProfessional
          setShowModalUpDown={setShowModalUpDown}
        />
      )}
    </div>
  );
};

export default ABMProfessionals;
