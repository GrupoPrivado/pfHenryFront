import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getRecetas } from "../../actions/actionRecet";




function Authorizations() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { recetas } = useSelector(state => state.recetas);
 

  useEffect(()=>{
    dispatch(getRecetas(user.DNI))
  }, [dispatch])



  return (
    <div className="relative flex flex-col justify-center p-4 bg-primary md:col-span-2 md:row-span-2 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
      <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
        <h1>Recetas</h1>
      </div>
      <div className="flex flex-row justify-around">
        <div className='flex flex-col px-2.5 font-normal text-white shrink-0'>
          
          {recetas.map(e => (
            <div className='flex justify-between text-left'>
              <p>{e.tipoReceta}</p>
              <p>{e.descripcion}</p>
              <p>{e.autorizada}</p>
            </div>
          ))}
        </div>
       
          {/* {recetas.map(e => (
            <div className='flex flex-col justify-between text-left'>
              <p htmlFor="">{e.pendientes.practica}</p>
              <p htmlFor="">{e.pendientes.fecha}</p>
            </div>
          ))} */}
        
      </div>
    </div>
  );
}

export default Authorizations;
