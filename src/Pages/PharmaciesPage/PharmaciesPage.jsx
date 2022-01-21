import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCities,
  getAllPharmacies,
  getAllProvinces,
} from "../../actions/actionProviders";
import Pharmacies from "../PharmaciesPage/Pharmacies";


const PharmaciesPage = () => {
  const dispatch = useDispatch();
  const {
    allProviders,
    cities,
    specialties,
    providers,
    pharmacies,
    provinces,
  } = useSelector((state) => state.providers);

  const [filter, setfilter] = useState({
    provinciaID: "",
    ciudadID: "",
  });

  useEffect(() => {
    dispatch(getAllProvinces());
    dispatch(getAllCities(filter.provinciaID));
    dispatch(getAllPharmacies(filter.provinciaID, filter.ciudadID));
  }, [filter.ciudadID, filter.provinciaID]);

  const handleSelectCity = (e) => {
    console.log("<<<<< target >>>>", e.target.name, ">>>>>>", e.target.value);
    const newData = {
      ...filter,
      [e.target.name]: e.target.value,
    };
    console.log("hand  ", newData);
    setfilter(newData);

    //dispatch(getAllPharmacies());
  };

  const handleChangeProvince = (e) => {
    const newProvince = e.target.value
    const newFilters = {
      ciudadID: "",
      provinciaID: e.target.value,
    };
    if(newProvince !== ''){
      dispatch(getAllCities(newFilters.provinciaID));
      
    } 
    setfilter(newFilters);
  };
  return (
    <div className="h-70vh">
      <div className="flex justify-center gap-6 ">
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
          <label className="text-lg font-semibold">
            Seleccione una Provincia:
          </label>
          <select
            name="provincia"
            value={filter.provinciaID}
            onChange={handleChangeProvince}
            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 bg-white"
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
          <label className="text-lg font-semibold">
            Seleccione una Ciudad:
          </label>
          <select
            name="ciudadID"
            onChange={handleSelectCity}
            className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 bg-white"
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
      <Pharmacies pharmacies={pharmacies} />
    </div>
  );
};

export default PharmaciesPage;
