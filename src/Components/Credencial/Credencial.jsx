import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Credencial({toggleClass}) {
  const { user, route } = useSelector((state) => state.auth);

  return (
    <div name='credencial' onClick={toggleClass} className="z-50 cursor-pointer absolute inset-8 bg-black-rgba">
      <div className="flex absolute bg-secondary flex-col">
        <label>{user.nombre}</label>
        <label>{user.apellido}</label>
        <label>{user.DNI}</label>
        <label>{user.codePlan}</label>
      </div>
    </div>
  )
}

export default Credencial;
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Credencial() {
//   const { user, route } = useSelector((state) => state.auth);

//   return (
//     <div className="absolute w-screen h-screen inset-8">
//       <div className="flex absolute  bg-secondary flex-col">
//         <label>{user.nombre}</label>
//         <label>{user.apellido}</label>
//         <label>{user.DNI}</label>
//         <label>{user.codePlan}</label>
//       </div>
//     </div>
//   )
// }

// export default Credencial;
