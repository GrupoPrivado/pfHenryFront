// import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { putProfilePhoto } from '../../actions/actionAuth';
// import { api } from '../../urlHostApi';

const MiCuenta = () => {
    const dispatch = useDispatch()
    const [file, setFile] = useState('')
    const [pathImage, setPathImage] = useState('')


     const sendImages = async (file) => {
         const form = new FormData();
         form.append('file', file, 'form-data');

         await dispatch(putProfilePhoto(form))

         //return axios.post(`${api}/afiliados/profile`, form)
     }

     const sendImage = (e) => {
         e.preventDefault();
         sendImages(file)
     }
     
     const onFileChange = (e) => {
         if(e.target.files && e.target.files.length > 0){
             const file = e.target.files[0];
             if(file.type.includes('image')){
                 const reader = new FileReader();
                 reader.readAsDataURL(file)
                 reader.onload = function load() {
                     setPathImage(reader.result)
                 }

                 setFile(file)
             }
             else {console.log('error')}
         }
     }
     return (
       <div>
           <form onSubmit={sendImage}>
               <input 
                 type='file'
                 onChange={onFileChange}
               />

                 <button type='submit'>enviar</button>
                 {
                     pathImage && <img src={pathImage} alt='profile'/>
                 }
           </form>
       </div>
     );
 }

 export default MiCuenta

