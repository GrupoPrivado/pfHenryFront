import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllAffiliates, getAllPlans } from "../../../actions/actionAMBAdmin";

import { alertActions } from "../../../actions/actionAlerts";
import { getItem, removeItem } from "../../../actions/actionAuth";

import AddAffiliate from "./AddAffiliate";
import UpdateAffiliate from "./UpdateAffiliate";
import ABMAffiliatesList from "./ABMAffiliatesList";
import UpDownAffiliate from "./UpDownAffiliate";

const ABMAffiliates = () => {
  const dispatch = useDispatch();

  const { allAffiliates, type, message } = useSelector(
    (state) => state.ABMAdmin
  );

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

  useEffect(() => {
    // dispatch(alertActions.clear())
    // if(type){
    //   alert(message)
    // }

    //    if (!allAffiliates) {
    dispatch(getAllAffiliates());
    // }
    // if (route !== "") {
    //   removeItem("userType");
    //   navigate(`/${route}`);
    // }

    dispatch(getAllPlans());
  }, [dispatch]);

  return (
    <div>
      <button title="Agregar Afiliado" onClick={() => setShowModalAdd(true)}>
        Agregar Afiliado
      </button>

      <ABMAffiliatesList
        allAffiliates={allAffiliates}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalUpDown={setShowModalUpDown}
      />

      {showModalAdd && (
        <AddAffiliate
          showModalAdd={showModalAdd}
          setShowModalAdd={setShowModalAdd}
        />
      )}

      {showModalUpdate && (
        <UpdateAffiliate
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
        />
      )}

      {showModalUpDown && (
        <UpDownAffiliate
          showModalUpDown={showModalUpDown}
          setShowModalUpDown={setShowModalUpDown}
        />
      )}
    </div>
  );
};

export default ABMAffiliates;
