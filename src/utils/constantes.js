import photo from "../assets/logo_photo.png";
import date from "./date.js"

export const profilePhoto = photo;

export const validate = (input) => {
    let errores = {};
    if (input.password && input.password.length < 8) {
        errores.password = "La contraseña debe tener minimo 8 caracteres";
    }
    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.correoElectronico)
    ) {
        errores.correoElectronico = "Ingrese un mail válido";
    }
    if (input.DNI.length < 8) {
        errores.DNI = "DNI mínimo 8 caracteres";
    }
    if (input.telefono.length < 8 || input.telefono.length > 11) {
        errores.telefono = "Ingrese un teléfono válido";
    }
    if (input.fechaNacimiento.length <= 0 || input.fechaNacimiento > date) {
        errores.fechaNacimiento = "La fecha debe ser menor al día de hoy";
    }
    if (input.nombre.length < 3) {
        errores.nombre = "Escriba un nombre válido";
    }
    if (input.apellido.length < 2) {
        errores.apellido = "Escriba un apellido válido";
    }
    if (input.direccion.length < 4) {
        errores.direccion = "Escriba una dirección válida";
    }
    if (input.provinciaID.length <= 0) {
        errores.provinciaID = "Debe seleccionar una provincia";
    }
    if (input.ciudadID.length <= 0) {
        errores.ciudadID = "Debe seleccionar una localidad";
    }
    if (input.parentesco.length <= 0) {
        errores.parentesco = "Debe seleccionar un parentesco";
    }
    if(input.planID && input.planID.length <= 0){
        errores.planID = "Debe seleccionar un plan"
    }
    return errores;
};

export const validateContact = (input) => {
    let errores = {};
    if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.mail)
    ) {
        errores.mail = "Ingrese un mail válido";
    }
    if (input.name.length < 3) {
        errores.name = "Escriba un nombre válido";
    }
    if (input.lastName.length < 2) {
        errores.lastName = "Escriba un apellido válido";
    }
    if(input.message.lenght < 10){
        errores.message = 'Escriba una consulta válida'
    }
    return errores;
}
