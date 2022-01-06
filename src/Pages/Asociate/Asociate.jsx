import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormAsociate from "../../Components/FormAsociate/FormAsociate";
import FormAddAsociateGroup from "../../Components/FormAsociate/FormAddAsociateGroup";
//import { postAfiliate } from "../../actions/actionPlanes";
import { getPlanes } from "../../actions/actionPlanes";

export default function Asociate() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlanes());
      }, [dispatch]);

    const [output, setOutput] = useState([])
 
    //const [modal, showModal] = useState(true)
    
    return (
        <div>
            <FormAsociate setOutput={setOutput} output={output}/>

            <FormAddAsociateGroup setOutput={setOutput} output={output}/>
         

        </div>
    )
}
