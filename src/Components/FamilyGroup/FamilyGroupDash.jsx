import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserGroupIcon } from '@heroicons/react/outline'

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
      <div className="relative flex flex-col items-center h-full p-4 bg-white justify-evenly md:col-span-1 md:row-span-1 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
        <div className="mt-4 mb-2 text-lg font-medium text-center text-white place-self-center">
          <h3>Grupo Familiar</h3>
        </div>
        <div className="flex items-center mb-8 text-4xl text-white">
          <UserGroupIcon className="text-white pointer-events-none h-11 w-11" />
        </div>
        <div className='flex flex-col justify-around px-2.5 w-full font-normal text-white shrink-0'>
          {group.length ? (
            group.map((e) => 
            <li key={e._id} className='flex justify-between text-left'>
              <p>{e.nombre}</p>
              <p>{e.apellido}</p>
            </li>
              )) : (
            <div>
              <h3 className='text-center'>Sin Grupo Familiar</h3>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
