import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getPlanes } from "../../actions/actionPlanes";
import {Link} from "react-router-dom"

function Plans() {
    const dispatch = useDispatch()
    const {planes} = useSelector((state) => state.planes)
    console.log(planes)

    useEffect(() => {
        dispatch(getPlanes());
    }, [dispatch]);

    return (
        <div className='flex justify-evenly'>
            {planes.length && planes.map((plan) => (
                <div className='flex flex-col items-center p-6 m-10 w-80 h-80 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-3xl justify-evenly'>
                    <h2 className='text-5xl text-center text-white '>Plan {plan.name}</h2>
                    <Link to="/contact">
                        <button className='p-2 text-lg bg-white rounded-md'>Conocer más</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Plans
