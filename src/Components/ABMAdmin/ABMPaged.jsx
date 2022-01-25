import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getAllAffiliates } from "../../actions/actionAMBAdmin";
import { disableBtnPage, enableBtnPage } from "../../utils/ABMStyles";

const ABMPaged = ({ getFunction }) => {
  const dispatch = useDispatch();

  const { limitPaged } = useSelector((state) => state.ABMAdmin);

  const selector = [10, 20, 40];
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const nextPage = () => {
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setSkip(skip - limit);
  };

  useEffect(() => {
    dispatch(getFunction(skip, limit));
  }, [skip, limit]);

  const handleChange = (element) => {
    setLimit(Number(element.target.value));
    setSkip(0);
  };

  return (
    <div className="bg-gray-50  p-6  ">
      <div className="flex flex-col items-center   rounded-md">
        <div className="m-2">
          <span>Cantidad </span>
          <select
            value={limit}
            onChange={handleChange}
            className="   border-2 border-gray-300  rounded-md"
          >
            {selector.map((element) => (
              <option key={element} name="limit" value={element}>
                {element}
              </option>
            ))}
          </select>
          <span> por pagina</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={previousPage}
            className={skip <= 0 ? disableBtnPage : enableBtnPage}
            disabled={skip <= 0 ? true : false}
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            className={
              skip + limit < limitPaged ? enableBtnPage : disableBtnPage
            }
            disabled={skip + limit < limitPaged ? false : true}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ABMPaged;
