import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPrescriptions } from "../../../actions/actionAMBAdmin";


import UpdatePrescription from "./UpdatePrescription";
import ABMPrescriptionsList from "./ABMPrescriptionsList";


const ABMPrescriptions = () => {
  const dispatch = useDispatch();

  // const { allPrescriptions } = useSelector((state) => state.ABMAdmin);

  let [showModalUpdate, setShowModalUpdate] = useState(false);

  // useEffect(() => {
  //   dispatch(getAllPrescriptions());
  // }, [dispatch]);

  return (
    <div>   

      

      <ABMPrescriptionsList setShowModalUpdate={setShowModalUpdate}/>

      <UpdatePrescription
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      />
    </div>
  );
};

export default ABMPrescriptions;
