import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPlansData } from "../../../actions/actionAMBAdmin";

import AddPlan from "./AddPlan";
import UpdatePlan from "./UpdatePlan";
import ABMPlansList from "./ABMPlansList";
import ViewPlans from './ViewPlans'

const ABMPlans = () => {
  const dispatch = useDispatch();

  const { allPlansData } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalView, setShowModalView] = useState(false);

  useEffect(() => {
    dispatch(getAllPlansData());
  }, [dispatch]);

  return (
    <div>
      {/* <button title="Agregar Plan" onClick={() => setShowModalAdd(true)}>
        Agregar Plan
      </button> */}

      <ABMPlansList
        allPlansData={allPlansData}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        showModalView={showModalView}
          setShowModalView={setShowModalView}
      />

      {showModalAdd && (
        <AddPlan
          showModalAdd={showModalAdd}
          setShowModalAdd={setShowModalAdd}
        />
      )}

      {showModalUpdate && (
        <UpdatePlan
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
        />
      )}
{showModalView && (
        <ViewPlans
          showModalView={showModalView}
          setShowModalView={setShowModalView}
        />
      )}


    </div>
  );
};

export default ABMPlans;
