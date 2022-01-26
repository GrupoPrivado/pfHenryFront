import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./../../assets/bg2.jpg";
import { Link } from "react-router-dom";
import Credencial from "../Credencial/Credencial";
import { getGroup } from "../../actions/actionGroup";
import logo from "../../assets/logo_white_large.png";
import { getAfiliate } from "../../actions/actionAuth";
import { motion } from "framer-motion";
import { SpinnerCircular } from "spinners-react";

export default function FamilyGroupDetail() {
  const { group, isLoading } = useSelector((state) => state.grupos);
  const { user, route } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.data) {
      dispatch(getAfiliate());
    }
    if (user.grupFamID) {
      dispatch(getGroup(user.grupFamID));
    }
  }, [dispatch, user.grupFamID, user.data]);

  return (
    <div>
      <div
        className="flex flex-col w-full min-h-[66vh] bg-center bg-no-repeat bg-cover contenair"
        style={{ backgroundImage: `url(${Logo})` }}
      >
        <h3 className="self-start mt-3 ml-3 text-4xl font-bold text-white">
          Grupo Familiar
        </h3>
        {/* card */}
        {isLoading ? (
          <SpinnerCircular
            color="#fff"
            style={{ margin: "auto", paddingTop: "20px" }}
          />
        ) : (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center w-full p-5 justify-evenly "
          >
            {/* end header */}
            {group &&
              group.map((member) => (
                <div
                  key={member._id}
                  className="relative inline-block h-full overflow-hidden align-middle transition-all transform border-t border-l border-solid shadow-xl bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-gray-200 border-l-gray-200"
                >
                  <div className="px-4 pt-5 pb-5 sm:p-6">
                    <div className="sm:flex backdrop-filter ">
                      <div className="flex flex-col mt-6 sm:mt-0 justify-evenly">
                        <img
                          src={logo}
                          alt="Logo"
                          className="top-0 self-center w-full pb-8 "
                        />
                        <div className="flex flex-col mt-4 justify-evenly">
                          <h3 className=" pb-4 text-2xl font-normal tracking-widest text-white bottom-20">
                            Nº AFILIADO {member.DNI}
                          </h3>
                          <h3 className=" pb-4 text-xl font-normal tracking-widest text-white bottom-8">
                            NOMBRE {member.nombre} {member.apellido}
                          </h3>
                          <div className="flex justify-between">
                            <h3 className="pt-6 pb-2 text-xl font-normal tracking-widest text-white left-10">
                              PLAN {user.planID.name}
                            </h3>
                            <h3 className="pt-6 pb-2 text-xl font-normal tracking-widest text-white capitalize right-10">
                              {member.parentescoGF}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
