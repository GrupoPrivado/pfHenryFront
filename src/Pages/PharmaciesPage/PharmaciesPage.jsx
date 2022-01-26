import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCities,
  getAllCities,
  getAllPharmacies,
  getAllProvinces,
} from "../../actions/actionProviders";
import Pharmacies from "./Pharmacies";
import Logo from "./../../assets/bg2.jpg"


const PharmaciesPage = () => {
  const dispatch = useDispatch();
  const {
    allProviders,
    cities,
    specialties,
    providers,
    pharmacies,
    provinces,
    limitPaged,
    isLoading
  } = useSelector((state) => state.providers);
  
  const [filter, setfilter] = useState({
    provinciaID: "",
    ciudadID: "",
    skip: 0
  });
  useEffect(() => {
    dispatch(getAllProvinces());
  }, [])

  useEffect(() => {
    //dispatch(getAllCities(filter.provinciaID));
    dispatch(getAllPharmacies(filter.provinciaID, filter.ciudadID, filter.skip));
  }, [filter.ciudadID, filter.provinciaID, filter.skip]);


  const handleSelectCity = (e) => {

    const newData = {
      ...filter,
      skip: 0,
      [e.target.name]: e.target.value,
    };

    setfilter(newData);

    //dispatch(getAllPharmacies());
  };

  const handleChangeProvince = (e) => {
    const newProvince = e.target.value
    const newFilters = {
      ciudadID: "",
      provinciaID: e.target.value,
      skip: 0
    };
    if (newProvince !== '') {
      dispatch(getAllCities(newFilters.provinciaID));
    } else {
      dispatch(deleteCities())
    }
    setfilter(newFilters);
  };

  const handleNextPage = () => {
    if(filter.skip < limitPaged){
      setfilter({
        ...filter,
        skip: filter.skip + 10
      });
    }
  };

  const handlePrevPage = () => {
    if(filter.skip >= 10)  {
      setfilter({
        ...filter,
        skip: filter.skip - 10
      });  

    }
  };
  return (
    <div className="flex flex-col w-full bg-cover start min-h-70vh contenair" style={{ backgroundImage: `url(${Logo})` }}>
      <h3 className='mt-3 ml-3 text-4xl font-bold text-left text-white'>Farmacias</h3>
      <div className="flex justify-center gap-6 ">
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
          <label className="text-lg font-semibold text-white">
            Seleccione una Provincia:
          </label>
          <select
            name="provincia"
            value={filter.provinciaID}
            onChange={handleChangeProvince}
            className="relative block w-[400px] px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
          >
            <option value="">Todas</option>
            {provinces &&
              provinces.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.nombre}{" "}
                </option>
              ))}
          </select>
        </div>
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
          <label className="text-lg font-semibold text-white">
            Seleccione una Ciudad:
          </label>
          <select
            name="ciudadID"
            onChange={handleSelectCity}
            className="relative block w-[400px] px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
          >
            <option value="">Todas</option>
            {cities?.map((e) => (
              <option key={e._id} value={e._id}>
                {e.localidad}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Pharmacies pharmacies={pharmacies} isLoading={isLoading} />
      <div>
        <button className="p-4" onClick={handlePrevPage}>Anterior</button>
        <button className="p-4" onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default PharmaciesPage;
