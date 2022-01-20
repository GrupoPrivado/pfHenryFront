import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils/authUtils";
import NavBarDashAdmin from "../../Components/NavBarDashboard/NavbarDashAdmin";

import ABMSpecialities from "../../Components/ABMAdmin/ABMSpecialties/ABMSpecialties";
import ABMAffiliates from "../../Components/ABMAdmin/ABMAffiliates/ABMAffiliates";
import ABMPharmacies from "../../Components/ABMAdmin/ABMPharmacies/ABMPharmacies";
import ABMPlans from "../../Components/ABMAdmin/ABMPlan/ABMPlans";
import ABMProfessionals from "../../Components/ABMAdmin/ABMProfessionals/ABMProfessionals";
import ABMPrescriptions from "../../Components/ABMAdmin/ABMPrescriptions/ABMPrescriptions";
import ABMPharmaciesList from "../../Components/ABMAdmin/ABMPharmacies/ABMPharmaciesList";
import AMBDashGral from "../../Components/ABMAdmin/AMBDashAdmin/AMBDashGral";
import  CityDash  from "../../Components/ABMAdmin/AMBDashAdmin/CityDash";
import { PlansDash } from "../../Components/ABMAdmin/AMBDashAdmin/PlansDash";
import { AfiliateEvolution } from "../../Components/ABMAdmin/AMBDashAdmin/AfiliateEvolution";


function DashAdmin() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { route } = useSelector((state) => state.auth);

  useEffect(() => {
    if (route !== "") navigate(`/${route}`);
  }, [dispatch, route, navigate]);

  return (
    <div className="h-70vh w-full grid overflow-hidden grid-cols-3 grid-rows-2 gap-0">
      <div > 
         <CityDash/>
      </div>
      <div ><PlansDash/></div>
      <div><AfiliateEvolution/></div>



   
    </div>
  );

}

export default DashAdmin;
