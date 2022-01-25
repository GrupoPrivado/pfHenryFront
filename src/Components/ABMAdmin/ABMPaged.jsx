import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getAllAffiliates } from "../../actions/actionAMBAdmin";
import { disableBtn, enableBtn } from "../../utils/ABMStyles";


const ABMPaged = ({getFunction}) => {
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
    <div>
      <div>
        <select value={limit} onChange={handleChange}>
          {selector.map((element) => (
            <option key={element} name="limit" value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          onClick={previousPage}
          className={skip <= 0 ? disableBtn : enableBtn}
          disabled={skip <= 0 ? true : false}
        >
          Previous Page
        </button>
        <button
          onClick={nextPage}
          className={skip + limit < limitPaged ? enableBtn : disableBtn}
          disabled={skip + limit < limitPaged ? false : true}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ABMPaged;
