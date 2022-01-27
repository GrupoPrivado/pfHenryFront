import React, { useEffect, 
  // useState
  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  // Link, 
  useNavigate } from "react-router-dom";



import CityDash from "../../Components/ABMAdmin/AMBDashAdmin/CityDash";
import { PlansDash } from "../../Components/ABMAdmin/AMBDashAdmin/PlansDash";
import { AfiliateEvolution } from "../../Components/ABMAdmin/AMBDashAdmin/AfiliateEvolution";
import { PrescriptionStatus } from "../../Components/ABMAdmin/AMBDashAdmin/PrescriptionStatus";
import { CashFlow } from "../../Components/ABMAdmin/AMBDashAdmin/CashFlow";
import { Profesionals } from "../../Components/ABMAdmin/AMBDashAdmin/Profesionals";

function DashAdmin() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { route } = useSelector((state) => state.auth);

  useEffect(() => {
    if (route !== "") navigate(`/${route}`);
  }, [dispatch, route, navigate]);

  return (
    <div className="h-90vh bg- w-full grid overflow-hidden grid-cols-3 grid-rows-2 gap-0">
      <div className="shadow-xl rounded-xl m-2 p-4 bg-clip-padding backdrop-filter  bg-opacity-60 border border-gray-200">
        <Profesionals />
      </div>
      <div className="shadow-xl rounded-xl  m-2 p-4 bg-clip-padding backdrop-filter  bg-opacity-60 border border-gray-200">
        <PlansDash />
      </div>
      <div className="shadow-xl rounded-xl m-2 p-4 bg-clip-padding backdrop-filter  bg-opacity-60 border border-gray-200">
        <AfiliateEvolution />
      </div>
      <div className="shadow-xl rounded-xl m-2 p-4 bg-clip-padding backdrop-filter  bg-opacity-60 border border-gray-200">
        <CityDash />
      </div>

      <div className="shadow-xl rounded-xl m-2 p-4 bg-clip-padding backdrop-filter  bg-opacity-60 border border-gray-200">
        <CashFlow />
      </div>

      <div className="shadow-xl rounded-xl m-2 p-4 bg-clip-padding backdrop-filter  bg-opacity-60 border border-gray-200">
        <PrescriptionStatus />
      </div>
    </div>
    
    
  );

}

export default DashAdmin;
