import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllEmployees,
} from "../../../actions/actionAMBAdmin";

import ABMEmployeesList from "./ABMEmployeesList";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import UpDownEmployee from "./UpDownEmployee";

const ABMEmployees = () => {
  const dispatch = useDispatch();

  const { allEmployees } = useSelector((state) => state.ABMAdmin);
  
  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

  useEffect(() => {
    dispatch(getAllEmployees());

  }, [dispatch]);

  return (
    <div>
      {/* <button title="Agregar Profesional" onClick={() => setShowModalAdd(true)}>
        Agregar Emploeado
      </button> */}

      <ABMEmployeesList
        allEmployees={allEmployees}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setShowModalUpDown={setShowModalUpDown}
      />

      {showModalAdd && <AddEmployee  showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} />}

       {showModalUpdate && <UpdateEmployee
       showModalAdd={showModalAdd}
        setShowModalUpdate={setShowModalUpdate}
      />} 

  {showModalUpDown && (
        <UpDownEmployee
          setShowModalUpDown={setShowModalUpDown}
        />
      )}
    </div>
  );
};

export default ABMEmployees;
