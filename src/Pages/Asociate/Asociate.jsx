import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormAsociate from "../../Components/FormAsociate/FormAsociate";
import FormAddAsociateGroup from "../../Components/FormAsociate/FormAddAsociateGroup";
//import { postAfiliate } from "../../actions/actionPlanes";
import { getPlanes } from "../../actions/actionPlanes";
import NavBar from "../../Components/NavBar/NavBar";
import { useTitle } from "../../hooks/useTitle";

export default function Asociate() {
    const dispatch = useDispatch()
    useTitle('Asociate a ArpyMedical')
    useEffect(() => {
      dispatch(getPlanes());

      }, [dispatch]);

    const [output, setOutput] = useState([])
    //const [family, setFamily] = useState([])
 
    const [modal, setModal] = useState(false)
    
    return (
      <div>
        
        <div className="flex">
          <div>
            <FormAsociate setOutput={setOutput} output={output} modal={modal} setModal={setModal}/>
          </div>
          {modal && (
            <FormAddAsociateGroup setOutput={setOutput} output={output} modal={modal} setModal={setModal}/>
          )}
          

          <div></div>
        </div>
      </div>
    );
}
