import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllAffiliates, getAllPlans } from "../../../actions/actionAMBAdmin";

import AddAffiliate from "./AddAffiliate";
import UpdateAffiliate from "./UpdateAffiliate";
import ABMAffiliatesList from "./ABMAffiliatesList";
import UpDownAffiliate from "./UpDownAffiliate";

import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";
import ABMPaged from "../ABMPaged";

const ABMAffiliates = () => {
  const dispatch = useDispatch();

  const { allAffiliates } = useSelector((state) => state.ABMAdmin);

  const { type, message } = useSelector((state) => state.alerts);

  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (!activeAlert || !errorAlert) {
      dispatch(alertActions.clear());
    }

    if (type === "alert-success") {
      setActiveAlert(true);
      setAlertMessage(message);
    }
    if (type === "alert-danger") {
      setErrorAlert(true);
      setAlertMessage(message);
    }

    dispatch(getAllAffiliates());
  }, [message, type, activeAlert, errorAlert]);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

  useEffect(() => {
    dispatch(getAllAffiliates(0, 10));
    dispatch(getAllPlans());
  }, []);

  return (
    <div>
      <ABMAffiliatesList
        allAffiliates={allAffiliates}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalUpDown={setShowModalUpDown}
        setShowModalAdd={setShowModalAdd}
      />
      <ABMPaged getFunction={getAllAffiliates} />

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

      {activeAlert &&
        alertSweet(
          "success",
          alertMessage,
          false,
          false,
          setActiveAlert,
          !activeAlert,
          () => {},
          false,
          2500
        )}
      {errorAlert &&
        alertSweet(
          "error",
          alertMessage,
          false,
          false,
          setErrorAlert,
          !errorAlert,
          () => {},
          false,
          2500
        )}
    </div>
  );
};

export default ABMAffiliates;
