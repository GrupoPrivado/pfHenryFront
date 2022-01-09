import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavbarDasboard from '../NavBarDashboard/NavBarDashboard'


export default function () {
  const { user, route } = useSelector((state) => state.auth);

  return (
    <div>
      <NavbarDasboard/>
        <div className="flex flex-col">
        <label>{user.nombre}</label>
        <label>{user.apellido}</label>
        <label>{user.DNI}</label>
        <label>{user.codePlan}</label>

        <Link to="/afiliado">
          <button>Volver</button>
        </Link>
        </div>
    </div>
    
  );
}
