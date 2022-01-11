import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const Credencial = () => {
  const { user, route } = useSelector((state) => state.auth);

  return (
    <div>
        <div className="flex flex-col">
        <label>{user.nombre}</label>
        <label>{user.apellido}</label>
        <label>{user.DNI}</label>
        <label>{user.codePlan}</label>
        </div>
    </div>
    
  );
}
