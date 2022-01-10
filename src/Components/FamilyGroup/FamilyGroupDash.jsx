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
      <div className="relative flex flex-col justify-center p-4 m-10 bg-white md:col-span-2 md:row-span-2 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
        <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
          <h1>Grupo Familiar</h1>
        </div>
        <div className='flex flex-col justify-around px-2.5 w-full font-normal text-white shrink-0'>
          {group.length ? (
            group.map((e) => 
              <div className='flex justify-between text-left' key={e._id}>
                <p>{e.nombre}</p>
                <p>{e.apellido}</p>
              </div>
              )) : (
            <div>
              <h1 className='text-center'>Sin Grupo Familiar</h1>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
