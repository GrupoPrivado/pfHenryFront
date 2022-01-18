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
    dispatch(getAllPharmacies({}));
  }, []);

  return (
    <div>
      <ABMPharmacyList
        allPharmacies={allPharmacies}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
      />

      {showModalAdd && <AddPharmacy setShowModalAdd={setShowModalAdd} />}

      {showModalUpdate && (
        <UpdatePharmacy
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
        />
      )}
    </div>
  );
};

export default ABMPharmacies;
