import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPrescriptions } from "../../../actions/actionAMBAdmin";

import UpdatePrescription from "./UpdatePrescription";
import ABMPrescriptionsList from "./ABMPrescriptionsList";
import ABMPrescriptionsSearch from "./ABMPrescriptionsSearch";

const ABMPrescriptions = () => {
  const dispatch = useDispatch();

  // const { allPrescriptions } = useSelector((state) => state.ABMAdmin);

  let [showModalUpdate, setShowModalUpdate] = useState(false);

  // useEffect(() => {
  //   dispatch(getAllPrescriptions());
  // }, [dispatch]);

  return (
    <div>
      <ABMPrescriptionsSearch />

      <ABMPrescriptionsList setShowModalUpdate={setShowModalUpdate} />

      {showModalUpdate && (
        <UpdatePrescription setShowModalUpdate={setShowModalUpdate} />
      )}
    </div>
  );
};

export default ABMPrescriptions;
