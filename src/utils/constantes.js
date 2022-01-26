import photo from "../assets/logo_photo.png";
import date from "./date.js"

export const profilePhoto = photo;

export const validate = (input) => {
    let errores = {};
    if (input.hasOwnProperty("password") && input.password.length <= 0 && input.password.length < 8) {
        errores.password = "La contraseña debe tener minimo 8 caracteres";
    }
    if (input.hasOwnProperty("repeatPassword") && input.repeatPassword.length <= 0 && input.repeatPassword.length < 8 || input.repeatPassword !== input.password) {
        errores.repeatPassword = "Las contraseñas no coinciden";
    }
    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.correoElectronico)
    ) {
        errores.correoElectronico = "Ingrese un mail válido";
    }
    if (input.DNI.length < 8 || input.DNI.length > 8) {
        errores.DNI = "El DNI debe contener 8 caracteres";
    }
    if (input.telefono.length < 8 || input.telefono.length > 13) {
        errores.telefono = "Mínimo 8 dígitos";
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
    if(input.hasOwnProperty("planID") && input.planID.length <= 0){
        errores.planID = "Debe seleccionar un plan"
    }
    return errores;
};

export const validateLogIn = (input) => {
    let errores = {};
    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.correoElectronico)
    ) {
        errores.correoElectronico = "Ingrese un mail válido";
    }
    if (input.DNI.length <= 8 || input.DNI.length >= 3) {
        errores.DNI = "Ingrese un DNI válido";
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

export const validatePassword = (passwords) => {
    console.log(passwords)
    let errors = {};
    if (passwords.newPass && passwords.newPass.length < 8) {
        errors.passwordNew = "La contraseña debe tener minimo 8 caracteres";
    }
    if (passwords.repeat && passwords.repeat.length < 8) {
        errors.passwordRepeated = "La contraseña debe tener minimo 8 caracteres";
    }
    return errors
}

export const validateContactDetails = (input) => {
    let errores = {};

    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.correoElectronico)
    ) {
        errores.correoElectronico = "Ingrese un mail válido";
    }
    if (input.telefono.length < 8 || input.telefono.length > 13) {
        errores.telefono = "Ingrese un teléfono válido (mínimo 8 dígitos)";
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
    return errores;
}

export function convertClassName(...classes) {
    return classes.filter(Boolean).join(' ')
  }