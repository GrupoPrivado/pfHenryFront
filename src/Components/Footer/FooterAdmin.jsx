import React from 'react';
import {BiCopyright } from "react-icons/bi";

export default function FooterAdmin() {
  return(
      <div className="absolute bottom-0 w-full h-10vh  flex justify-center items-center bg-gray-800">
          <div className='text-center flex items-center text-gray-400 '>
       <BiCopyright/> 2022 ArpyMedical || All Rights Reserved
      </div>
      </div>
  )

}
