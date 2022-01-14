import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProfilePhoto } from "../../actions/actionAuth";
import { profilePhoto } from "../../utils/constantes";

function EditImage() {
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const [file, setFile] = useState("");
    const [pathImage, setPathImage] = useState(user.urlPhoto || profilePhoto);

    const sendImages = async (file) => {
        const form = new FormData();
        form.append("file", file, "form-data");
        await dispatch(putProfilePhoto(form));
    };
    const sendImage = (e) => {
        e.preventDefault();
        sendImages(file)
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    const onFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type.includes("image")) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function load() {
                    setPathImage(reader.result);
                };
                setFile(file);
            } else {
                console.log("error");
            }
        }
    };

    return (
        <div>
            <form className="flex flex-col items-center" onSubmit={sendImage}>
                <div className="relative m-3">
                    <label className="absolute cursor-pointer right-4 bottom-3" htmlFor="file-input">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-1 text-white border rounded-full bg-primary hover:text-primary hover:bg-white hover:border hover:border-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                    <input className="hidden" id="file-input" type="file" onChange={onFileChange} />
                {pathImage && <img className="border-8 rounded-full w-60 h-60 border-primary" src={pathImage} alt="profile" />}
                </div>
                <button className="w-40 h-10 font-semibold text-white rounded-md bg-primary hover:text-primary hover:bg-white hover:border-4 hover:border-primary" type="submit">Guardar Imagen</button>
            </form>
        </div>
    );
}

//cloudinary --- host para guardar fotos para el perfil

export default EditImage;
