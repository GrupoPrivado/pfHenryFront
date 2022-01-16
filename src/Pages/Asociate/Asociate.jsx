import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAsociate from "../../Components/FormAsociate/FormAsociate";
import FormAddAsociateGroup from "../../Components/FormAsociate/FormAddAsociateGroup";
//import { postAfiliate } from "../../actions/actionPlanes";
import { getPlanes } from "../../actions/actionPlanes";
import NavBar from "../../Components/NavBar/NavBar";
import { useTitle } from "../../hooks/useTitle";
import { getAllProvinces } from "../../actions/actionProviders";

export default function Asociate() {
  const dispatch = useDispatch();

  const {provinces, cities} = useSelector(state => state.providers)

  useTitle("Asociate a ArpyMedical");
  useEffect(() => {
    dispatch(getPlanes());
    dispatch(getAllProvinces())
  }, [dispatch]);

  console.log(provinces, 'provinciaa')

  const [output, setOutput] = useState([]);
  //const [family, setFamily] = useState([])

  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="flex">
        <div>
          <FormAsociate
            provinces={provinces}
            cities={cities}
            setOutput={setOutput}
            output={output}
            modal={modal}
            setModal={setModal}
          />
        </div>
        {modal && (
          <FormAddAsociateGroup
            provinces={provinces}
            cities={cities}
            setOutput={setOutput}
            output={output}
            modal={modal}
            setModal={setModal}
          />
        )}

        <div></div>
      </div>
    </div>
  );
}
