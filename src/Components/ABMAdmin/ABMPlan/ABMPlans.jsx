import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPlansData } from "../../../actions/actionAMBAdmin";

import AddPlan from "./AddPlan";
import UpdatePlan from "./UpdatePlan";
import ABMPlansList from "./ABMPlansList";

const ABMPlans = () => {
  const dispatch = useDispatch();

  const { allPlansData } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllPlansData());
  }, [dispatch]);

  return (
    <div>
      {/* <button title="Agregar Plan" onClick={() => setShowModalAdd(true)}>
        Agregar Plan
      </button> */}

      <ABMPlansList allPlansData={allPlansData} setShowModalUpdate={setShowModalUpdate} setShowModalAdd={setShowModalAdd} />

      <AddPlan showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} />

      <UpdatePlan
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      />
    </div>
  );
};

export default ABMPlans;
