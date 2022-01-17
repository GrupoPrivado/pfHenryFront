<<<<<<< HEAD
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import NavbarDasboard from '../NavBarDashboard/NavBarDashboard'
import CardMemberGroup from './CardMemberGroup';
=======
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Logo from "./../../assets/bg2.jpg"
>>>>>>> development
import { Link } from "react-router-dom";
import Credencial from '../Credencial/Credencial';
import { getGroup } from '../../actions/actionGroup';
import  logo  from '../../assets/logo_white_large.png'

export default function FamilyGroupDetail() {
    const { group } = useSelector((state) => state.grupos);
<<<<<<< HEAD
    const [isActive, setActive ] = useState(false)
    const [info, setInfo ] = useState({
        name: '',
        lastname: '',
        dni: ''
    })

    return (
        <div>
        {/* <NavbarDasboard/> */}

            {group && group.map((e) => (<div key={e._id}>
            
                <CardMemberGroup 
                name={e.nombre}
                lastname={e.apellido}
                dni={e.DNI}
                />
            </div>
            ))}
            <Link to='/afiliado'>
            <button>Volver</button></Link>
=======
    const { user, route } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGroup(user.grupFamID))

    }, [dispatch])
    console.log("group: ", group)

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive)
    };

    return (
        <div>
            <div className="flex items-center justify-center w-full min-h-screen bg-cover contenair" style={{ backgroundImage: `url(${Logo})` }}>
                {/* card */}
                <div className="flex flex-col items-center justify-center w-1/2 p-5 bg-white bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
                    <div className="flex justify-between font-semibold header-card">
                        <p className='text-4xl font-semibold text-white'>Grupo Familiar</p>
                    </div>
                    {/* end header */}
                    {group && group.map((member) => (
                        <div className="relative inline-block h-full overflow-hidden align-middle transition-all transform border-t border-l border-solid shadow-xl bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-gray-200 border-l-gray-200">
                            <div className="px-4 pt-5 pb-5 sm:p-6">
                                <div className="sm:flex backdrop-filter ">
                                    <div className="flex flex-col mt-6 sm:mt-0 sm:ml-4 justify-evenly">
                                        <img src={logo} alt="Logo" className="top-0 self-center w-full pb-8 " />
                                        <div className="mt-16 pt-14">
                                            <h3 className="absolute pb-4 text-2xl font-normal tracking-widest text-white bottom-20">
                                                Nº AFILIADO {member.DNI}
                                            </h3>
                                            <h3 className="absolute pb-4 text-xl font-normal tracking-widest text-white bottom-8">
                                                NOMBRE {member.nombre} {member.apellido} 
                                            </h3>
                                            <div >
                                                <h3 className="absolute bottom-0 pt-6 pb-2 text-xl font-normal tracking-widest text-white left-10">
                                                    PLAN {user.planID.name}  
                                                </h3>
                                                <h3 className="absolute bottom-0 pt-6 pb-2 text-xl font-normal tracking-widest text-white capitalize right-10">
                                                    {member.parentescoGF}  
                                                </h3>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
>>>>>>> development
        </div>
    )
}
