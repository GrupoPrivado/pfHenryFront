import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ViewPlans.module.css";

const ViewPlansUpdate = ({ setShowModalViewUpdate }) => {
  const dispatch = useDispatch();
  const { viewPlan } = useSelector((state) => state.ABMAdmin);
  console.log(viewPlan[0].descripcion);

  const handleClose = () => {
    setShowModalView(false);
  };

  return (
    <div className={styles.modalmain}>
      <div className="h-4/5 overflow-auto p-4">
        {viewPlan[0].descripcion?.map((e) => {
          return (
            <div>
              <div>
                <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">
                  {e[0]}
                </span>
              </div>

              <div>
                <span>{e[1]}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-1/5 flex justify-center items-center">
        <button
          className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handleClose()}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ViewPlansUpdate;
