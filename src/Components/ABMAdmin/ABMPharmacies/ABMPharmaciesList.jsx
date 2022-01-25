import React from "react";

import { useDispatch,  } from "react-redux";
import { useEffect, } from "react";

import {
  getPharmacyData,
  
  getAllProvinces,
<<<<<<< HEAD
  filterActiv,
  deleteCities,
=======
  
>>>>>>> development
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPharmacies.module.css";

const ABMPharmaciesList = ({
  setShowModalUpdate,
  setShowModalAdd,
  setDeleteState,
}) => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  const { cities, provinces, allPharmacies } = useSelector((state) => state.ABMAdmin);

  // useEffect(() => {
  //   dispatch(getAllProvinces());
  // }, []);

  // const [filter, setFilter] = useState("");
  // const [filterProvCit, setFilterProvCit] = useState({
  //   provinciaID: "",
  //   ciudadID: "",
  // });

  // useEffect(() => {
  //   dispatch(
  //     getAllPharmacies(0, 10, filterProvCit.provinciaID, filterProvCit.ciudadID)
  //   );
  // }, [filterProvCit.ciudadID, filterProvCit.provinciaID]);

  // const handleChangeProvince = (e) => {
  //   const newProvince = e.target.value
  //   const newFilters = {
  //     ...filterProvCit,
  //     ciudadID: "",
  //     provinciaID: e.target.value,
  //   };
  //   if (newProvince !== '') {
  //     dispatch(getAllCities(newFilters.provinciaID));
  //   } 
  //   // else {
  //   //   dispatch(deleteCities())
  //   // }
  //   setFilterProvCit(newFilters);
  // };

  // const handleSelectCity = (e) => {
  //   const newData = {
  //     ...filterProvCit,
  //     [e.target.name]: e.target.value,
  //   };
  //   setFilterProvCit(newData)
  // };

  // const handleChangeActiv = (e) => {
  //   setFilter(e.target.value);
  //   dispatch(filterActiv(e.target.value));
  // };
=======
  

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  
>>>>>>> development

  const handleEditPharmacy = async (event) => {
    await dispatch(getPharmacyData(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div className={styles.divScroll}>
      <div className="bg-gray-50 min-h-screen  ">
        <div>
          <div className="">
            <div className="bg-white px-6 pb-6 pt-1 rounded-md">
              <div>
                <div className=" flex justify-end">
                  <button
                    className="group relative justify-items-end w-30 flex  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    title="Agregar Especialidad"
                    onClick={() => setShowModalAdd(true)}
                  >
                    Agregar Farmacia
                  </button>
                </div>
<<<<<<< HEAD
                <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-0">
                  {/* <div className="px-4">
                    <label
                      className="text-lg font-semibold text-indigo-800"
                      htmlFor="provincia"
                    >
                      Filtra por Provincia{" "}
                    </label>
                    <select
                      onChange={handleChangeProvince}
                      name="provinciaID"
                      className=" uppercase block w-full  my-2 text-lg font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                      value={filterProvCit.provinciaID}
                    >
                      <option value="">Seleccione Provincia</option>
                      {provinces &&
                        provinces.map((p) => (
                          <option key={p._id} value={p._id}>
                            {p.nombre}
                          </option>
                        ))}
                    </select>
                  </div> */}

                  {/* <div className="px-4">
                    <label
                      className="text-lg font-semibold text-indigo-800"
                      htmlFor="localidad"
                    >
                      Filtra por Localidad{" "}
                    </label>
                    <select
                      onChange={handleSelectCity}
                      name="ciudadID"
                      className=" uppercase block w-full text-lg  my-2  font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                      
                    >
                      <option value="">Seleccione Localidad</option>
                      {cities &&
                        cities.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.localidad}
                          </option>
                        ))}
                    </select>
                  </div> */}
                  {/* <div className="px-4">
                    <label
                      className="text-lg font-semibold text-indigo-800"
                      htmlFor="activo"
                    >
                      Filtra por Activa{" "}
                    </label>
                    <select
                      onChange={handleChangeActiv}
                      name="activo"
                      className=" block w-full  my-2 text-lg font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                      value={filter}
                    >
                      <option value="">Todas</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div> */}
                </div>
=======
                
>>>>>>> development
                <div className="mt-3.5">
                  <div>
                    <div className=" grid overflow-hidden grid-cols-6 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className=" flex justify-center">
                        <span>Nombre </span>
                      </div>
                      <div className=" flex justify-center">
                        <span> Direccion</span>
                      </div>

                      <div className=" flex justify-center">
                        <span>Localidad</span>
                      </div>
                      <div className="  flex justify-center">
                        <span>Provincia</span>
                      </div>

                      <div className="  flex justify-center">
                        <span>Activa </span>
                      </div>

                      <div className="flex justify-center">
                        <span>Editar</span>
                      </div>
                    </div>
                    {allPharmacies.length !== 0 &&
                      allPharmacies.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div className="grid overflow-hidden grid-cols-6 grid-rows-1 gap-0 justify-between  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div className=" flex justify-center ">
                                <span>{element.nombre}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.direccion}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.ciudadID.localidad}</span>
                              </div>
                              <div className=" flex justify-center uppercase ">
                                <span>{element.provinciaID.nombre}</span>
                              </div>

                              <div className=" flex justify-center ">
                                <span>{element.activo ? "Si" : "No"}</span>
                              </div>
                              <div className=" flex justify-around ">
                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) =>
                                    setDeleteState(e.target.value)
                                  }
                                >
                                  Eliminar
                                </button>
                                <button
                                  title="Edit"
                                  key={"edit" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleEditPharmacy(e)}
                                >
                                  Editar
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABMPharmaciesList;
