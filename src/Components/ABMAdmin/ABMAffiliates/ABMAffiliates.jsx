import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllAffiliates } from "../../../actions/actionAMBAdmin";

import AddAffiliate from "./AddAffiliate";
import UpdateAffiliate from "./UpdateAffiliate";
import ABMAffiliatesList from "./ABMAffiliatesList";

const ABMAffiliates = () => {
  const dispatch = useDispatch();

  const { allAffiliates } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllAffiliates());
  }, [dispatch]);

  return (
    <div>
      <button title="Agregar Afiliado" onClick={() => setShowModalAdd(true)}>
        Agregar Afiliado
      </button>

      {/* <ABMAffiliatesList allAffiliates={allAffiliates} setShowModalUpdate={setShowModalUpdate}/> */}

      <AddAffiliate showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} />

      {/* <UpdateAffiliate
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      /> */}
    </div>
  );
};

export default ABMAffiliates;
