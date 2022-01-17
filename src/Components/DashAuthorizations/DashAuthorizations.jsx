import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { getRecetas } from "../../actions/actionRecet";

function DashAuthorizations() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { recetas } = useSelector(state => state.recetas);

  useEffect(() => {
    dispatch(getRecetas())
  }, [dispatch])

  const recipes = {
    recipe: [
      {
        numReceta: "0001",
        tipoReceta: "Farmacia",
        descripcion: "Ibuprofeno 400mg"
      },
      {
        numReceta: "0002",
        tipoReceta: "Farmacia",
        descripcion: "Amoxicilina + Clavulanico 500mg"
      },
      {
        numReceta: "0003",
        tipoReceta: "Farmacia",
        descripcion: "Diclofenac + Dexametasona"
      },
      {
        numReceta: "0004",
        tipoReceta: "Farmacia",
        descripcion: "Buscapina Intramuscular"
      },
      {
        numReceta: "0005",
        tipoReceta: "Farmacia",
        descripcion: "Ketorolac"
      },
    ]
  }

  return (
    <Link to="/afiliado/autorizaciones" className="relative flex flex-col justify-start p-4 bg-white md:col-span-2 md:row-span-1 sm:row-span-1 sm:col-span-3 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
      {/* <div className="relative flex flex-col justify-start p-4 bg-white md:col-span-2 md:row-span-1 sm:row-span-1 sm:col-span-3 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined"> */}
        <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
          <h3>Recetas</h3>
        </div>
        <div >
          <div className='flex flex-col px-2.5 font-normal text-white w-full shrink-0'>

            {recipes.recipe.length ? recipes.recipe.map(e => (
              <li key={e.numReceta} className='flex justify-between text-left sm:px-10 md:px-0'>
                <p>{e.tipoReceta}</p>
                <p>{e.descripcion}</p>
                {/* <p>{e.autorizada}</p> */}
              </li>
            )) : <div>
              <h3 className='text-center'>Sin Recetas</h3>
            </div>}
          </div>
        </div>
      {/* </div> */}
    </Link>
  );
}

export default DashAuthorizations;
