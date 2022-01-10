import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getGroup } from "../../actions/actionGroup";

export default function FamilyGroupDash() {
  const { group } = useSelector((state) => state.grupos);
  const { afiliate} = useSelector((state) => state.grupos);

  const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(getGroup(afiliado.codeGF))

  // },[dispatch])

  return (
    <Link to="/afiliado/group">
      <div className="flex flex-col items-center p-6 m-10 w-80 h-50 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-3xl justify-evenly">
        <div>
          <h1>Grupo Familiar</h1>
        </div>
        <div>
          {group ? (
            group.map((e) => <div key={e._id}>
                <label htmlFor="">{e.nombre}</label>
                <label htmlFor="">{e.apellido}</label>
                </div>)
          ) : (
            <div>
              <h1>No tenes familiares</h1>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
