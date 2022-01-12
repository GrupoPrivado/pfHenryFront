import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getPlanes } from "../../actions/actionPlanes";
import {Link} from "react-router-dom"
import Plan from './Plan';

function Plans() {
    const dispatch = useDispatch()
    const {planes} = useSelector((state) => state.planes)
    console.log(planes)
    
    useEffect(() => {
        dispatch(getPlanes());
    }, [dispatch]);
    const [active, setActive] = useState({
        Bronce: false,
        Plata: false,
        ORO: false
    });

    const toggleClass = ({target}) => {
        const name = target.name
        const modal = active[name]
        setActive({
            ...active,
            [name]: !modal
        })
    };

    return (
        <div className='flex justify-evenly'>
            {planes.length && planes.map((plan) => (
                <div key={plan._id} className='relative flex flex-col items-center p-6 m-10 w-80 h-80 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-3xl justify-evenly'>
                    <h2 className='text-5xl text-center text-white '>Plan {plan.name}</h2>
                    {/* <Link to="/contact"> */}
                        <button name={plan.name} onClick={toggleClass} className='p-2 text-lg bg-white rounded-md'>Conocer más</button>
                    {/* </Link> */}
                    {
                         active[plan.name] && <Plan plan={plan} />
                    }
                </div>
                
                   
                
            ))}
        </div>
    )
}

export default Plans
